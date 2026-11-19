import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { featuredProjects } from '../../data/portfolioData';
import {
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Sistemas en Producción' : 'Production Systems'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'es' ? 'Casos de Estudio de Ingeniería' : 'Engineering Case Studies'}
          </h2>

          <p className="text-base text-slate-400 max-w-2xl">
            {language === 'es'
              ? 'Proyectos de misión crítica diseñados para soportar alta demanda ciudadana, transacciones estrictas y modernización de arquitecturas legacy.'
              : 'Mission-critical systems designed to handle high concurrency, strict transactional integrity, and deep legacy modernization.'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              className="bg-surface rounded-xl border border-border hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                {/* Card Header with Badges */}
                <div className="p-6 border-b border-border/70 bg-gradient-to-b from-surface-raised/40 to-transparent">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-accent/10 border border-accent/30 text-accent font-medium">
                      {t(project.badge)}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors leading-snug">
                    <Link to={`/projects/${project.slug}`}>
                      {t(project.title)}
                    </Link>
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {t(project.category)}
                  </p>
                </div>

                {/* Subtitle & Impact Metrics */}
                <div className="p-6 space-y-5">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {t(project.subtitle)}
                  </p>

                  {/* Impact Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2.5 py-2">
                    {project.impactMetrics.slice(0, 4).map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-background/80 border border-border/80 p-2.5 rounded-lg flex flex-col"
                      >
                        <span className="text-base font-mono font-bold text-white flex items-center gap-1">
                          {idx === 0 && <TrendingUp className="w-3.5 h-3.5 text-accent" />}
                          {idx === 1 && <Zap className="w-3.5 h-3.5 text-success" />}
                          {metric.value}
                        </span>
                        <span className="text-[11px] text-slate-400 font-sans mt-0.5 truncate">
                          {t(metric.label)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-background border border-border text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 6 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-background border border-border text-slate-400">
                        +{project.stack.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer / Action Links */}
              <div className="p-6 pt-0 border-t border-border/60 mt-auto flex items-center justify-between gap-3">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover transition-colors group/link"
                >
                  <span>
                    {language === 'es' ? 'Ver Caso de Estudio' : 'Read Case Study'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>

                {project.demoGithubUrl && (
                  <a
                    href={project.demoGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 rounded-xl bg-surface/70 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-background border border-border text-accent">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                {language === 'es'
                  ? '¿Necesitas revisar diagramas arquitectónicos y métricas de carga?'
                  : 'Looking for detailed architectural diagrams and load metrics?'}
              </h4>
              <p className="text-xs text-slate-400">
                {language === 'es'
                  ? 'Cada caso de estudio incluye gráficos interactivos de latencia, flujo de datos y análisis de problemas resueltos.'
                  : 'Every case study includes interactive latency charts, data flows, and technical post-mortems.'}
              </p>
            </div>
          </div>
          <a
            href="#architecture"
            className="px-4 py-2 text-xs font-medium text-slate-200 bg-surface-raised hover:bg-slate-800 border border-border hover:border-slate-700 rounded-lg transition-colors whitespace-nowrap"
          >
            {language === 'es' ? 'Explorar Arquitectura' : 'Explore Architecture'}
          </a>
        </div>
      </div>
    </section>
  );
};
