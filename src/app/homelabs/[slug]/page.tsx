import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import type { MDXComponents } from 'mdx/types';
import { ArrowLeft, Layers, ShieldAlert, Timer, Wrench } from 'lucide-react';
import { getLabBySlug, getAllLabSlugs } from '@/lib/homelabs';
import { CodeBlock } from '@/components/ui';
import { formatDate } from '@/lib/date-utils';
import { generateSEO, generateBlogPostSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site.config';
import '@/styles/code-highlight.css';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lab = getLabBySlug(slug);

  if (!lab) {
    return {
      title: 'Home Lab Not Found',
      description: 'The requested home lab could not be located.',
    };
  }

  return generateSEO({
    title: lab.title,
    description: lab.description,
    url: `/homelabs/${slug}`,
    image: lab.coverImage || '/images/site/og-default.png',
    type: 'article',
    tags: [lab.focusArea, lab.category, lab.difficulty, 'home lab', 'blue team'],
  });
}

export async function generateStaticParams() {
  const slugs = getAllLabSlugs();
  return slugs.map((slug) => ({ slug }));
}

const components = {
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-8" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-8 border-l-4 border-cyber-cyan pl-4" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-2xl md:text-3xl font-bold text-cyber-cyan mb-3 mt-6" {...props} />
  ),
  h4: (props: ComponentPropsWithoutRef<'h4'>) => (
    <h4 className="text-xl md:text-2xl font-bold text-cyber-green mb-2 mt-4" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p className="text-cyber-gray-light text-lg leading-relaxed mb-4" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-cyber-gray-light ml-4" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-cyber-gray-light ml-4" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => (
    <li className="text-cyber-gray-light" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<'a'>) => (
    <a className="text-cyber-cyan hover:text-cyber-green underline transition-colors" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className="border-l-4 border-cyber-cyan bg-cyber-navy/30 p-4 my-4 italic text-cyber-gray-light" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<'code'>) => {
    const { children, className, ...rest } = props;
    const isInline = !className;

    if (isInline) {
      return (
        <code className="bg-cyber-navy/70 text-cyber-green px-2 py-1 rounded font-mono text-sm border border-cyber-cyan/20" {...rest}>
          {children}
        </code>
      );
    }

    return <code className={className} {...rest}>{children}</code>;
  },
  pre: (props: ComponentPropsWithoutRef<'pre'>) => {
    const { children, ...rest } = props;

    if (children && typeof children === 'object' && 'props' in children) {
      const childElement = children as { props: { children: unknown; className?: string } };
      const code = childElement.props.children;
      const className = childElement.props.className;

      if (typeof code === 'string') {
        return <CodeBlock className={className}>{code}</CodeBlock>;
      }
    }

    return (
      <pre className="bg-cyber-darker border border-cyber-cyan/30 rounded-lg p-6 overflow-x-auto my-6 font-mono text-sm shadow-lg shadow-cyber-cyan/5" {...rest}>
        {children}
      </pre>
    );
  },
  hr: (props: ComponentPropsWithoutRef<'hr'>) => (
    <hr className="border-cyber-cyan/30 my-8" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-bold text-white" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="italic text-cyber-cyan" {...props} />
  ),
  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border border-cyber-cyan/30" {...props} />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<'thead'>) => (
    <thead className="bg-cyber-navy/50" {...props} />
  ),
  tbody: (props: ComponentPropsWithoutRef<'tbody'>) => (
    <tbody className="divide-y divide-cyber-cyan/20" {...props} />
  ),
  tr: (props: ComponentPropsWithoutRef<'tr'>) => (
    <tr className="hover:bg-cyber-navy/30 transition-colors" {...props} />
  ),
  th: (props: ComponentPropsWithoutRef<'th'>) => (
    <th className="px-4 py-3 text-left text-cyber-cyan font-mono text-sm" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<'td'>) => (
    <td className="px-4 py-3 text-cyber-gray-light" {...props} />
  ),
} satisfies MDXComponents;

export default async function HomelabPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lab = getLabBySlug(slug);

  // LOG PARA DEBUG - pode comentar depois!
  // eslint-disable-next-line no-console
  //console.log("DEBUG :: OBJETO LAB", lab);

  if (!lab) {
    notFound();
  }

  const labSchema = generateBlogPostSchema({
    title: lab.title,
    description: lab.description,
    url: `/homelabs/${slug}`,
    image: lab.coverImage,
    publishedTime: lab.date,
    author: siteConfig.author.name,
    tags: lab.tags,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Home Labs', url: '/homelabs' },
    { name: lab.title, url: `/homelabs/${slug}` },
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(labSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto px-6 py-8">
        <Link
          href="/homelabs"
          className="inline-flex items-center gap-2 text-cyber-cyan hover:text-cyber-green transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono">Back to labs</span>
        </Link>
      </div>

      <article className="container mx-auto px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
            <div>
              {lab.coverImage && (
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-cyber-cyan/20 mb-8">
                  <Image
                    src={lab.coverImage}
                    alt={lab.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                  />
                </div>
              )}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {lab.title}
              </h1>

              <p className="text-xl text-cyber-gray-light mb-8 leading-relaxed">{lab.description}</p>

              <div className="prose prose-invert prose-lg max-w-none code-highlight">
                <MDXRemote source={lab.content} components={components} />
              </div>
            </div>
            {/* ...aside igual... */}
          </div>
          <div className="mt-16 pt-8 border-t border-cyber-cyan/20 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/homelabs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg text-cyber-cyan hover:bg-cyber-cyan/20 hover:shadow-neon-cyan transition-all duration-300 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm">All labs</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-green/10 border border-cyber-green/30 rounded-lg text-cyber-green hover:bg-cyber-green/20 hover:shadow-neon-green transition-all duration-300 group"
            >
              <span className="font-mono text-sm">Back to home</span>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
