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
      'Consultoria para organização das finanças familiares e pessoais: diagnóstico financeiro, construção de orçamento, definição de metas e acompanhamento mensal. Foco em independência financeira e bem-estar.',
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
      'Solução personalizada para controle de fluxo de caixa, redução de custos e maximização de resultados. Atendimento dedicado a micro e pequenas empresas.',
    image: '/images/site/pessoas.jpg',
    status: 'Agende Agora',
    statusColor: 'bg-cyber-cyan',
    tags: ['Empresas', 'Gestão', 'Controle', 'Resultado', 'Financeiro'],
    links: {
      demo: 'https://wa.me/55999999999?text=Consultoria+Empresarial',
    },
  },
  {
    title: 'Análise de Investimentos',
    description:
      'Avaliação, diversificação e recomendações personalizadas para portfólio financeiro. Ideal para quem busca entender riscos e oportunidades em renda fixa, variável e fundos.',
    image: '/images/site/investimentos.webp',
    status: 'Especializado',
    statusColor: 'bg-cyber-green',
    tags: ['Investimentos', 'Renda Fixa', 'Renda Variável', 'Fundos', 'Carteira'],
    links: {
      demo: 'https://calendly.com/seuusuario/investimentos',
    },
  },
  {
    title: 'Diagnóstico Financeiro Empresarial',
    description:
      'Diagnóstico completo das finanças da empresa, com relatórios, gráficos e indicadores. Serve como base para decisões estratégicas e desenvolvimento do negócio.',
    image: '/images/site/diagnostico.webp',
    status: 'Produção',
    statusColor: 'bg-cyber-green',
    tags: ['Diagnóstico', 'Indicação', 'Consultoria Empresarial', 'Gestão', 'Relatório'],
    links: {
      demo: 'https://frederico-w1.com',
    },
  },
];
