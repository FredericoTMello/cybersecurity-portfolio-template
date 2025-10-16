import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header, FloatingNav } from '@/components/layout';
import HomeSection from '@/components/home/Home';
import HomelabPreview from '@/components/home/HomelabPreview';
import { generateSEO } from '@/lib/seo';

// Dynamic imports for below-the-fold content
const ProjectsPreview = dynamic(() => import('@/components/home/ProjectsPreview'));
const BlogPreview = dynamic(() => import('@/components/home/BlogPreview'));
const FormationSection = dynamic(() => import('@/components/pages/Formation'));
const ExperienceSection = dynamic(() => import('@/components/pages/Experience'));
const ContactSection = dynamic(() => import('@/components/pages/Contact'));

export const metadata: Metadata = generateSEO({
  title: 'Marcos Oliveira (zer0spin) - Blue Team Cybersecurity Professional',
  description: 'Defending systems. Connecting people. Inspiring the next generation of Blue Team. Portfolio showcasing projects, experience, and insights in defensive cybersecurity, SIEM, SOC operations, and incident response.',
  url: '/',
  type: 'profile',
  tags: ['portfolio', 'blue team professional', 'cybersecurity projects', 'security blog', 'SOC operations'],
});

export default function Home() {
  // English translations
  const homeTranslations = {
    badge: 'Blue Team | Defensive Security',
    title: 'Marcos Oliveira',
    codename: 'zer0spin',
    tagline: 'Applying reverse entropy to system defense.',
    description: 'From quantum mechanics to defense bits. I analyze threats with the same curiosity I once pursued subatomic particles. Blue Team by passion, physicist by training.',
    cta: 'Explore Projects'
  };

  return (
    <main className="relative min-h-screen cyber-bg-animated">
      {/* Header with Navigation */}
      <Header />
      
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content Sections */}
      <section id="home" aria-labelledby="home-heading">
        <HomeSection translations={homeTranslations} />
      </section>
      
      <section id="projects" aria-labelledby="projects-heading">
        <ProjectsPreview />
      </section>

      <section id="homelabs" aria-labelledby="homelabs-heading">
        <HomelabPreview />
      </section>
      
      <section id="formation" aria-labelledby="formation-heading">
        <FormationSection />
      </section>
      
      <section id="experience" aria-labelledby="experience-heading">
        <ExperienceSection />
      </section>
      
      <section id="blog" aria-labelledby="blog-heading">
        <BlogPreview />
      </section>
      
      <section id="contact" aria-labelledby="contact-heading">
        <ContactSection />
      </section>
    </main>
  );
}
