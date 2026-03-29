<?php

return [
    /*
    |--------------------------------------------------------------------------
    | SEO Configuration
    |--------------------------------------------------------------------------
    |
    | Site-wide SEO settings for meta tags, Open Graph, and structured data.
    |
    */

    'site_name' => 'Rwoozi China-Uganda Logistics',
    'site_description' => 'Premium sourcing, inspection, and freight logistics solutions connecting China and Uganda. Customs clearance, LCL/FCL shipping, car importation, and money transfer services.',
    'site_keywords' => 'logistics, sourcing, freight, shipping, customs clearance, China, Uganda',

    /*
    |--------------------------------------------------------------------------
    | Open Graph Tags
    |--------------------------------------------------------------------------
    */
    'og' => [
        'type' => 'website',
        'image' => env('OG_IMAGE_URL', 'https://yoursite.com/og-image.png'),
        'image_alt' => 'Rwoozi China-Uganda Logistics',
    ],

    /*
    |--------------------------------------------------------------------------
    | Contact Information
    |--------------------------------------------------------------------------
    */
    'contact' => [
        'email' => env('BUSINESS_EMAIL', 'info@rwoozilogistics.com'),
        'phone' => '+256 774 544866',
        'whatsapp' => '+256 774 544866',
        'country' => 'Uganda',
    ],

    /*
    |--------------------------------------------------------------------------
    | Social Media
    |--------------------------------------------------------------------------
    */
    'social' => [
        'twitter' => 'https://x.com/rwoozi?s=11&t=eMGNNtNBbnJldDPxLkqSCg',
        'tiktok' => 'https://tiktok.com/@rwoozi1',
        'instagram' => 'https://www.instagram.com/rwooziandrew?igsh=Z2FmeDdzZmc5ZjMx&utm_source=qr',
        'snapchat' => 'https://snapchat.com/t/x427Xttw',
        'whatsapp' => 'https://wa.me/256774544866',
    ],

    /*
    |--------------------------------------------------------------------------
    | Schema.org Structured Data
    |--------------------------------------------------------------------------
    */
    'schema' => [
        'type' => 'Organization',
        'name' => 'Rwoozi China-Uganda Logistics',
        'description' => 'Premium sourcing, inspection, and freight logistics solutions connecting China and Uganda',
        'url' => env('APP_URL', 'https://rwoozilogistics.com'),
        'logo' => env('LOGO_URL', 'https://rwoozilogistics.com/logo.png'),
        'same_as' => [
            'https://x.com/rwoozi?s=11&t=eMGNNtNBbnJldDPxLkqSCg',
            'https://tiktok.com/@rwoozi1',
            'https://www.instagram.com/rwooziandrew?igsh=Z2FmeDdzZmc5ZjMx&utm_source=qr',
            'https://snapchat.com/t/x427Xttw',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Robots & Indexing
    |--------------------------------------------------------------------------
    */
    'robots' => [
        'index' => env('ROBOTS_INDEX', 'index'),
        'follow' => env('ROBOTS_FOLLOW', 'follow'),
        'max_snippet' => -1,
        'max_image_preview' => 'large',
    ],
];
