/**
 * MobileMenu Component
 * Mobile navigation drawer with links and social icons
 */

'use client';

import { m, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { socialConfig } from '@/config/social.config';

interface NavLink {
  href: string;
  label: string;
  isAnchor: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  links: NavLink[];
  onClose: () => void;
}

export function MobileMenu({ isOpen, links, onClose }: MobileMenuProps) {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    // Extract section ID from href (remove #)
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Classe igual para todos os ícones
  const iconClass =
    'w-9 h-9 rounded-lg bg-cyber-teal-dark border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan hover:border-cyber-cyan hover:shadow-neon-cyan transition-all duration-300';

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="lg:hidden bg-cyber-teal-dark border-t border-cyber-cyan/10 overflow-hidden"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {links.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="px-4 py-3 text-cyber-gray-light hover:text-cyber-cyan hover:bg-cyber-navy/50 rounded-lg transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="px-4 py-3 text-cyber-gray-light hover:text-cyber-cyan hover:bg-cyber-navy/50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Social Links - Mobile */}
            <div className="flex items-center gap-4 px-4 py-3 mt-2 border-t border-cyber-cyan/10">
              <a
                href={socialConfig.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className={iconClass}
                aria-label={socialConfig.linkedin.label}
              >
                <Linkedin size={18} />
              </a>
              <a
                href={socialConfig.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className={iconClass}
                aria-label={socialConfig.twitter.label}
              >
                <Twitter size={18} />
              </a>
              <a
                href={socialConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className={iconClass}
                aria-label={socialConfig.instagram.label}
              >
                <Instagram size={18} />
              </a>
              <a
                href={socialConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className={iconClass}
                aria-label={socialConfig.whatsapp.label}
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
