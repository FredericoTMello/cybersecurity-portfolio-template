/**
 * SocialIcons Component
 * Social media icon links (desktop only)
 */

'use client';

import { Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { socialConfig } from '@/config/social.config';

export function SocialIcons() {
  // Classe base igual para todos, mesma cor/círculo que LinkedIn/Twitter
  const baseClass =
    'w-9 h-9 rounded-lg bg-cyber-teal-dark border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan hover:border-cyber-cyan hover:shadow-neon-cyan transition-all duration-300';

  return (
    <div className="hidden lg:flex items-center gap-2">
      {/* LinkedIn */}
      <a
        href={socialConfig.linkedin.url}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label={socialConfig.linkedin.label}
      >
        <Linkedin size={18} />
      </a>
      {/* Instagram */}
      <a
        href={socialConfig.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label={socialConfig.instagram.label}
      >
        <Instagram size={18} />
      </a>
      {/* WhatsApp */}
      <a
        href={socialConfig.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label={socialConfig.whatsapp.label}
      >
        <MessageCircle size={18} />
      </a>
      {/* Twitter/X */}
      <a
        href={socialConfig.twitter.url}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label={socialConfig.twitter.label}
      >
        <Twitter size={18} />
      </a>
    </div>
  );
}
