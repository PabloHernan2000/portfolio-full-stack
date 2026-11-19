import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo } from '../../data/portfolioData';
import {
  Terminal,
  Globe,
  FileDown,
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: language === 'es' ? 'Proyectos' : 'Projects', href: '#projects' },
    { name: language === 'es' ? 'Arquitectura' : 'Architecture', href: '#architecture' },
    { name: language === 'es' ? 'Rendimiento' : 'Benchmarks', href: '#performance' },
    { name: language === 'es' ? 'Experiencia' : 'Experience', href: '#experience' },
    { name: language === 'es' ? 'Stack' : 'Stack', href: '#stack' },
    { name: language === 'es' ? 'Contacto' : 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Generates a clean alert / download trigger
    const cvUrl = '#contact';
    const el = document.querySelector(cvUrl);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // Alternatively opens mailto or contact trigger
    window.open(`mailto:${personalInfo.email}?subject=Solicitud%20de%20CV%20-%20Pablo%20Hernan%20Munoz%20Garcia`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Monogram */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Pablo Hernán - Home"
          >
            <div className="w-10 h-10 rounded-lg bg-surface border border-border group-hover:border-accent/60 transition-colors flex items-center justify-center relative shadow-sm">
              <Terminal className="w-5 h-5 text-accent transition-transform group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-mono text-sm font-bold tracking-tight text-slate-100 group-hover:text-white">
                <span>PM</span>
                <span className="text-accent">.</span>
                <span className="text-slate-400 font-normal">dev</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                {language === 'es' ? 'Sistemas & Cloud' : 'Systems & Cloud'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-surface/80 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Language toggle & CV button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-mono font-medium text-slate-300 bg-surface hover:bg-surface-hover border border-border hover:border-slate-700 rounded-md transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent"
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              aria-label="Language selector"
            >
              <Globe className="w-3.5 h-3.5 text-accent" />
              <span className={language === 'es' ? 'text-accent font-semibold' : 'text-slate-400'}>ES</span>
              <span className="text-slate-600">/</span>
              <span className={language === 'en' ? 'text-accent font-semibold' : 'text-slate-400'}>EN</span>
            </button>

            {/* Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-100 bg-surface-raised hover:bg-accent hover:text-white border border-border hover:border-accent transition-all duration-200 rounded-md group shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5 text-accent group-hover:text-white transition-colors" />
              <span>{language === 'es' ? 'Solicitar CV' : 'Request CV'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 text-xs font-mono text-slate-300 bg-surface border border-border rounded-md"
              aria-label="Toggle language"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white bg-surface border border-border rounded-md focus:outline-none"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-surface border-b border-border px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-border flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownloadCV();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium text-slate-100 bg-accent hover:bg-accent-hover rounded-md transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>{language === 'es' ? 'Descargar / Solicitar CV' : 'Request CV'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
