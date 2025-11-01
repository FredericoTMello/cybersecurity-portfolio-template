'use client';

import { m } from 'framer-motion';
import { Mail, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';
import TypewriterAnimation from '@/components/ui/TypewriterAnimation';
import React from 'react';

interface ContactMethod {
  name: string;
  icon: React.ReactNode;
  href: string;
  description: string;
  color: string;
  aria?: string;
}

const contactMethods: ContactMethod[] = [
  {
    name: 'WhatsApp',
    icon: <MessageCircle size={24} />,
    href: 'https://wa.me/55999999999', // coloque aqui só o número, ex: https://wa.me/5598999999999
    description: 'Converse comigo diretamente no WhatsApp',
    color:
      'border-cyber-green/30 hover:border-cyber-green hover:shadow-glow-green text-cyber-green',
    aria: 'Abrir conversa no WhatsApp com Frederico Mello',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={24} />,
    href: 'https://linkedin.com/in/frederico-mello-w1',
    description: 'Conecte-se comigo no LinkedIn',
    color:
      'border-cyber-cyan/30 hover:border-cyber-cyan hover:shadow-glow-cyan text-cyber-cyan',
    aria: 'Abrir perfil do LinkedIn de Frederico Mello',
  },
  {
    name: 'E-mail',
    icon: <Mail size={24} />,
    href:
      'mailto:fredericomello.w1@gmail.com?subject=Contato%20via%20site%20W1&body=Ol%C3%A1%20Frederico%2C%0D%0A%0D%0AEstou%20entrando%20em%20contato%20para%20falar%20sobre%20consultoria%20financeira.%0D%0A%0D%0AAtenciosamente,',
    description: 'Envie um e-mail diretamente para mim',
    color:
      'border-cyber-orange/30 hover:border-cyber-orange hover:shadow-glow-orange text-cyber-orange',
    aria: 'Enviar e-mail para Frederico Mello',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-gradient-to-br from-cyber-teal-dark via-cyber-dark to-cyber-darker flex items-center"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho da seção */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-cyber-green font-mono text-sm mb-4 tracking-widest"
            >
              CONTATO DIRETO
            </m.p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Fale <span className="text-cyber-green">Comigo</span>
            </h2>
            <p className="text-cyber-gray-light text-lg max-w-2xl mx-auto mb-6">
              Três formas simples de entrar em contato comigo — seja para tirar dúvidas, iniciar seu planejamento ou se conectar profissionalmente.
            </p>
            <m.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-cyber-green to-transparent"
            />
          </m.div>

          {/* Métodos de contato */}
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {contactMethods.map((method, index) => (
              <m.a
                key={method.name}
                href={method.href}
                aria-label={method.aria || method.name}
                target={method.href.startsWith('mailto') ? undefined : '_blank'}
                rel={method.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  flex flex-col items-center justify-center p-6 bg-cyber-teal-dark/30 backdrop-blur-sm border rounded-lg
                  transition-all duration-300 group hover:scale-105 ${method.color}
                `}
              >
                <div className="w-12 h-12 rounded-lg bg-cyber-navy/50 flex items-center justify-center mb-3">
                  {method.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-1">{method.name}</h3>
                <p className="text-cyber-gray text-xs text-center">{method.description}</p>
                <ExternalLink
                  size={14}
                  className="mt-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </m.a>
            ))}
          </div>

          {/* Rodapé decorativo */}
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-6 mb-16"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyber-cyan/30" />
              <TypewriterAnimation
                text="by ~/fredericomello"
                speed={150}
                className="text-2xl font-bold"
                delay={800}
              />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyber-cyan/30" />
            </div>
            <TypewriterAnimation
              text="W1 — planejamento 360°, proteção e legado."
              speed={150}
              className="text-lg font-mono text-cyber-gray-light"
              delay={1100}
            />
          </m.div>
        </div>
      </div>
    </section>
  );
}
