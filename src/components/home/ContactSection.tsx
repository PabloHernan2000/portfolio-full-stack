import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo } from '../../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = language === 'es' ? 'El nombre es obligatorio.' : 'Name is required.';
    }
    if (!formData.email.trim()) {
      errs.email = language === 'es' ? 'El correo es obligatorio.' : 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = language === 'es' ? 'Correo electrónico no válido.' : 'Invalid email format.';
    }
    if (!formData.message.trim()) {
      errs.message = language === 'es' ? 'El mensaje no puede estar vacío.' : 'Message cannot be empty.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate reliable submission
    setSubmitted(true);
    // Optionally trigger mailto client as backup
    const mailtoSubject = encodeURIComponent(formData.subject || 'Contacto desde Portafolio');
    const mailtoBody = encodeURIComponent(
      `Hola Pablo,\n\nMi nombre es ${formData.name} (${formData.email}).\n\nMensaje:\n${formData.message}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent">
              <Mail className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Contacto Directo' : 'Direct Contact'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'es' ? 'Iniciemos una Conversación Técnica' : "Let's Start a Technical Conversation"}
            </h2>

            <p className="text-base text-slate-400 leading-relaxed">
              {language === 'es'
                ? '¿Buscas un Ingeniero Full-Stack o Backend con experiencia en sistemas distribuidos, rendimiento bajo carga y arquitectura defensiva? Envíame un correo directo o completa el formulario.'
                : 'Looking for a Senior Full-Stack or Backend Engineer with production-proven expertise in distributed architectures, caching strategies, and defensive security? Send a direct email or drop a message.'}
            </p>

            {/* 1-Click Copy Email Button Box */}
            <div className="p-4 rounded-xl bg-surface border border-border space-y-2">
              <span className="text-xs font-mono text-slate-400 block">
                {language === 'es' ? 'CORREO ELECTRÓNICO OFICIAL' : 'OFFICIAL EMAIL'}
              </span>

              <div className="flex items-center justify-between gap-3 bg-background p-2.5 rounded-lg border border-border">
                <span className="font-mono text-sm sm:text-base text-white font-semibold truncate">
                  {personalInfo.email}
                </span>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all shrink-0 cursor-pointer ${
                    copied
                      ? 'bg-success text-white shadow-glow-success font-semibold'
                      : 'bg-accent hover:bg-accent-hover text-white shadow-glow-accent'
                  }`}
                  title="Copiar al portapapeles"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>{language === 'es' ? '¡Copiado!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{language === 'es' ? 'Copiar correo' : 'Copy email'}</span>
                    </>
                  )}
                </button>
              </div>

              {copied && (
                <p className="text-[11px] font-mono text-success flex items-center gap-1 pt-1 animate-in fade-in">
                  <Check className="w-3 h-3" />
                  {language === 'es'
                    ? '¡Copiado al portapapeles! Listo para pegar en tu cliente de correo.'
                    : 'Copied to clipboard! Ready to paste into your mail app.'}
                </p>
              )}
            </div>

            {/* Quick Metadata Info */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="p-2 rounded-md bg-surface border border-border">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span>Pachuca de Soto, Hidalgo, México • Remoto / Híbrido</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="p-2 rounded-md bg-surface border border-border">
                  <Clock className="w-4 h-4 text-success" />
                </div>
                <span>
                  {language === 'es'
                    ? 'Zona Horaria: CST (UTC-6) • Tiempo de respuesta &lt; 24h'
                    : 'Timezone: CST (UTC-6) • Response time &lt; 24h'}
                </span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub / PabloHernan2000</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface rounded-xl border border-border p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                {language === 'es' ? 'Enviar un Mensaje Directo' : 'Send a Direct Message'}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {language === 'es'
                  ? 'Completa los campos a continuación para discutir vacantes, consultoría o proyectos.'
                  : 'Fill out the form below to discuss opportunities, consulting, or engineering collaboration.'}
              </p>

              {submitted ? (
                <div className="p-6 rounded-lg bg-success/10 border border-success/30 text-center space-y-3 animate-in zoom-in-95">
                  <div className="w-10 h-10 rounded-full bg-success/20 text-success mx-auto flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {language === 'es' ? '¡Mensaje Preparado!' : 'Message Ready!'}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    {language === 'es'
                      ? 'Se ha abierto tu cliente de correo con los datos redactados. También puedes escribir directamente a phernanmg@gmail.com.'
                      : 'Your email client has been prepared. You can also reach out directly to phernanmg@gmail.com.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-mono text-accent hover:underline pt-2"
                  >
                    {language === 'es' ? '← Enviar otro mensaje' : '← Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        {language === 'es' ? 'Nombre / Empresa *' : 'Name / Company *'}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Pablo / Google / Tech Startup"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-background border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-border focus:border-accent focus:ring-accent'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-400 mt-1 block font-mono">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        {language === 'es' ? 'Correo Electrónico *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-background border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-border focus:border-accent focus:ring-accent'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400 mt-1 block font-mono">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      {language === 'es' ? 'Asunto / Rol de Interés' : 'Subject / Position of Interest'}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={language === 'es' ? 'Oportunidad Senior Full-Stack / Backend' : 'Full-Stack / Backend Engineering Role'}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border focus:border-accent focus:ring-accent text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      {language === 'es' ? 'Mensaje *' : 'Message *'}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        language === 'es'
                          ? 'Hola Pablo, nos gustaría conversar sobre tu experiencia en sistemas distribuidos y arquitectura...'
                          : 'Hi Pablo, we would love to discuss your background in distributed systems and architectures...'
                      }
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-background border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-border focus:border-accent focus:ring-accent'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <span className="text-[11px] text-red-400 mt-1 block font-mono">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-semibold rounded-lg shadow-glow-accent transition-all duration-200 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === 'es' ? 'Enviar Mensaje' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
