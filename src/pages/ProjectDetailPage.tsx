import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { featuredProjects, personalInfo } from '../data/portfolioData';
import {
  ArrowLeft,
  Calendar,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Zap,
  TrendingUp,
  Cpu,
  Github,
  Mail,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
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

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const project = featuredProjects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-background">
        <div className="max-w-md w-full bg-surface p-8 rounded-xl border border-border text-center space-y-4 shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/30">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' ? 'Caso de Estudio no encontrado' : 'Case Study Not Found'}
          </h2>
          <p className="text-xs text-slate-400">
            {language === 'es'
              ? 'El identificador del proyecto no coincide con ningún registro activo.'
              : 'The requested project slug could not be located in the current catalog.'}
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-lg shadow-glow-accent transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'es' ? 'Volver al Inicio' : 'Return to Home'}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-accent" />
            <span>{language === 'es' ? '← Volver a Casos de Estudio' : '← Back to Case Studies'}</span>
          </Link>

          <div className="flex items-center gap-2">
            {project.demoGithubUrl && (
              <a
                href={project.demoGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-hover border border-border text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Hero Header */}
        <div className="space-y-4 border-b border-border/80 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-accent/15 border border-accent/40 text-accent font-semibold">
              {t(project.badge)}
            </span>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-surface border border-border text-slate-300 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              {project.period}
            </span>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-surface border border-border text-slate-400">
              {t(project.category)}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t(project.title)}
          </h1>

          <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-3xl">
            {t(project.subtitle)}
          </p>

          <div className="text-xs font-mono text-slate-400 flex items-center gap-2 pt-2">
            <span className="text-accent">{language === 'es' ? 'Rol desempeñado:' : 'Role:'}</span>
            <span className="text-slate-200 font-semibold">{t(project.role)}</span>
          </div>
        </div>

        {/* Key Impact Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.impactMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-surface p-4 rounded-xl border border-border hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl sm:text-2xl font-mono font-extrabold text-white flex items-center gap-1.5">
                  {metric.value}
                </span>
                {idx === 0 && <TrendingUp className="w-4 h-4 text-accent" />}
                {idx === 1 && <Zap className="w-4 h-4 text-success" />}
                {idx === 2 && <ShieldCheck className="w-4 h-4 text-purple-400" />}
                {idx === 3 && <Cpu className="w-4 h-4 text-blue-400" />}
              </div>
              <span className="text-xs text-slate-400 font-sans">
                {t(metric.label)}
              </span>
            </div>
          ))}
        </div>

        {/* Overview & Problem Statement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Executive Overview */}
          <div className="bg-surface p-6 rounded-xl border border-border space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent" />
              {language === 'es' ? 'Visión General del Sistema' : 'System Overview'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t(project.overview)}
            </p>
          </div>

          {/* Business & Technical Problem */}
          <div className="bg-surface p-6 rounded-xl border border-border space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              {language === 'es' ? 'Desafío y Problema de Negocio' : 'Business & Technical Challenge'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t(project.businessProblem)}
            </p>
          </div>
        </div>

        {/* Technical Challenges Resolved */}
        <div className="bg-surface rounded-xl border border-border p-6 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            {language === 'es' ? 'Retos Técnicos de Misión Crítica' : 'Critical Technical Challenges'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.technicalChallenges.map((challenge, idx) => (
              <div
                key={idx}
                className="bg-background/80 p-4 rounded-lg border border-border space-y-2"
              >
                <div className="text-[10px] font-mono text-accent font-semibold px-2 py-0.5 rounded bg-surface inline-block border border-border">
                  CHALLENGE 0{idx + 1}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t(challenge)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Solution */}
        <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-success uppercase tracking-wider">
              {language === 'es' ? 'ARQUITECTURA DE SOFTWARE' : 'SOFTWARE ARCHITECTURE'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {language === 'es' ? 'Solución Arquitectónica Implementada' : 'Engineered Architectural Solution'}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t(project.architecturalSolution.summary)}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {project.architecturalSolution.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-lg bg-background/80 border border-border"
              >
                <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {t(highlight)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Request / Data Flow Diagram */}
        <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-accent uppercase tracking-wider">
              {language === 'es' ? 'DIAGRAMA DE FLUJO' : 'DATA & EXECUTION FLOW'}
            </span>
            <h3 className="text-xl font-bold text-white">
              {language === 'es' ? 'Flujo de Datos y Ejecución' : 'Data & Execution Pipeline'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {project.flowSteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-background/90 p-4 rounded-xl border border-border relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface border border-border text-accent font-bold">
                      STEP {step.step}
                    </span>
                    {idx < project.flowSteps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 hidden lg:block" />
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-2">
                    {t(step.title)}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t(step.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Impact Chart with Recharts */}
        <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-success uppercase tracking-wider">
                {language === 'es' ? 'TELEMETRÍA EXPERIMENTAL' : 'EXPERIMENTAL TELEMETRY'}
              </span>
              <h3 className="text-xl font-bold text-white">
                {language === 'es' ? 'Impacto en Latencia (Antes vs. Después)' : 'Latency Impact (Before vs. After)'}
              </h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-2.5 h-2.5 rounded-sm bg-amber-400"></span>
                {language === 'es' ? 'Sin Optimización' : 'Unoptimized'}
              </span>
              <span className="flex items-center gap-1.5 text-success">
                <span className="w-2.5 h-2.5 rounded-sm bg-success"></span>
                {language === 'es' ? 'Arquitectura Optimizada' : 'Optimized Architecture'}
              </span>
            </div>
          </div>

          <div className="h-72 sm:h-80 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={project.performanceData}
                margin={{ top: 10, right: 20, left: -10, bottom: 20 }}
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
                  unit=" ms"
                />
                <Tooltip
                  cursor={{ fill: 'rgba(255, 255, 255, 0.02)' }}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-surface border border-border p-3 rounded-lg text-xs font-mono shadow-xl">
                          <p className="text-slate-300 font-bold mb-1.5 pb-1 border-b border-border">
                            {label}
                          </p>
                          <p className="text-amber-400">
                            {language === 'es' ? 'Antes:' : 'Before:'} {payload[0]?.value} ms
                          </p>
                          <p className="text-success font-semibold">
                            {language === 'es' ? 'Después:' : 'After:'} {payload[1]?.value} ms
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend
                  wrapperStyle={{ paddingTop: '10px', fontSize: '11px', fontFamily: 'monospace' }}
                />
                <Bar
                  dataKey="withoutCache"
                  name={language === 'es' ? 'Latencia Previa (ms)' : 'Prior Latency (ms)'}
                  fill="#F59E0B"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                />
                <Bar
                  dataKey="withCache"
                  name={language === 'es' ? 'Latencia Optimizada (ms)' : 'Optimized Latency (ms)'}
                  fill="#10B981"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Measurable Production Results */}
        <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-success" />
            {language === 'es' ? 'Resultados e Impacto Medible en Producción' : 'Production Impact & Measurable Results'}
          </h3>

          <div className="space-y-3">
            {project.results.map((result, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-lg bg-background border border-border text-xs sm:text-sm text-slate-200"
              >
                <div className="w-5 h-5 rounded-full bg-success/20 text-success flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="leading-relaxed">{t(result)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="bg-surface rounded-xl border border-border p-6 space-y-3">
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
            {language === 'es' ? 'STACK TECNOLÓGICO UTILIZADO' : 'DEPLOYED TECH STACK'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-background border border-border text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Navigation & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
          <Link
            to="/#projects"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface hover:bg-surface-hover border border-border text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'es' ? 'Ver otros Casos de Estudio' : 'View other Case Studies'}</span>
          </Link>

          <a
            href={`mailto:${personalInfo.email}?subject=Consulta%20sobre%20el%20proyecto%20${project.slug}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-xs font-semibold shadow-glow-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>{language === 'es' ? 'Consultar sobre este Proyecto' : 'Inquire about this Project'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
