import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { architecturePrinciples } from '../../data/portfolioData';
import {
  ShieldAlert,
  Server,
  Zap,
  Lock,
  CheckCircle,
  Copy,
  Check,
  Terminal as TerminalIcon,
} from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'nginx' | 'pm2' | 'security'>('nginx');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    nginx: `# /etc/nginx/conf.d/api-gateway.conf
# Rocky Linux 9 / Debian Hardened Reverse Proxy

limit_req_zone $binary_remote_addr zone=api_limit:10m rate=100r/s;

upstream node_cluster {
    least_conn;
    server 127.0.0.1:4000 max_fails=3 fail_timeout=10s;
    server 127.0.0.1:4001 max_fails=3 fail_timeout=10s;
    keepalive 64;
}

server {
    listen 443 ssl http2;
    server_name api.movilidad.hidalgo.gob.mx;

    ssl_certificate /etc/letsencrypt/live/api/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Defensive Security Headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Content-Security-Policy "default-src 'self'" always;
    add_header Strict-Transport-Security "max-age=63072000" always;

    location /api/v1/routes {
        limit_req zone=api_limit burst=20 nodelay;
        proxy_pass http://node_cluster;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_buffering on;
    }
}`,
    pm2: `// ecosystem.config.cjs - PM2 Production Cluster
module.exports = {
  apps: [
    {
      name: 'transit-api',
      script: './dist/server.js',
      instances: 'max',       // Scales to all available CPU cores
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '800M',
      env_production: {
        NODE_ENV: 'production',
        PORT: 4000,
        UV_THREADPOOL_SIZE: 16
      },
      exp_backoff_restart_delay: 100,
      listen_timeout: 8000,
      kill_timeout: 3000
    }
  ]
};`,
    security: `// middleware/rateLimiter.ts - Defensive Token Bucket with Redis
import { Request, Response, NextFunction } from 'express';
import { redisClient } from '../config/redis';

export const slidingWindowRateLimiter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const key = \`rate_limit:\${ip}\`;
  const now = Date.now();
  const windowMs = 60 * 1000; // 1-minute window
  const maxRequests = 120;

  try {
    const multi = redisClient.multi();
    multi.zremrangebyscore(key, 0, now - windowMs);
    multi.zadd(key, now, \`\${now}-\${Math.random()}\`);
    multi.zcard(key);
    multi.expire(key, 60);

    const results = await multi.exec();
    const count = results ? (results[2][1] as number) : 0;

    if (count > maxRequests) {
      return res.status(429).json({
        error: 'Too Many Requests',
        retryAfterMs: windowMs
      });
    }
    next();
  } catch (err) {
    // Fail-open defensively or log alert
    next();
  }
};`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="architecture" className="py-20 lg:py-28 bg-surface/30 border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-success">
            <Lock className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Infraestructura & Hardening' : 'Infrastructure & Hardening'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'es' ? 'Arquitectura, Linux y Ciberseguridad Defensiva' : 'Architecture, Linux & Defensive Cybersecurity'}
          </h2>

          <p className="text-base text-slate-400 max-w-2xl">
            {language === 'es'
              ? 'La confiabilidad en producción no depende de la suerte, sino de una arquitectura resiliente: capas protectoras en Nginx, clusterización con PM2 y estándares derivados de la Maestría en Ciberseguridad.'
              : 'Production reliability is not accidental. It is engineered through defense-in-depth: Nginx buffering, PM2 worker clustering, and master-level cybersecurity controls.'}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {architecturePrinciples.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-surface p-6 rounded-xl border border-border hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-background border border-border text-accent">
                    {idx === 0 && <Server className="w-5 h-5 text-accent" />}
                    {idx === 1 && <ShieldAlert className="w-5 h-5 text-purple-400" />}
                    {idx === 2 && <Zap className="w-5 h-5 text-success" />}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-background border border-border text-slate-400">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {t(pillar.title)}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {t(pillar.description)}
                </p>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 pt-3 border-t border-border/60">
                {pillar.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{t(bullet)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Code Inspector / Terminal */}
        <div className="bg-background rounded-xl border border-border overflow-hidden shadow-2xl">
          {/* Terminal Title Bar */}
          <div className="bg-surface px-4 py-3 border-b border-border flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pl-2">
                <TerminalIcon className="w-3.5 h-3.5 text-accent" />
                <span>production-config.conf</span>
              </div>
            </div>

            {/* Config Tabs */}
            <div className="flex items-center gap-1.5 bg-background p-1 rounded-md border border-border">
              <button
                onClick={() => setActiveTab('nginx')}
                className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                  activeTab === 'nginx'
                    ? 'bg-surface text-accent font-semibold border border-border'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Nginx (Reverse Proxy)
              </button>
              <button
                onClick={() => setActiveTab('pm2')}
                className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                  activeTab === 'pm2'
                    ? 'bg-surface text-accent font-semibold border border-border'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                PM2 (Cluster Mode)
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                  activeTab === 'security'
                    ? 'bg-surface text-accent font-semibold border border-border'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Redis Rate Limiter
              </button>
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-white bg-surface hover:bg-surface-hover border border-border rounded transition-colors"
              title="Copiar configuración"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-success" />
                  <span className="text-success">{language === 'es' ? 'Copiado' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>{language === 'es' ? 'Copiar' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Code Body */}
          <div className="p-4 sm:p-6 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed bg-[#05070A]">
            <pre className="selection:bg-accent/30 selection:text-white">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>

          {/* Terminal Status Footer */}
          <div className="bg-surface/60 px-4 py-2 border-t border-border flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-success inline-block"></span>
              {language === 'es' ? 'Rocky Linux / Debian 12 (Hardened Kernel)' : 'Rocky Linux / Debian 12 (Hardened Kernel)'}
            </span>
            <span>UTF-8 • Strict Mode • Zero-Trust</span>
          </div>
        </div>
      </div>
    </section>
  );
};
