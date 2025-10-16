import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'About Marcos Oliveira (zer0spin) - Blue Team Specialist',
  description: 'From quantum mechanics to defensive cybersecurity. Learn about my journey from Physics to Blue Team operations, combining scientific methodology with practical security implementation.',
  url: '/about',
  type: 'profile',
  image: '/images/about/zer0spin.png',
  tags: ['about', 'cybersecurity professional', 'blue team specialist', 'physics background', 'career transition'],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
