/**
 * Navigation Configuration
 * Centralized navigation items for consistent routing across the application
 */

import { 
  Home, 
  FolderGit2, 
  FileText, 
  Mail,
  Linkedin,
  Twitter,
  FlaskConical,
  Instagram,
  MessageCircle
} from 'lucide-react';

export interface NavItem {
  id: string;
  icon: React.ElementType;
  label: string;
  href?: string;
  isExternal?: boolean;
}

/**
 * Main navigation items
 * Used in FloatingNav and mobile navigation
 */
export const NAV_ITEMS: NavItem[] = [
  { 
    id: 'home', 
    icon: Home, 
    label: 'Início', 
    href: '/' 
  },
  { 
    id: 'projects-preview', 
    icon: FolderGit2, 
    label: 'Soluções 360°', 
    href: '/projects' 
  },
  { 
    id: 'homelabs-preview', 
    icon: FlaskConical, 
    label: 'Laboratórios', 
    href: '#homelabs-preview' 
  },
  // Removidos:
  // { id: 'formation', icon: GraduationCap, label: 'Formação', href: '/formation' },
  // { id: 'experience', icon: Briefcase, label: 'Experiência', href: '/experience' },
  { 
    id: 'blog-preview', 
    icon: FileText, 
    label: 'Blog', 
    href: '/blog' 
  },
  { 
    id: 'contact', 
    icon: Mail, 
    label: 'Contato', 
    href: '/contact' 
  },
];

/**
 * Social media links
 * Displayed in FloatingNav and footer
 */
export const SOCIAL_ITEMS: NavItem[] = [
  {
    id: 'linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    isExternal: true,
    href: 'https://linkedin.com/in/frederico-mello-w1'
  },
  {
    id: 'instagram',
    icon: Instagram,
    label: 'Instagram',
    isExternal: true,
    href: 'https://instagram.com/fredericomello.w1'
  },
  {
    id: 'whatsapp',
    icon: MessageCircle, // Use Lucide MessageCircle como ícone “whatsapp minimalista”
    label: 'WhatsApp',
    isExternal: true,
    href: 'https://wa.me/5516XXXXXXXX'
  },
  {
    id: 'twitter',
    icon: Twitter,
    label: 'X (Twitter)',
    isExternal: true,
    href: 'https://twitter.com/frederico_w1'
  },
];

/**
 * Navigation configuration
 */
export const NAV_CONFIG = {
  // Scroll offset for active section detection (default value, can be calculated dynamically)
  scrollOffset: 300,
  
  // Smooth scroll behavior
  scrollBehavior: 'smooth' as ScrollBehavior,
  
  // Animation delays (in seconds)
  animationDelays: {
    baseDelay: 0.1,
    socialDelay: 0.15,
    themeDelay: 0.2,
  },
} as const;

/**
 * Get scroll offset dynamically based on viewport height
 * Use this in client components where window is available
 */
export function getScrollOffset(): number {
  if (typeof window === 'undefined') {
    return NAV_CONFIG.scrollOffset;
  }
  return window.innerHeight / 3;
}

/**
 * Get all navigation item IDs
 * Useful for scroll tracking
 */
export function getAllNavIds(): string[] {
  return NAV_ITEMS.map(item => item.id);
}

/**
 * Get navigation item by ID
 */
export function getNavItemById(id: string): NavItem | undefined {
  return NAV_ITEMS.find(item => item.id === id);
}

/**
 * Get social item by ID
 */
export function getSocialItemById(id: string): NavItem | undefined {
  return SOCIAL_ITEMS.find(item => item.id === id);
}
