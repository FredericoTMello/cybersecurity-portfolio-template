/**
 * useHeaderNavigation Hook
 * Manages navigation links based on current page
 */

'use client';

import { usePathname } from 'next/navigation';

export interface NavLink {
  href: string;
  label: string;
  isAnchor: boolean;
}

/**
 * Returns navigation links appropriate for current page.
 * Home page uses anchor links, other pages use absolute paths.
 */
export function useHeaderNavigation() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const getNavLinks = (): NavLink[] => {
    if (isHome) {
      return [
        { href: '#home', label: 'Início', isAnchor: true },
        { href: '/about', label: 'Sobre', isAnchor: false },
        { href: '/projects', label: 'Soluções 360°', isAnchor: false },
        { href: '/homelabs', label: 'Home Labs', isAnchor: false },
        // Removidos:
        // { href: '#formation', label: 'Formação', isAnchor: true },
        // { href: '#experience', label: 'Experiência', isAnchor: true },
        { href: '/blog', label: 'Blog', isAnchor: false },
        { href: '#contact', label: 'Contato', isAnchor: true },
      ];
    }

    return [
      { href: '/', label: 'Início', isAnchor: false },
      { href: '/about', label: 'Sobre', isAnchor: false },
      { href: '/projects', label: 'Soluções 360°', isAnchor: false },
      { href: '/homelabs', label: 'Home Labs', isAnchor: false },
      // Removidos:
      // { href: '/formation', label: 'Formação', isAnchor: false },
      // { href: '/experience', label: 'Experiência', isAnchor: false },
      { href: '/blog', label: 'Blog', isAnchor: false },
      { href: '/contact', label: 'Contato', isAnchor: false },
    ];
  };

  return {
    navLinks: getNavLinks(),
    isHome,
    pathname,
  };
}
