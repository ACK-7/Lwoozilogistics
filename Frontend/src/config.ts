/**
 * Frontend Configuration
 * Centralized configuration for API endpoints, app metadata, and feature flags
 */

const config = {
  // Application Metadata
  app: {
    name: 'Rwoozi China-Uganda Logistics',
    version: '1.0.0',
    description:
      'Premium sourcing, inspection, and freight logistics solutions connecting China and Uganda',
    url: import.meta.env.VITE_APP_URL || 'https://rwoozilogistics.com',
  },

  // API Configuration
  api: {
    baseUrl:
      import.meta.env.VITE_API_URL || 'http://localhost:8000',
    version: 'v1',
    endpoints: {
      contact: '/api/contact',
      health: '/api/health',
    },
  },

  // SEO Configuration
  seo: {
    siteName: 'Rwoozi China-Uganda Logistics',
    description:
      'Premium sourcing, inspection, and freight logistics solutions connecting China and Uganda. Customs clearance, LCL/FCL shipping, car importation, and money transfer services.',
    keywords:
      'logistics, sourcing, freight, shipping, customs clearance, Uganda, East Africa',
    ogImage:
      import.meta.env.VITE_OG_IMAGE_URL ||
      'https://rwoozilogistics.com/og-image.png',
  },

  // Branding
  branding: {
    fullName: 'Rwoozi China-Uganda Logistics',
    suffix: 'LIMITED',
    initials: 'RL',
    tagline: 'Your trusted China-based sourcing and freight partner',
  },

  // Contact Information
  contact: {
    email: 'info@rwoozilogistics.com',
    phone: '+256 774 544866',
    whatsapp: '+256 774 544866',
    country: 'Uganda',
  },

  // Social Media Links
  social: {
    twitter: 'https://x.com/rwoozi?s=11&t=eMGNNtNBbnJldDPxLkqSCg',
    tiktok: 'https://tiktok.com/@rwoozi1',
    instagram: 'https://www.instagram.com/rwooziandrew?igsh=Z2FmeDdzZmc5ZjMx&utm_source=qr',
    snapchat: 'https://snapchat.com/t/x427Xttw',
    whatsapp: 'https://wa.me/256774544866',
  },

  // Feature Flags
  features: {
    enableContactForm: true,
    enableChat: false,
    enableBooking: false,
  },

  // Environment
  environment: import.meta.env.MODE || 'development',
  isDevelopment: import.meta.env.MODE === 'development',
  isProduction: import.meta.env.MODE === 'production',
};

export default config;
