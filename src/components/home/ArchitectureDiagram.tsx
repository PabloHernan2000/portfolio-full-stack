import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Smartphone,
  Server,
  Cpu,
  Database,
  Layers,
  Zap,
  CheckCircle2,
  Activity,
  RotateCw,
  Sliders,
} from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [cacheMode, setCacheMode] = useState<'hit' | 'miss'>('hit');
  const [selectedNode, setSelectedNode] = useState<string>('node-api');

  const nodes = [
    {
      id: 'client',
      title: 'Client Web / Mobile',
      subtitle: 'React & React Native',
      icon: Smartphone,
      specs: language === 'es' ? 'JWT Token, GPS Geolocation, Offline Store' : 'JWT Bearer, GPS Payload, Local Cache',
      badge: 'Client Layer',
      status: 'Active',
    },
    {
      id: 'nginx',
      title: 'Nginx Reverse Proxy',
      subtitle: 'Rocky Linux Host',
      icon: Server,
      specs: language === 'es' ? 'TLS 1.3, Rate Limit 100r/s, Gzip/Brotli' : 'TLS 1.3, Rate Limit 100r/s, Gzip Buffer',
      badge: 'Edge Gateway',
      status: 'Healthy',
    },
    {
      id: 'node-api',
      title: 'Node.js / TS API',
      subtitle: 'PM2 Cluster (4 Cores)',
      icon: Cpu,
      specs: language === 'es' ? 'Express, Inyección de Dependencias, Zod' : 'Express, Dependency Injection, Zod Schema',
      badge: 'App Runtime',
      status: 'Optimal',
    },
    {
      id: 'cache-db',
      title: cacheMode === 'hit' ? 'Redis (Cache Hit)' : 'PostgreSQL (Cache Miss)',
      subtitle: cacheMode === 'hit' ? 'In-Memory Key/Value' : 'ACID Relational Storage',
      icon: cacheMode === 'hit' ? Zap : Database,
      specs:
        cacheMode === 'hit'
          ? (language === 'es' ? 'Cache Hit (~12ms) • Cero consultas a BD' : 'Cache Hit (~12ms) • Zero DB I/O')
          : (language === 'es' ? 'Cache Miss (~175ms) • B-Tree Index + Popula Redis' : 'Cache Miss (~175ms) • B-Tree Scan + Invalidation'),
      badge: cacheMode === 'hit' ? 'Memory Cache' : 'Persistent Storage',
      status: cacheMode === 'hit' ? 'Hit ~96%' : 'Cold Fetch',
    },
  ];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(1);

    const stepDuration = 550;

    setTimeout(() => setActiveStep(2), stepDuration);
    setTimeout(() => setActiveStep(3), stepDuration * 2);
    setTimeout(() => setActiveStep(4), stepDuration * 3);
    setTimeout(() => {
      setIsSimulating(false);
      setActiveStep(0);
    }, stepDuration * 4.5);
  };

  return (
    <div className="w-full bg-surface/90 border border-border rounded-xl p-4 sm:p-5 shadow-2xl relative overflow-hidden backdrop-blur-sm">
      {/* Decorative top technical bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-border/80 text-xs">
        <div className="flex items-center gap-2 font-mono text-slate-300">
          <Activity className="w-3.5 h-3.5 text-accent animate-pulse" />
          <span className="font-semibold text-slate-200">
            {language === 'es' ? 'Flujo de Petición en Producción' : 'Production Request Pipeline'}
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent/15 text-accent font-mono border border-accent/30">
            LIVE ARCHITECTURE
          </span>
        </div>

        {/* Cache Mode Toggle */}
        <div className="flex items-center gap-1.5 bg-background/80 p-1 rounded-md border border-border">
          <button
            onClick={() => setCacheMode('hit')}
            className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors ${
              cacheMode === 'hit'
                ? 'bg-success/20 text-success border border-success/40 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Cache Hit
          </button>
          <button
            onClick={() => setCacheMode('miss')}
            className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors ${
              cacheMode === 'miss'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Cache Miss
          </button>
        </div>
      </div>

      {/* Nodes visual flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
        {nodes.map((node, index) => {
          const NodeIcon = node.icon;
          const isCurrentStep = activeStep === index + 1;
          const isSelected = selectedNode === node.id;

          return (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`relative p-3.5 rounded-lg border transition-all duration-300 cursor-pointer ${
                isCurrentStep
                  ? 'border-accent bg-accent/10 shadow-glow-accent scale-[1.02]'
                  : isSelected
                  ? 'border-slate-700 bg-surface-raised'
                  : 'border-border bg-background/60 hover:border-slate-700 hover:bg-surface'
              }`}
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface border border-border text-slate-400">
                  NODE 0{index + 1}
                </span>
                <span
                  className={`text-[10px] font-mono flex items-center gap-1 ${
                    node.id === 'cache-db' && cacheMode === 'hit'
                      ? 'text-success'
                      : node.id === 'cache-db' && cacheMode === 'miss'
                      ? 'text-amber-400'
                      : 'text-accent'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping"></span>
                  {node.status}
                </span>
              </div>

              {/* Title & icon */}
              <div className="flex items-center gap-2.5 mb-1.5">
                <div
                  className={`w-7 h-7 rounded-md flex items-center justify-center border ${
                    node.id === 'cache-db' && cacheMode === 'hit'
                      ? 'bg-success/15 border-success/30 text-success'
                      : 'bg-accent/15 border-accent/30 text-accent'
                  }`}
                >
                  <NodeIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-100 tracking-tight">
                    {node.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono">
                    {node.subtitle}
                  </p>
                </div>
              </div>

              {/* Specs pill */}
              <div className="mt-2 text-[10.5px] font-mono text-slate-300/90 bg-background/80 px-2 py-1 rounded border border-border/70 truncate">
                {node.specs}
              </div>

              {/* Simulation active packet badge */}
              {isCurrentStep && (
                <div className="absolute -top-1.5 -right-1.5 bg-accent text-[9px] font-mono font-bold text-white px-1.5 py-0.5 rounded-full shadow-md animate-bounce">
                  REQ {activeStep}/4
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Real-time telemetry banner */}
      <div className="mt-3.5 p-3 rounded-lg bg-background/90 border border-border text-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div>
            <span className="text-[10px] text-slate-400 block font-mono">STATUS</span>
            <span className="font-mono text-success font-semibold flex items-center gap-1 text-[11px]">
              <CheckCircle2 className="w-3 h-3 text-success" />
              200 OK
            </span>
          </div>

          <div className="h-6 w-px bg-border"></div>

          <div>
            <span className="text-[10px] text-slate-400 block font-mono">LATENCIA</span>
            <span
              className={`font-mono font-semibold text-[11px] ${
                cacheMode === 'hit' ? 'text-success' : 'text-amber-400'
              }`}
            >
              {cacheMode === 'hit' ? '~11.8 ms (Cache Hit)' : '~176 ms (PostgreSQL)'}
            </span>
          </div>

          <div className="h-6 w-px bg-border hidden sm:block"></div>

          <div className="hidden sm:block">
            <span className="text-[10px] text-slate-400 block font-mono">CARGA BD</span>
            <span className="font-mono text-slate-300 text-[11px]">
              {cacheMode === 'hit' ? '0 Consultas (0% CPU)' : '1 Query + Lock (~35% CPU)'}
            </span>
          </div>
        </div>

        {/* Simulate button */}
        <button
          onClick={runSimulation}
          disabled={isSimulating}
          type="button"
          className="ml-auto flex items-center gap-1.5 px-3 py-1.5 bg-accent hover:bg-accent-hover text-white text-xs font-medium rounded-md transition-all shadow-glow-accent cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
          <span>{isSimulating ? (language === 'es' ? 'Enrutando...' : 'Routing...') : (language === 'es' ? 'Simular Petición' : 'Simulate Request')}</span>
        </button>
      </div>

      {/* Node inspector footer info */}
      <div className="mt-2.5 pt-2 border-t border-border/60 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1 font-mono text-[10px]">
          <Layers className="w-3 h-3 text-accent" />
          {language === 'es' ? 'Estrategia:' : 'Strategy:'}{' '}
          <strong className="text-slate-200">Cache-Aside con Inyección de Dependencias</strong>
        </span>
        <span className="text-[10px] font-mono text-slate-400">
          <Sliders className="w-3 h-3 inline mr-1 text-slate-400" />
          {language === 'es' ? 'Haz clic para inspeccionar' : 'Click node to inspect'}
        </span>
      </div>
    </div>
  );
};
