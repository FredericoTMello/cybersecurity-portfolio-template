/**
 * Social Media Configuration
 * 
 * Central configuration for all social media links and profiles.
 * Update these values with your own social media URLs.
 */

export const socialConfig = {
  /**
   * LinkedIn profile
   */
  linkedin: {
    username: 'marcos-oliveira-infosec',
    url: 'https://linkedin.com/in/marcos-oliveira-infosec',
    label: 'LinkedIn',
  },

  /**
   * GitHub profile
   */
  github: {
    username: 'zer0spin',
    url: 'https://github.com/zer0spin',
    label: 'GitHub',
  },

  /**
   * Twitter/X profile
   */
  twitter: {
    username: 'zer0spin',
    handle: '@zer0spin',
    url: 'https://twitter.com/zer0spin',
    label: 'X (Twitter)',
  },
} as const;

export type SocialConfig = typeof socialConfig;
