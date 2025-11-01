'use client';

import { m } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import type { BlogPostMetadata } from '@/lib/blog';
import { formatDate } from '@/lib/date-utils';

interface BlogSectionClientProps {
  featuredPost: BlogPostMetadata | null;
  recentPosts: BlogPostMetadata[];
  allCategories: string[];
}

const ALL_LABEL = 'Todos';

export default function BlogSectionClient({ featuredPost, recentPosts, allCategories }: BlogSectionClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_LABEL);

  // Filtra pelos campos básicos: título/descrição + categoria
  const filteredPosts = useMemo(() => {
    return recentPosts.filter((post) => {
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === '' ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q);

      const matchesCategory = selectedCategory === ALL_LABEL || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [recentPosts, searchQuery, selectedCategory]);

  // Contagem (sing/plural)
  const resultsLabel =
    filteredPosts.length === 1 ? '1 artigo encontrado' : `${filteredPosts.length} artigos encontrados`;

  return (
    <section
      id="blog"
      className="min-h-screen py-20 bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-navy"
    >
      <div className="container mx-auto px-6">
        {/* Cabeçalho da seção */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyber-cyan font-mono text-sm mb-4 tracking-widest"
          >
            CONTEÚDOS & INSIGHTS
          </m.p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Planejamento financeiro com clareza
          </h2>
          <p className="text-cyber-gray-light text-lg max-w-2xl mx-auto mb-6">
            Artigos práticos sobre organização financeira, proteção patrimonial e decisões 360° — no ritmo da sua vida e do seu negócio.
          </p>
          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mx-auto"
          />
        </m.div>

        {/* Artigo em destaque */}
        {featuredPost && (
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Link href={`/blog/${featuredPost.slug}`} className="block">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-cyber-cyan/30 bg-cyber-navy/30 group hover:border-cyber-cyan/60 transition-colors cursor-pointer">
                  {featuredPost.coverImage ? (
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/20 to-cyber-green/10" />
                  )}
                </div>
              </Link>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded-full mb-4">
                  <span className="text-sm text-cyber-green font-mono">Artigo em destaque</span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h3 className="text-3xl font-bold text-white mb-4 hover:text-cyber-cyan transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h3>
                </Link>

                <p className="text-cyber-gray mb-6 leading-relaxed">
                  {featuredPost.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-cyber-gray-light mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-cyber-cyan" />
                    {formatDate(featuredPost.date, 'long')}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} className="text-cyber-cyan" />
                    {featuredPost.readTime}
                  </span>
                  <span className="px-3 py-1 bg-cyber-navy/50 border border-cyber-cyan/20 rounded-lg font-mono">
                    {featuredPost.category}
                  </span>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-cyan text-cyber-dark font-bold rounded-lg hover:shadow-neon-cyan hover:scale-105 transition-all duration-300 group"
                >
                  Ler artigo
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </m.div>
        )}

        {/* Busca e filtros */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 space-y-6"
        >
          {/* Busca */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan" size={20} />
            <input
              type="text"
              placeholder="Busque por título ou descrição…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-cyber-navy/30 border border-cyber-cyan/30 rounded-xl text-white placeholder-cyber-gray focus:border-cyber-cyan focus:outline-none focus:ring-2 focus:ring-cyber-cyan/20 transition-all"
            />
          </div>

          {/* Filtros por categoria */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Filter className="text-cyber-cyan" size={18} />
            <button
              onClick={() => setSelectedCategory(ALL_LABEL)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                selectedCategory === ALL_LABEL
                  ? 'bg-cyber-cyan text-cyber-dark font-bold'
                  : 'bg-cyber-navy/30 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/10'
              }`}
            >
              {ALL_LABEL}
            </button>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-cyber-cyan text-cyber-dark font-bold'
                    : 'bg-cyber-navy/30 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Contagem de resultados */}
          <p className="text-center text-cyber-gray-light font-mono text-sm">
            {resultsLabel}
          </p>
        </m.div>

        {/* Grid de posts */}
        <div>
          <m.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            {selectedCategory === ALL_LABEL ? 'Todos os artigos' : `Artigos — ${selectedCategory}`}
          </m.h3>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <m.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <div className="bg-cyber-navy/30 border border-cyber-cyan/20 rounded-xl overflow-hidden hover:border-cyber-cyan/50 hover:shadow-lg hover:shadow-cyber-cyan/10 transition-all duration-300 h-full flex flex-col">
                      {/* Capa */}
                      <div className="relative aspect-video bg-cyber-teal-dark/20 overflow-hidden">
                        {post.coverImage ? (
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyber-cyan/10 to-cyber-green/5">
                            <div className="w-16 h-16 rounded-full bg-cyber-cyan/20 flex items-center justify-center">
                              <ArrowRight className="text-cyber-cyan" size={24} />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Conteúdo */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-cyber-navy/50 border border-cyber-cyan/20 rounded-lg text-xs font-mono text-cyber-cyan">
                            {post.category}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors line-clamp-2">
                          {post.title}
                        </h4>

                        <p className="text-cyber-gray text-sm mb-4 line-clamp-3 flex-1">
                          {post.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-cyber-gray-light pt-4 border-t border-cyber-cyan/10">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {formatDate(post.date, 'short')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </m.div>
              ))}
            </div>
          ) : (
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">Nenhum artigo encontrado</h3>
              <p className="text-cyber-gray mb-6">Tente ajustar sua busca ou os filtros.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(ALL_LABEL);
                }}
                className="px-6 py-3 bg-cyber-cyan text-cyber-dark font-bold rounded-lg hover:shadow-neon-cyan transition-all"
              >
                Limpar filtros
              </button>
            </m.div>
          )}
        </div>
      </div>
    </section>
  );
}
