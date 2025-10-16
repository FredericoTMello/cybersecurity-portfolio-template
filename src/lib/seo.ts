import type { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  author?: string;
  tags?: string[];
}

const defaultSEO = {
  siteName: 'zer0spin - Blue Team Cybersecurity',
  defaultTitle: 'Marcos Oliveira (zer0spin) - Blue Team Cybersecurity Professional',
  defaultDescription: 'Defending systems. Connecting people. Inspiring the next generation of Blue Team. Professional portfolio of Marcos Oliveira, specialist in Blue Team operations, defensive cybersecurity, SIEM, SOC, and incident response.',
  baseUrl: 'https://zer0spin.com',
  defaultImage: '/images/site/og-default.png',
  twitter: '@zer0spin',
  linkedin: 'marcos-oliveira-infosec',
  github: 'zer0spin',
};

export function generateSEO({
  title,
  description,
  url,
  image,
  type = 'website',
  publishedTime,
  author,
  tags = [],
}: SEOConfig): Metadata {
  const fullTitle = title === defaultSEO.defaultTitle ? title : `${title} | zer0spin`;
  const fullUrl = `${defaultSEO.baseUrl}${url || '/'}`;
  const relativeImage = image || defaultSEO.defaultImage;
  const ogImage = relativeImage.startsWith('http') ? relativeImage : `${defaultSEO.baseUrl}${relativeImage}`;

  // Base keywords for all pages
  const baseKeywords = [
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
  ];

  const allKeywords = [...baseKeywords, ...tags];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: author || 'Marcos Oliveira' }],
    creator: 'Marcos Oliveira',
    publisher: 'Marcos Oliveira',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: 'en_US',
      alternateLocale: ['pt_BR'],
      url: fullUrl,
      siteName: defaultSEO.siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: 'summary_large_image',
      site: defaultSEO.twitter,
      creator: defaultSEO.twitter,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        'en-US': fullUrl,
        'pt-BR': fullUrl,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      other: {
        'msvalidate.01': 'your-bing-verification-code',
      },
    },
  };
}

// Schema.org JSON-LD structured data
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Marcos Oliveira',
    alternateName: 'zer0spin',
    url: defaultSEO.baseUrl,
    image: `${defaultSEO.baseUrl}/images/about/zer0spin.png`,
    sameAs: [
      `https://twitter.com/${defaultSEO.twitter.replace('@', '')}`,
      `https://linkedin.com/in/${defaultSEO.linkedin}`,
      `https://github.com/${defaultSEO.github}`,
    ],
    jobTitle: 'Blue Team Cybersecurity Specialist',
    worksFor: {
      '@type': 'Organization',
      name: 'Independent',
    },
    knowsAbout: [
      'Cybersecurity',
      'Blue Team Operations',
      'SIEM',
      'Incident Response',
      'Threat Hunting',
      'Security Operations Center',
      'Defensive Security',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Universidade Federal de Uberlândia',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Centro Universitário Estácio de Sá',
      },
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: defaultSEO.siteName,
    url: defaultSEO.baseUrl,
    description: defaultSEO.defaultDescription,
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: 'Marcos Oliveira',
      alternateName: 'zer0spin',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${defaultSEO.baseUrl}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBlogPostSchema({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  author,
  tags,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  tags?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: image ? `${defaultSEO.baseUrl}${image}` : `${defaultSEO.baseUrl}${defaultSEO.defaultImage}`,
    url: `${defaultSEO.baseUrl}${url}`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: author,
      url: defaultSEO.baseUrl,
    },
    publisher: {
      '@type': 'Person',
      name: 'Marcos Oliveira',
      logo: {
        '@type': 'ImageObject',
        url: `${defaultSEO.baseUrl}/images/about/zer0spin.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${defaultSEO.baseUrl}${url}`,
    },
    keywords: tags?.join(', '),
    inLanguage: 'en-US',
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${defaultSEO.baseUrl}${item.url}`,
    })),
  };
}

export function generateProjectSchema({
  name,
  description,
  url,
  image,
  dateCreated,
  programmingLanguage,
  keywords,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
  dateCreated?: string;
  programmingLanguage?: string[];
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name,
    description,
    url,
    codeRepository: url,
    ...(image && { image: `${defaultSEO.baseUrl}${image}` }),
    ...(dateCreated && { dateCreated }),
    ...(programmingLanguage && { programmingLanguage }),
    ...(keywords && { keywords: keywords.join(', ') }),
    author: {
      '@type': 'Person',
      name: 'Marcos Oliveira',
      url: defaultSEO.baseUrl,
    },
  };
}

/**
 * Sanitize JSON data to prevent XSS in JSON-LD structured data
 * 
 * This function escapes dangerous HTML characters that could be used
 * for XSS attacks when JSON is embedded in HTML <script> tags.
 * 
 * @param data - Any JSON-serializable data
 * @returns Safely escaped JSON string
 * 
 * @example
 * ```tsx
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{ __html: sanitizeJSON(schema) }}
 * />
 * ```
 */
export function sanitizeJSON(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/'/g, '\\u0027')
    .replace(/"/g, '\\u0022');
}

export default defaultSEO;
