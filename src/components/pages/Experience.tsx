'use client';

import { type ReactNode } from 'react';
import { m } from 'framer-motion';
import { Calendar, Shield, Settings, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Experience {
  title: string;
  company: ReactNode;
  period: string;
  description: string;
  icon: ReactNode;
  achievements?: string[];
  companyClassName?: string;
}

const experiences: Experience[] = [
  {
    title: 'Information Security Analyst',
    company: (
      <>
        Freelancer for{' '}
        <a
          href="https://opsecurity.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:text-red-300 transition-colors font-semibold"
        >
          OP Security
        </a>
      </>
    ),
    period: 'Apr 2024 - Present',
    description: 'I leverage penetration testing results to understand attacker tactics, techniques, and procedures (TTPs), translating offensive findings into actionable defense strategies and mapping vulnerabilities to the MITRE ATT&CK framework.',
    icon: <Shield size={20} />,
    companyClassName: 'text-cyber-gray-light',
    achievements: [
      'Authored detailed technical reports from penetration test results, detailing vulnerabilities, exploitation methodologies, and mitigation recommendations.',
      'Analyzed and interpreted data from scanning tools (e.g., Nmap, Nessus, Burp Suite) to identify security flaws in web applications and systems.',
      'Classified and prioritized vulnerabilities using the CVSS framework to provide clear guidance for development and infrastructure teams.',
      'Open-source project developer for Brazilian cybersecurity community',
      'Researched and documented known vulnerabilities (CVEs) related to analyzed environments, providing context and outlining associated risks.',
      'Translated complex technical security flaws into comprehensible business risks for stakeholders.'    ]
  },
  {
    title: 'Computational Thinking & Logic Instructor',
    company: <span>União School · Full-time</span>,
    period: 'Jan 2024 - May 2025',
    description: 'This role involved deconstructing complex technical concepts to build foundational problem-solving skills for a wide range of audiences, from early childhood to high school.',
    icon: <User size={20} />,
    achievements: [
      'Planned and executed a comprehensive Computational Thinking curriculum (MindMakers/Anglo platform) for students across all educational stages, from elementary to high school.',
      'Developed project-based learning modules focused on programming, educational robotics, and the fundamentals of logic.',
      'Mentored and guided student teams for science and technology fairs, overseeing projects from conception to presentation.',
      'Developed problem-solving frameworks for diverse learning styles'
    ]
  },
  {
    title: 'Physics & Mathematics Instructor / Digital Content Creator',
    company: <span>Independent · Remote</span>,
    period: 'Jan 2018 - Present',
    description: 'Alongside my work in security, I have a long-standing role in applying and teaching the foundational principles of Physics and Mathematics. This involves mentoring students in advanced problem-solving and translating complex scientific concepts into engaging digital content for a broad audience.',
    icon: <User size={20} />,
    achievements: [
      'Applied advanced principles of Physics and Mathematics to mentor students for competitive university entrance exams and public contests.',
      'Developed and produced educational content for digital platforms including YouTube, Instagram, and TikTok, specializing in the distillation of complex scientific topics for a diverse online audience.',
      'Gained extensive experience in the full lifecycle of digital lesson production, from conception and scripting to recording and editing.',
      'Provided tailored support and managed communications with all stakeholders (students and parents) to ensure educational goals were met.'
    ]
  },
  {
    title: 'Technical Translator (English)',
    company: <span>Intercom Technical Translations</span>,
    period: 'Jan 2017 - Jan 2019',
    description: 'This role was foundational in developing the meticulous attention to detail required for security analysis. It involved translating and reviewing highly specialized documentation where precision and confidentiality were critical.',
    icon: <Settings size={20} />,
    achievements: [
      'Translated and revised highly technical documents, requiring extreme accuracy and a deep understanding of complex, domain-specific terminology.',
      'Utilized specialized translation software (Trados) to ensure consistency and accuracy while handling sensitive information.',
      'Performed document layout and formatting to produce polished, professional-grade final reports for clients.'  
    ]
  }
];

export default function ExperienceSection() {
  const title = 'Professional Experience';
  const subtitle = 'TIMELINE';
  const description = 'From physics lab to Blue Team. Each experience shaped my analytical approach to cyber defense.';
  const achievementsLabel = 'Key Achievements:';
  
  return (
    <section
      id="experience"
      className="min-h-screen py-20 bg-gradient-to-br from-cyber-teal-dark via-cyber-dark to-cyber-darker"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
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
            {subtitle}
          </m.p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-cyber-gray-light text-lg max-w-2xl mx-auto mb-6">
            {description}
          </p>
          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mx-auto"
          />
        </m.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-cyber-cyan/20" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <m.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-cyber-cyan border-4 border-cyber-dark flex items-center justify-center text-cyber-dark shadow-neon-cyan">
                    {exp.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="group p-6 bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl hover:border-cyber-cyan/50 hover:shadow-glow-cyan transition-all duration-300">
                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-navy/50 border border-cyber-green/30 rounded-full mb-4">
                      <Calendar size={14} className="text-cyber-green" />
                      <span className="text-sm text-cyber-green font-mono">
                        {exp.period}
                      </span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors text-left">
                      {exp.title}
                    </h3>
                    <p
                      className={`font-mono text-lg mb-4 text-left ${
                        exp.companyClassName ?? 'text-cyber-green'
                      }`}
                    >
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="text-cyber-gray leading-relaxed mb-4 text-left">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mt-6">
                        <p className="text-cyber-cyan text-sm font-mono mb-3 text-left">
                          {achievementsLabel}
                        </p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-cyber-gray-light text-sm text-left"
                            >
                              <span className="text-cyber-green mt-1">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </m.div>
            ))}
          </div>
        </div>

        {/* View More Button - Desktop */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center mt-12"
        >
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg text-cyber-cyan hover:bg-cyber-cyan/20 hover:shadow-neon-cyan transition-all duration-300 group whitespace-nowrap"
          >
            <span className="font-mono text-sm">View More</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </m.div>

        {/* View More Button - Mobile */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:hidden"
        >
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyber-cyan text-cyber-dark font-bold rounded-lg hover:shadow-neon-cyan hover:scale-105 transition-all duration-300 group"
          >
            View Complete Details
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </m.div>
      </div>
    </section>
  );
}
