/**
 * Site Configuration
 * 
 * Central configuration for site-wide metadata, branding, and URLs.
 * Update these values to customize your portfolio.
 */

export const siteConfig = {
  /**
   * Site identity and branding
   */
  name: 'zer0spin - Blue Team Cybersecurity',
  codename: 'zer0spin',
  author: {
    name: 'Marcos Oliveira',
    codename: 'zer0spin',
    jobTitle: 'Blue Team Cybersecurity Specialist',
    tagline: 'Applying reverse entropy to system defense.',
    description: 'From quantum mechanics to defense bits. I analyze threats with the same curiosity I pursued subatomic particles. Blue Team by passion, physicist by training.',
    organization: 'Independent',
  },

  /**
   * Site URLs and domains
   */
  urls: {
    base: 'https://zer0spin.com',
    canonical: 'https://zer0spin.com',
  },

  /**
   * Default SEO metadata
   */
  seo: {
    title: 'Marcos Oliveira (zer0spin) - Blue Team Cybersecurity Professional',
    description: 'Defending systems. Connecting people. Inspiring the next generation of Blue Team. Professional portfolio of Marcos Oliveira, specialist in Blue Team operations, defensive cybersecurity, SIEM, SOC, and incident response.',
    keywords: [
      'cybersecurity',
      'blue team',
      'defensive security',
      'security analyst',
      'SOC analyst',
      'SIEM',
      'incident response',
      'threat hunting',
      'security operations',
      'Marcos Oliveira',
      'zer0spin',
    ],
  },

  /**
   * Default OG image
   */
  defaultImage: '/images/site/og-default.png',

  /**
   * Supported languages
   */
  languages: {
    default: 'en-US',
    supported: ['en-US', 'pt-BR'],
  },

  /**
   * Theme configuration
   */
  theme: {
    defaultMode: 'dark',
    color: '#0a1929',
  },

  /**
   * Educational background
   */
  education: [
    {
      name: 'Universidade Federal de Uberlândia',
      type: 'EducationalOrganization',
    },
    {
      name: 'Centro Universitário Estácio de Sá',
      type: 'EducationalOrganization',
    },
  ],

  /**
   * Areas of expertise
   */
  expertise: [
    'Cybersecurity',
    'Blue Team Operations',
    'SIEM',
    'Incident Response',
    'Threat Hunting',
    'Security Operations Center',
    'Defensive Security',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
