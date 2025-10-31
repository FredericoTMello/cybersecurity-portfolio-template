'use client';

import { Header, FloatingNav } from '@/components/layout';
import { m } from 'framer-motion';
import { Shield, Zap, Brain, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-navy cyber-bg-animated">
      <Header />
      <FloatingNav />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              {/* Profile Photo */}
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative shrink-0"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyber-cyan/30 shadow-neon-cyan bg-gradient-to-br from-cyber-cyan/20 to-cyber-green/20">
                  <NextImage
                    src="/images/about/me.jpg"
                    alt="Consultor financeiro avatar"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-cyber-green rounded-full border-4 border-cyber-dark animate-pulse" />
              </m.div>

              {/* Header Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-teal-dark/50 border border-cyber-cyan/30 rounded-full mb-4">
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                  <span className="text-sm text-cyber-gray-light font-mono">
                    Consultor Financeiro | Planejamento & Patrimônio
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  Sobre <span className="text-cyber-cyan">Mim</span>
                </h1>
                <p className="text-xl text-cyber-gray-light leading-relaxed max-w-2xl md:max-w-none">
                  Como Consultor W1, integro uma das maiores estruturas de consultoria financeira independente do Brasil. 
                  Com metodologia 360°, tecnologia de Wealth Management e o apoio de especialistas, ajudo você a planejar, 
                  proteger e construir patrimônio com clareza e tranquilidade.
                </p>
              </div>
            </div>
          </m.div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            {/* Story Section */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-2xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl font-bold text-cyber-cyan mb-6">Minha Trajetória</h2>
              <div className="space-y-4 text-cyber-gray-light leading-relaxed">
                <p>
                  Acredito que cada pessoa merece clareza e tranquilidade em suas decisões financeiras. 
                  Por isso, atuo como Consultor W1, conectando você a uma estrutura completa de planejamento e gestão patrimonial, 
                  com o suporte de uma equipe multidisciplinar de especialistas.
                </p>
                <p>
                  Na W1 Consultoria, utilizo boas práticas e uma visão 360° para criar planos personalizados que se ajustam 
                  ao seu perfil e aos seus objetivos — sempre com educação financeira e acompanhamento próximo.
                </p>
                <p>
                  Meu compromisso é transformar objetivos em estratégias práticas, combinando metodologia, tecnologia e proximidade 
                  para garantir segurança e evolução patrimonial ao longo do tempo.
                </p>
              </div>
            </m.div>

            {/* Skills Grid */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              <div className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-6 hover:border-cyber-cyan/50 transition-all duration-300">
                <Shield className="text-cyber-cyan mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Planejamento 360°</h3>
                <p className="text-cyber-gray leading-relaxed">
                  Estratégias completas baseadas em diagnóstico financeiro detalhado, prioridades de vida e metas claras — 
                  com revisão e acompanhamento contínuos.
                </p>
              </div>

              {/* Substituí “Gestão de Investimentos” por “Estruturação Patrimonial” */}
              <div className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-green/20 rounded-xl p-6 hover:border-cyber-green/50 transition-all duration-300">
                <Brain className="text-cyber-green mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Estruturação Patrimonial</h3>
                <p className="text-cyber-gray leading-relaxed">
                  Organização e proteção do patrimônio com visão de longo prazo: 
                  governança familiar, sucessão, riscos e legado — sempre alinhados ao seu momento e objetivos.
                </p>
              </div>

              <div className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-orange/20 rounded-xl p-6 hover:border-cyber-orange/50 transition-all duration-300">
                <Zap className="text-cyber-orange mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Agilidade e Proximidade</h3>
                <p className="text-cyber-gray leading-relaxed">
                  Atendimento ágil e personalizado para transformar dúvidas em ação e responder rapidamente às mudanças do cenário financeiro.
                </p>
              </div>

              <div className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-6 hover:border-cyber-cyan/50 transition-all duration-300">
                <Target className="text-cyber-cyan mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Foco em Resultados</h3>
                <p className="text-cyber-gray leading-relaxed">
                  Metodologia orientada a metas, indicadores de progresso e revisões periódicas — 
                  para evoluir com segurança e previsibilidade.
                </p>
              </div>
            </m.div>

            {/* Philosophy Section */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-cyber-teal-dark/30 to-cyber-navy/30 backdrop-blur-sm border border-cyber-green/20 rounded-2xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl font-bold text-cyber-green mb-6">Filosofia</h2>
              <div className="space-y-4 text-cyber-gray-light leading-relaxed">
                <p className="text-lg">
                  <span className="text-cyber-cyan font-mono">&ldquo;Crescimento sustentável e proteção do seu legado.&rdquo;</span>
                </p>
                <p>
                  Mais do que produtos financeiros, priorizamos planejamento sob medida, educação contínua e compromisso com resultados de longo prazo.
                </p>
                <p>
                  Cada desafio é uma oportunidade de organizar, blindar e fortalecer patrimônios com responsabilidade.
                </p>
              </div>
            </m.div>

            {/* CTA Section */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <Link
                href="/projects"
                className="group p-8 bg-gradient-to-br from-cyber-cyan/10 to-cyber-green/10 border border-cyber-cyan/30 rounded-xl hover:border-cyber-cyan hover:shadow-neon-cyan transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-cyber-cyan mb-3 group-hover:text-cyber-green transition-colors">
                  Veja Soluções e Projetos
                </h3>
                <p className="text-cyber-gray-light mb-4">
                  Conheça estratégias e cases que organizaram finanças, protegeram patrimônios e trouxeram mais clareza para decisões importantes.
                </p>
                <div className="inline-flex items-center gap-2 text-cyber-cyan group-hover:gap-4 transition-all">
                  <span className="font-mono">Ver Projetos</span>
                  <ArrowRight size={20} />
                </div>
              </Link>
              <Link
                href="/contact"
                className="group p-8 bg-gradient-to-br from-cyber-green/10 to-cyber-orange/10 border border-cyber-green/30 rounded-xl hover:border-cyber-green hover:shadow-neon-green transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-cyber-green mb-3 group-hover:text-cyber-cyan transition-colors">
                  Fale Comigo
                </h3>
                <p className="text-cyber-gray-light mb-4">
                  Entre em contato para consultoria, dúvidas ou agendamento. Dê o próximo passo para ganhar clareza e segurança financeira.
                </p>
                <div className="inline-flex items-center gap-2 text-cyber-green group-hover:gap-4 transition-all">
                  <span className="font-mono">Contato</span>
                  <ArrowRight size={20} />
                </div>
              </Link>
            </m.div>
          </div>
        </div>
      </section>
    </main>
  );
}
