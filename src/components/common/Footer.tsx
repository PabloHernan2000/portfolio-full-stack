import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo } from '../../data/portfolioData';
import {
  Terminal,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  ShieldCheck,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-border/60">
          {/* Brand & status */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center">
                <Terminal className="w-4 h-4 text-accent" />
              </div>
              <span className="font-mono text-base font-bold text-white">
                Pablo Hernán Muñoz García
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {language === 'es'
                ? 'Ingeniero Full-Stack y especialista en Ciberseguridad enfocado en arquitecturas modulares, mínima latencia y operaciones Linux resilientes.'
                : 'Full-Stack Engineer & Cybersecurity specialist focused on modular design, sub-20ms latency, and hardened Linux operations.'}
            </p>

            {/* Production Health Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-background border border-border text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              <span>All Systems Operational • 99.9% Uptime</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-300 tracking-wider mb-3">
              {language === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <a href="#projects" className="hover:text-white transition-colors">
                {language === 'es' ? 'Casos de Estudio' : 'Case Studies'}
              </a>
              <a href="#architecture" className="hover:text-white transition-colors">
                {language === 'es' ? 'Arquitectura' : 'Architecture'}
              </a>
              <a href="#performance" className="hover:text-white transition-colors">
                {language === 'es' ? 'Telemetría' : 'Telemetry'}
              </a>
              <a href="#experience" className="hover:text-white transition-colors">
                {language === 'es' ? 'Experiencia' : 'Experience'}
              </a>
              <a href="#stack" className="hover:text-white transition-colors">
                {language === 'es' ? 'Stack Técnico' : 'Tech Stack'}
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                {language === 'es' ? 'Contacto' : 'Contact'}
              </a>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-300 tracking-wider mb-3">
                {language === 'es' ? 'Conectar' : 'Connect'}
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background border border-border text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background border border-border text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg bg-background border border-border text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors self-start cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Volver arriba' : 'Back to top'}</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>© {new Date().getFullYear()} Pablo Hernán Muñoz García. Precision Systems.</span>
          </div>

          <div className="text-[11px] text-slate-500">
            Designed with Vite + React 18 + TypeScript + Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
