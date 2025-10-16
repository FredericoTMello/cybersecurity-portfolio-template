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
    title: 'Beuni Birthday Management Platform',
    description:
      'Enterprise-grade corporate birthday management platform with automated gift sending, real-time notifications, and comprehensive analytics dashboard. Built with DevSecOps principles: 92% test coverage, zero critical vulnerabilities, JWT authentication, CSRF protection, and A+ security rating. Active development with 500+ managed files.',
    image: '/images/projects/beuni.png',
    status: 'Tech Challenge',
    statusColor: 'bg-cyber-green',
    tags: ['Next.js 14', 'NestJS 10', 'TypeScript', 'PostgreSQL 15', 'Redis', 'DevSecOps', 'Vitest', 'Jest'],
    links: {
      github: 'https://github.com/zer0spin/beuni-desafio',
      demo: 'https://beuni-frontend-one.vercel.app',
    },
  },
  {
    title: 'Cybersec-BR',
    description:
      'Collaborative open-source knowledge base for Brazilian cybersecurity community. Features comprehensive beginner guides, structured career paths (Red Team & Blue Team), certification guidance, and job market analysis across different experience levels. MIT licensed with growing community of contributors focused on knowledge sharing and professional networking.',
    image: '/images/projects/cybersecbr.png',
    status: 'Brazil 🇧🇷',
    statusColor: 'bg-cyber-cyan',
    tags: ['Open Source', 'Community', 'Education', 'Career Guidance', 'Markdown', 'GitHub'],
    links: {
      github: 'https://github.com/zer0spin/cybersec-br',
    },
  },
  {
    title: 'InfoSec Digest',
    description:
      'Automated cybersecurity news aggregator with Security by Design architecture. Uses Python 3.11, GitHub Actions for hourly updates, and GitOps principles. Features include XSS prevention via client-side rendering, resilient RSS feed processing with error handling, content classification via keywords.json, and lightweight Pico.css interface. Zero infrastructure costs with 574+ commits.',
    image: '/images/projects/infosec-digest.png',
    status: 'In Use',
    statusColor: 'bg-cyber-green',
    tags: ['Python 3.11', 'GitHub Actions', 'GitOps', 'Pico.css', 'Security by Design', 'Automation'],
    links: {
      github: 'https://github.com/zer0spin/infosec-digest',
      demo: 'https://infosec-digest.vercel.app/',
    },
  },
  {
    title: 'zer0spin Portfolio',
    description:
      'Professional Blue Team cybersecurity portfolio with integrated blog system using MDX, modern Next.js 14 + TypeScript architecture, and responsive cyberpunk design. Features technical articles on Threat Hunting, SIEM, Incident Response, and Security Operations with optimized static rendering.',
    image: 'current-site',
    status: 'Production',
    statusColor: 'bg-cyber-green',
    tags: ['Next.js 14', 'MDX Blog', 'TypeScript', 'Production', 'SSG', 'Responsive'],
    links: {
      github: 'https://github.com/zer0spin/zer0spin',
    },
  },
];
