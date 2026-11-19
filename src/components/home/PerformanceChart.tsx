import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { globalPerformanceBenchmark } from '../../data/portfolioData';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import { Activity, Gauge, Cpu, CheckCircle } from 'lucide-react';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    color: string;
    dataKey: string;
  }>;
  label?: string;
  metric: 'latency' | 'dbQueries';
  language: 'es' | 'en';
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
  metric,
  language,
}) => {
  if (active && payload && payload.length) {
    const withoutVal = payload.find((p) => p.dataKey === (metric === 'latency' ? 'withoutCache' : 'dbQueriesWithout'))?.value || 0;
    const withVal = payload.find((p) => p.dataKey === (metric === 'latency' ? 'withCache' : 'dbQueriesWith'))?.value || 0;
    const delta = withoutVal > 0 ? (((withoutVal - withVal) / withoutVal) * 100).toFixed(1) : '0';

    return (
      <div className="bg-surface/95 border border-border p-3.5 rounded-lg shadow-2xl backdrop-blur-md text-xs font-mono">
        <p className="text-slate-300 font-bold mb-2 pb-1 border-b border-border">
          {language === 'es' ? 'Concurrencia:' : 'Concurrency:'} {label}
        </p>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              {language === 'es' ? 'Sin Caché (Directo SQL):' : 'Direct SQL (No Cache):'}
            </span>
            <span className="font-bold text-white">
              {withoutVal} {metric === 'latency' ? 'ms' : 'qps'}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-success">
              <span className="w-2 h-2 rounded-full bg-success"></span>
              {language === 'es' ? 'Con Redis Cache-Aside:' : 'With Redis Cache-Aside:'}
            </span>
            <span className="font-bold text-success">
              {withVal} {metric === 'latency' ? 'ms' : 'qps'}
            </span>
          </div>
        </div>

        <div className="mt-2.5 pt-2 border-t border-border flex items-center justify-between text-[11px] text-slate-300">
          <span>{language === 'es' ? 'Optimización:' : 'Optimization:'}</span>
          <span className="text-success font-bold">-{delta}% {metric === 'latency' ? 'Latencia' : 'Carga BD'}</span>
        </div>
      </div>
    );
  }
  return null;
};

export const PerformanceChart: React.FC = () => {
  const { language } = useLanguage();
  const [metricView, setMetricView] = useState<'latency' | 'dbQueries'>('latency');

  return (
    <section id="performance" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent">
              <Gauge className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Telemetría de Rendimiento' : 'Performance Telemetry'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'es' ? 'Impacto Real de Redis Cache-Aside' : 'Real-World Impact of Redis Cache-Aside'}
            </h2>

            <p className="text-base text-slate-400 max-w-2xl">
              {language === 'es'
                ? 'Pruebas de carga comparativas bajo tráfico concurrente creciente: latencia media de respuesta (ms) y mitigación de consultas destructivas a PostgreSQL.'
                : 'Comparative load testing under surging concurrency: average response latency (ms) and mitigation of thread-blocking PostgreSQL hits.'}
            </p>
          </div>

          {/* Metric Selector Toggle */}
          <div className="flex items-center gap-1.5 bg-surface p-1.5 rounded-lg border border-border shrink-0 self-start md:self-end">
            <button
              onClick={() => setMetricView('latency')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                metricView === 'latency'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Latencia (ms)' : 'Latency (ms)'}</span>
            </button>
            <button
              onClick={() => setMetricView('dbQueries')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                metricView === 'dbQueries'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Consultas a BD' : 'DB Queries'}</span>
            </button>
          </div>
        </div>

        {/* Main Chart Container Card */}
        <div className="bg-surface rounded-xl border border-border p-6 shadow-2xl relative overflow-hidden">
          {/* Chart Header Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 mb-6 border-b border-border/70 text-xs font-mono">
            <div className="bg-background/80 p-3 rounded-lg border border-border">
              <span className="text-slate-400 block text-[10px] mb-1">
                {language === 'es' ? 'LATENCIA PICO (5,000 REQ/S)' : 'PEAK LATENCY (5,000 REQ/S)'}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-base font-bold text-amber-400 line-through">490 ms</span>
                <span className="text-xl font-bold text-success">18 ms</span>
                <span className="text-xs text-success font-semibold">(-96.3%)</span>
              </div>
            </div>

            <div className="bg-background/80 p-3 rounded-lg border border-border">
              <span className="text-slate-400 block text-[10px] mb-1">
                {language === 'es' ? 'TASA DE CACHE HIT' : 'MEASURED CACHE HIT RATIO'}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-accent">96.4%</span>
                <span className="text-xs text-slate-400 font-sans">
                  {language === 'es' ? 'servido desde RAM' : 'served from RAM'}
                </span>
              </div>
            </div>

            <div className="bg-background/80 p-3 rounded-lg border border-border">
              <span className="text-slate-400 block text-[10px] mb-1">
                {language === 'es' ? 'USO DE CPU EN BASE DE DATOS' : 'DATABASE CPU UTILIZATION'}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-base font-bold text-amber-400 line-through">85%</span>
                <span className="text-xl font-bold text-success">&lt; 18%</span>
                <span className="text-xs text-success font-semibold">(-78.8%)</span>
              </div>
            </div>
          </div>

          {/* Recharts Component */}
          <div className="h-80 sm:h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={globalPerformanceBenchmark}
                margin={{ top: 20, right: 20, left: -10, bottom: 20 }}
                barGap={8}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis
                  dataKey="concurrency"
                  stroke="#94A3B8"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: '#1E293B' }}
                />
                <YAxis
                  stroke="#94A3B8"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: '#1E293B' }}
                  unit={metricView === 'latency' ? ' ms' : ''}
                />
                <Tooltip
                  content={<CustomTooltip metric={metricView} language={language} />}
                  cursor={{ fill: 'rgba(255, 255, 255, 0.02)' }}
                />
                <Legend
                  verticalAlign="top"
                  align="right"
                  wrapperStyle={{ paddingBottom: '16px', fontSize: '11px', fontFamily: 'monospace' }}
                />
                <Bar
                  dataKey={metricView === 'latency' ? 'withoutCache' : 'dbQueriesWithout'}
                  name={
                    metricView === 'latency'
                      ? (language === 'es' ? 'Sin Caché (PostgreSQL directo)' : 'Direct SQL (Without Cache)')
                      : (language === 'es' ? 'Consultas SQL directas' : 'Direct SQL Queries')
                  }
                  fill="#F59E0B"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={45}
                />
                <Bar
                  dataKey={metricView === 'latency' ? 'withCache' : 'dbQueriesWith'}
                  name={
                    metricView === 'latency'
                      ? (language === 'es' ? 'Con Redis Cache-Aside' : 'With Redis Cache-Aside')
                      : (language === 'es' ? 'Consultas SQL residuales (Misses)' : 'Residual SQL Queries (Misses)')
                  }
                  fill="#10B981"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={45}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Explanatory Technical Footer */}
          <div className="mt-4 pt-4 border-t border-border/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <CheckCircle className="w-3.5 h-3.5 text-success" />
              {language === 'es'
                ? 'Prueba ejecutada con k6 sobre instancia Linux con 4 workers PM2 en cluster'
                : 'Benchmarked with k6 load generator against Linux VM running 4 PM2 worker threads'}
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              {language === 'es' ? 'Algoritmo: TTL Exponencial Adaptativo' : 'Algorithm: Dynamic Adaptive TTL'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
