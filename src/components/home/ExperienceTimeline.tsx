import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { experienceTimeline } from '../../data/portfolioData';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  GitCommit,
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'work' | 'education'>('all');

  const filteredItems = experienceTimeline.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent">
              <GitCommit className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Trayectoria & Credenciales' : 'Career & Credentials'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'es' ? 'Experiencia Profesional y Educación' : 'Professional Journey & Education'}
            </h2>

            <p className="text-base text-slate-400 max-w-2xl">
              {language === 'es'
                ? 'Historial comprobable liderando el desarrollo de software crítico en el sector público, modernizando sistemas e investigando ciberseguridad defensiva.'
                : 'Demonstrated track record engineering public sector mission-critical software, legacy systems modernization, and graduate cybersecurity research.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-surface p-1 rounded-lg border border-border self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {language === 'es' ? 'Todo' : 'All'}
            </button>
            <button
              onClick={() => setFilter('work')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'work'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Laboral' : 'Work'}</span>
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'education'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Educación' : 'Education'}</span>
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-border/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-surface border-2 border-border group-hover:border-accent flex items-center justify-center transition-colors shadow-md">
                {item.type === 'work' ? (
                  <Briefcase className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                )}
              </div>

              {/* Card Container */}
              <div className="bg-surface rounded-xl border border-border p-6 hover:border-slate-700 transition-all shadow-md">
                {/* Header: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-border/60">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-background border border-border text-slate-400 inline-block mb-1.5">
                      {item.type === 'work'
                        ? (language === 'es' ? 'Experiencia Laboral' : 'Professional Work')
                        : (language === 'es' ? 'Grado Académico' : 'Academic Degree')}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {t(item.role)}
                    </h3>
                    <h4 className="text-sm font-semibold text-accent mt-0.5">
                      {item.company}
                    </h4>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 bg-background px-2.5 py-1 rounded border border-border text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      {t(item.period)}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {t(item.location)}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {t(item.description)}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-5">
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{t(ach)}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies / Keywords */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-background border border-border text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
