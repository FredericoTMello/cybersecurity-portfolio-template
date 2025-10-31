export const siteConfig = {
  name: 'Frederico Mello - Consultor Financeiro W1',
  codename: 'W1 Consultoria',
  author: {
    name: 'Frederico Mello',
    codename: 'frederico-w1',
    jobTitle: 'Consultor Financeiro | Gestão Patrimonial',
    tagline: 'Crescer com propósito é a forma mais inteligente de prosperar.',
    description:
      'Como Consultor W1, conecto você à maior consultoria financeira do Brasil para planejar, proteger e expandir seu legado. Com visão 360º e tecnologia de Wealth Management, ajudo você a transformar recursos em impacto, equilíbrio e tranquilidade.',
    organization: 'W1 Consultoria Financeira & Wealth Management',
  },

  urls: {
    base: 'https://frederico-w1.com.br',
    canonical: 'https://frederico-w1.com.br',
  },

  seo: {
    title: 'Frederico Mello - Consultor Financeiro W1 | Planejamento Patrimonial',
    description:
      'Consultoria financeira personalizada com a força da W1, líder nacional. Planejamento 360°, investimentos, proteção patrimonial e legado. Atendimento presencial em Ribeirão Preto e online para todo Brasil.',
    keywords: [
      'consultor financeiro',
      'planejamento financeiro',
      'consultoria financeira',
      'gestão de patrimônio',
      'W1 Consultoria',
      'consultor W1',
      'investimentos',
      'consultoria imobiliária',
      'educação financeira',
      'Ribeirão Preto',
      'Finanças pessoais',
      'independência financeira',
      'Frederico Mello',
      'consultoria patrimonial',
    ],
  },

  defaultImage: '/images/site/og-frederico-w1.png',

  languages: {
    default: 'pt-BR',
    supported: ['pt-BR'],
  },

  theme: {
    defaultMode: 'light',
    color: '#0066cc',
  },

  education: [
    {
      name: 'W1 Academy - Wealth Management',
      type: 'EducationalOrganization',
    },
    {
      name: 'Correios - Gestão Comercial',
      type: 'Organization',
    },
    {
      name: 'Certificação ANCORD',
      type: 'Certification',
    },
  ],

  // ESTES DOIS PRIMEIROS ITENS SÃO OS QUE VÃO APARECER NO BADGE
  expertise: [
    'Consultor Financeiro',
    'Gestão Patrimonial',
    'Investimentos Personalizados',
    'Consultoria Imobiliária',
    'Educação Financeira',
    'Wealth Management',
    'Proteção Patrimonial',
    'Renda Fixa e Variável',
    'Previdência Privada',
    'Otimização Tributária',
    'Estratégias Legado Familiar',
    'Finanças para Autônomos e PJ',
    'Gestão de Alto Patrimônio',
    'Mentoria em Consultoria',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
