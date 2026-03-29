<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class ContactController extends Controller
{
    /**
     * Store a newly created contact submission
     */
    public function store(Request $request): JsonResponse
    {
        try {
            // Validation rules with comprehensive checks
            $validated = $request->validate([
                'firstName' => 'required|string|max:50|regex:/^[a-zA-Z\s\-\']+$/',
                'lastName' => 'required|string|max:50|regex:/^[a-zA-Z\s\-\']+$/',
                'phone' => 'required|string|max:20|regex:/^[\d\s\+\-\(\)]+$/',
                'email' => 'required|email:rfc,dns|max:100',
                'service' => 'required|string|in:Supplier Sourcing,Product Inspection,LCL Shipping (Less Container Load),FCL Shipping (Full Container Load),Customs Clearance,Consultations,Car Importation,Money Transfer,Other',
                'message' => 'required|string|min:10|max:1000',
            ], [
                'firstName.required' => 'First name is required.',
                'firstName.regex' => 'First name can only contain letters, spaces, hyphens, and apostrophes.',
                'firstName.max' => 'First name cannot exceed 50 characters.',
                
                'lastName.required' => 'Last name is required.',
                'lastName.regex' => 'Last name can only contain letters, spaces, hyphens, and apostrophes.',
                'lastName.max' => 'Last name cannot exceed 50 characters.',
                
                'phone.required' => 'Phone number is required.',
                'phone.regex' => 'Phone number format is invalid.',
                'phone.max' => 'Phone number cannot exceed 20 characters.',
                
                'email.required' => 'Email address is required.',
                'email.email' => 'Please enter a valid email address.',
                'email.max' => 'Email cannot exceed 100 characters.',
                
                'service.required' => 'Please select a service.',
                'service.in' => 'The selected service is invalid.',
                
                'message.required' => 'Message is required.',
                'message.min' => 'Message must be at least 10 characters.',
                'message.max' => 'Message cannot exceed 1000 characters.',
            ]);

            // Create contact with sanitized data
            $contact = Contact::create([
                'first_name' => trim($validated['firstName']),
                'last_name' => trim($validated['lastName']),
                'phone' => trim($validated['phone']),
                'email' => strtolower(trim($validated['email'])),
                'service' => $validated['service'],
                'message' => trim($validated['message']),
                'status' => 'new',
            ]);

            // Send emails using raw mail
            try {
                $subject = "New Contact Form Submission from {$contact->first_name} {$contact->last_name}";
                $adminEmail = config('mail.from.address');
                $fromName = config('mail.from.name');
                
                $adminBody = "New Contact Form Submission\n\n"
                    . "From: {$contact->first_name} {$contact->last_name}\n"
                    . "Email: {$contact->email}\n"
                    . "Phone: {$contact->phone}\n"
                    . "Service: {$contact->service}\n\n"
                    . "Message:\n{$contact->message}\n\n"
                    . "Submitted: {$contact->created_at->format('F j, Y g:i A')}\n";
                
                \Illuminate\Support\Facades\Mail::raw($adminBody, function ($message) use ($adminEmail, $fromName, $subject) {
                    $message->from($adminEmail, $fromName)
                        ->replyTo('support@rwoozilogistics.com', $fromName)
                        ->to($adminEmail)
                        ->subject($subject);
                });
            } catch (\Exception $e) {
                \Log::error('Failed to send admin email: ' . $e->getMessage());
            }

            try {
                $custSubject = 'Thank You for Contacting Rwoozi China-Uganda Logistics';
                $custBody = "Thank you for contacting Rwoozi China-Uganda Logistics!\n\n"
                    . "Hello {$contact->first_name},\n\n"
                    . "We have received your message and will respond as soon as possible.\n\n"
                    . "Your Submission Details:\n"
                    . "Service: {$contact->service}\n"
                    . "Submitted: {$contact->created_at->format('F j, Y g:i A')}\n\n"
                    . "Our team will contact you via:\n"
                    . "Email: {$contact->email}\n"
                    . "Phone: {$contact->phone}\n\n"
                    . "For urgent matters, reach us on WhatsApp: +256 774 544866\n\n"
                    . "Best regards,\nRwoozi China-Uganda Logistics Team\n";
                
                $adminEmail = config('mail.from.address');
                $fromName = config('mail.from.name');
                
                \Illuminate\Support\Facades\Mail::raw($custBody, function ($message) use ($contact, $adminEmail, $fromName, $custSubject) {
                    $message->from($adminEmail, $fromName)
                        ->replyTo('support@rwoozilogistics.com', $fromName)
                        ->to($contact->email)
                        ->subject($custSubject);
                });
            } catch (\Exception $e) {
                \Log::error('Failed to send confirmation email: ' . $e->getMessage());
            }

            return response()->json([
                'success' => true,
                'message' => 'Thank you! Your message has been received. We\'ll get back to you shortly.',
                'data' => $contact,
            ], 201);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed. Please check your input.',
                'errors' => $e->validator->errors()->messages(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while processing your request. Please try again.',
                'error' => config('app.debug') ? $e->getMessage() : null,
            ], 500);
        }
    }

    /**
     * Get all contacts (for admin panel)
     */
    public function index(): JsonResponse
    {
        $contacts = Contact::orderBy('created_at', 'desc')->paginate(15);
        return response()->json($contacts);
    }

    /**
     * Get a single contact
     */
    public function show($id): JsonResponse
    {
        $contact = Contact::findOrFail($id);
        $contact->update(['status' => 'viewed']);
        return response()->json($contact);
    }

    /**
     * Update contact status
     */
    public function updateStatus($id, Request $request): JsonResponse
    {
        $validated = $request->validate([
            'status' => 'required|in:new,viewed,replied',
        ]);

        $contact = Contact::findOrFail($id);
        $contact->update(['status' => $validated['status']]);

        return response()->json([
            'success' => true,
            'message' => 'Contact status updated.',
            'data' => $contact,
        ]);
    }

    /**
     * Delete a contact (soft delete)
     */
    public function destroy($id): JsonResponse
    {
        $contact = Contact::findOrFail($id);
        $contact->delete();

        return response()->json([
            'success' => true,
            'message' => 'Contact deleted.',
        ]);
    }
}
