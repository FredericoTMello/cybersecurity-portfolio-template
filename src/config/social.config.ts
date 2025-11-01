/**
 * Social Media Configuration
 *
 * Central configuration for all social media links and profiles.
 * ⚠️ IMPORTANT: Update these values with your own social media URLs!
 *
 * Replace all placeholder usernames and URLs with your actual profiles.
 */

export const socialConfig = {
  /**
   * LinkedIn profile
   */
  linkedin: {
    username: 'frederico-mello-w1',
    url: 'https://linkedin.com/in/frederico-mello-w1',
    label: 'LinkedIn',
  },

  /**
   * Twitter/X profile
   */
  twitter: {
    username: 'Frederico Mello',
    handle: '@Frederico_W1',
    url: 'https://x.com/Frederico_W1',
    label: 'X (Twitter)',
  },

  /**
   * Instagram profile (ADICIONADO!)
   */
  instagram: {
    username: 'frederico.w1',
    url: 'https://instagram.com/frederico.w1',
    label: 'Instagram',
  },

  /**
   * WhatsApp contact (ADICIONADO!)
   */
  whatsapp: {
    number: '5516XXXXXXXX', // Coloque o seu número com DDI+DDD+NUMERO
    url: 'https://wa.me/5516XXXXXXXX', // Coloque seu número aqui também
    label: 'WhatsApp',
  },

  /**
   * Email contact
   */
  email: {
    address: 'fredericomello.w1@gmail.com',
    url: 'mailto:fredericomello.w1@gmail.com',
    label: 'Email',
  },

  // Outras redes podem ser adicionadas aqui (se desejar)
  // mastodon: { ... }
  // medium: { ... }
} as const;

export type SocialConfig = typeof socialConfig;
