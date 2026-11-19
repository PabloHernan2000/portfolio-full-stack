import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { techStackCategories } from '../../data/portfolioData';
import {
  Layers,
  Layout,
  Server,
  Database,
  ShieldCheck,
  Check,
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const { language, t } = useLanguage();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-accent" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-success" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="stack" className="py-20 lg:py-28 bg-surface/30 border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent">
            <Layers className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Stack Tecnológico en Capas' : 'Layered Tech Stack'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'es' ? 'Herramientas y Tecnologías de Producción' : 'Production Tools & Technologies'}
          </h2>

          <p className="text-base text-slate-400 max-w-2xl">
            {language === 'es'
              ? 'Conjunto de tecnologías probadas en entornos gubernamentales y empresariales donde la estabilidad, la tipificación estricta y el control de concurrencia son fundamentales.'
              : 'Production-tested technologies deployed across governmental and enterprise ecosystems where stability, strict typing, and concurrency safety are paramount.'}
          </p>
        </div>

        {/* 4 Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStackCategories.map((category) => (
            <div
              key={category.id}
              className="bg-surface rounded-xl border border-border hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-background border border-border group-hover:border-slate-700 transition-colors">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {t(category.title)}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {category.id.replace('-', ' • ')}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
                  {t(category.description)}
                </p>

                {/* Skills Grid without percentage bars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-background/80 border border-border/80 hover:border-slate-700 p-2.5 rounded-lg flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface border border-border text-slate-400">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{language === 'es' ? 'Nivel de Operación:' : 'Operational Depth:'}</span>
                <span className="text-success font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                  {language === 'es' ? 'Producción Verificada' : 'Production Verified'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
