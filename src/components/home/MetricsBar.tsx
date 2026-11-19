import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { metricsData } from '../../data/portfolioData';
import { Users, Clock, CheckCircle2, GraduationCap } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const { t } = useLanguage();

  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'users':
        return <Users className="w-5 h-5 text-accent" />;
      case 'experience':
        return <Clock className="w-5 h-5 text-blue-400" />;
      case 'uptime':
        return <CheckCircle2 className="w-5 h-5 text-success" />;
      case 'degree':
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative py-8 border-y border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metricsData.map((metric) => (
            <div
              key={metric.id}
              className={`p-5 rounded-xl border transition-all duration-200 relative group overflow-hidden ${
                metric.highlight
                  ? 'bg-surface border-border hover:border-accent/50 shadow-sm'
                  : 'bg-surface/70 border-border hover:border-slate-700'
              }`}
            >
              {/* Subtle top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-white tracking-tight">
                  {metric.value}
                </span>
                <div className="p-2 rounded-lg bg-background border border-border group-hover:border-slate-700 transition-colors">
                  {getMetricIcon(metric.id)}
                </div>
              </div>

              <h3 className="text-sm font-semibold text-slate-200 mb-1">
                {t(metric.label)}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {t(metric.sublabel)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
