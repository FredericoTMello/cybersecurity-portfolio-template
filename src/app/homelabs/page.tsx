import type { Metadata } from 'next';
import { Header } from '@/components/layout';
import HomelabsSection from '@/components/pages/Homelabs'; // Mantido igual
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Serviços W1 e Soluções Financeiras',
  description: 'Soluções exclusivas de planejamento financeiro, gestão patrimonial, investimentos e proteção para você e sua empresa. Descubra como a W1 Consultoria transforma seu patrimônio.',
  url: '/homelabs',
  type: 'website',
  tags: [
    'consultoria financeira',
    'serviços W1',
    'gestão de patrimônio',
    'planejamento financeiro',
    'investimentos',
    'proteção patrimonial',
    'consultoria empresarial'
  ],
});

export default function HomelabsPage() {
  return (
    <main className="relative cyber-bg-animated">
      <Header />
      <HomelabsSection /> {/* Este componente vai exibir seus serviços, cases e depoimentos se já estiver adaptado */}
    </main>
  );
}
