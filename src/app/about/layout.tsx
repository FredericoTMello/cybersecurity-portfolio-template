import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Sobre - Consultor Financeiro W1',
  description: 'Conheça minha trajetória em finanças, formação e experiência como consultor credenciado W1. Planejamento patrimonial, soluções personalizadas e dedicação à sua prosperidade.',
  url: '/about',
  type: 'profile',
  image: '/images/about/profile.png',
  tags: [
    'sobre', 
    'consultor financeiro', 
    'W1 Consultoria', 
    'planejamento patrimonial',
    'trajetória',
    'finanças',
    'consultoria personalizada'
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
