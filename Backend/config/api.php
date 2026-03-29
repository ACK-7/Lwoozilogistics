<?php

return [
    /*
    |--------------------------------------------------------------------------
    | API Configuration
    |--------------------------------------------------------------------------
    |
    | This file contains API-specific configuration for the application,
    | including base URLs, versioning, and rate limiting settings.
    |
    */

    'name' => 'Rwoozi China-Uganda Logistics API',
    'version' => 'v1',
    'description' => 'API for Rwoozi China-Uganda Logistics contact forms and services',

    /*
    |--------------------------------------------------------------------------
    | Base URLs
    |--------------------------------------------------------------------------
    */
    'base_url' => env('API_BASE_URL', 'http://localhost:8000'),
    'frontend_url' => env('FRONTEND_URL', 'http://localhost:3000'),

    /*
    |--------------------------------------------------------------------------
    | API Endpoints
    |--------------------------------------------------------------------------
    */
    'endpoints' => [
        'contact' => '/api/contact',
        'health' => '/api/health',
    ],

    /*
    |--------------------------------------------------------------------------
    | Rate Limiting
    |--------------------------------------------------------------------------
    */
    'rate_limit' => [
        'enabled' => env('API_RATE_LIMIT_ENABLED', true),
        'requests_per_minute' => env('API_RATE_LIMIT_REQUESTS', 60),
        'contact_form_limit' => env('CONTACT_FORM_RATE_LIMIT', 5), // 5 submissions per minute
    ],

    /*
    |--------------------------------------------------------------------------
    | Response Format
    |--------------------------------------------------------------------------
    */
    'response' => [
        'format' => 'json',
        'include_timestamp' => true,
        'include_request_id' => true,
    ],
];
