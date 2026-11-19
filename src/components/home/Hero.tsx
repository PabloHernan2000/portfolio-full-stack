import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo } from '../../data/portfolioData';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  ShieldCheck,
  Server,
  Zap,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 overflow-hidden bg-tech-grid">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-success/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-slate-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span>{t(personalInfo.statusBadge)}</span>
            </div>

            {/* H1 Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
              <div className="text-xl sm:text-2xl font-mono font-medium text-slate-300 flex items-center gap-2">
                <span className="text-accent">&gt;</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-300">
                  {personalInfo.shortRole}
                </span>
                <span className="text-slate-500 font-normal">|</span>
                <span className="text-slate-400 text-sm sm:text-base font-normal">
                  M.Sc. Ciberseguridad
                </span>
              </div>
            </div>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              {t(personalInfo.summary)}
            </p>

            {/* Key Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full py-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-surface/60 border border-border/80 px-3 py-2 rounded-md">
                <Server className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Node.js / React / TS</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-surface/60 border border-border/80 px-3 py-2 rounded-md">
                <Zap className="w-3.5 h-3.5 text-success shrink-0" />
                <span>Redis / Cache-Aside</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-surface/60 border border-border/80 px-3 py-2 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Linux & Hardening</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleScrollTo('#projects')}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg shadow-glow-accent transition-all duration-200 group cursor-pointer"
              >
                <span>{language === 'es' ? 'Ver Casos de Estudio' : 'View Case Studies'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleScrollTo('#contact')}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-surface hover:bg-surface-hover border border-border hover:border-slate-700 rounded-lg transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{language === 'es' ? 'Contactar' : 'Get in Touch'}</span>
              </button>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Architecture Diagram */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ArchitectureDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};
