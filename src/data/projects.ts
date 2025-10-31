export interface ProjectLink {
  github?: string;
  demo?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  status: string;
  statusColor: string;
  tags: string[];
  links: ProjectLink;
}

export const projects: Project[] = [
  {
    title: 'Planejamento Financeiro Pessoal',
    description:
      'Organize suas finanças e conquiste independência com clareza e equilíbrio. A consultoria inclui diagnóstico financeiro, orçamento personalizado, metas de curto e longo prazo e acompanhamento mensal. O objetivo é transformar seu dinheiro em qualidade de vida e tranquilidade.',
    image: '/images/site/5-dicas.jpg',
    status: 'Serviço Premium',
    statusColor: 'bg-cyber-green',
    tags: ['Orçamento', 'Metas', 'Consultoria', 'Planejamento', 'Educação Financeira'],
    links: {
      demo: 'https://calendly.com/seuusuario/consultoria',
    },
  },
  {
    title: 'Consultoria Empresarial',
    description:
      'Solução personalizada para empresas que desejam estruturar suas finanças com eficiência. Trabalhamos com controle de fluxo de caixa, redução de custos, análise de resultados e relatórios gerenciais para apoiar decisões estratégicas e o crescimento sustentável do negócio.',
    image: '/images/site/pessoas.jpg',
    status: 'Agende Agora',
    statusColor: 'bg-cyber-cyan',
    tags: ['Empresas', 'Gestão', 'Controle', 'Resultados', 'Financeiro'],
    links: {
      demo: 'https://wa.me/55999999999?text=Consultoria+Empresarial',
    },
  },
  {
    title: 'Consultoria Patrimonial Pessoal',
    description:
      'Estratégias para organização e proteção do seu patrimônio. O serviço inclui planejamento sucessório, estruturação de bens, análise de riscos e visão de legado, com foco em segurança e continuidade familiar.',
    image: '/images/site/consultoria.jpg',
    status: 'Especializado',
    statusColor: 'bg-cyber-green',
    tags: ['Patrimônio', 'Proteção', 'Legado', 'Sucessão', 'Planejamento Patrimonial'],
    links: {
      demo: 'https://calendly.com/seuusuario/patrimonial',
    },
  },
  {
    title: 'Diagnóstico Financeiro Empresarial',
    description:
      'Análise completa da saúde financeira da empresa. O diagnóstico identifica gargalos, oportunidades e apresenta indicadores de performance com relatórios visuais que servem de base para decisões estratégicas e planos de ação sustentáveis.',
    image: '/images/site/consultoria-empresa.jpg',
    status: 'Em Produção',
    statusColor: 'bg-cyber-green',
    tags: ['Diagnóstico', 'Gestão', 'Empresas', 'Relatórios', 'Análise Financeira'],
    links: {
      demo: 'https://frederico-w1.com',
    },
  },
  {
    title: 'Planejamento de Metas Pessoais',
    description:
      'Para cada objetivo, um caminho possível. Seja comprar uma casa, fazer uma viagem, casar ou custear os estudos dos filhos, criamos um plano financeiro sob medida para transformar seus projetos de vida em realidade, com equilíbrio e previsibilidade.',
    image: '/images/site/planejamento.jpg',
    status: 'Em Destaque',
    statusColor: 'bg-cyber-cyan',
    tags: ['Objetivos', 'Sonhos', 'Planejamento', 'Metas', 'Consultoria Pessoal'],
    links: {
      demo: 'https://calendly.com/seuusuario/metas',
    },
  },
];
