import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CONTACT_CONFIG } from '../config';
import { WhatsAppIcon } from './LeadForm';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenDiagnostic: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDiagnostic }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Diagnóstico', href: '#diagnostico' },
  ];

  const whatsappUrl = CONTACT_CONFIG.getWhatsappUrl();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070A11]/90 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-xl'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Oficial NOX4 no Canto Superior Esquerdo - Retorna ao início */}
          <a
            href="#"
            onClick={scrollToTop}
            className="flex items-center transition-opacity hover:opacity-90 shrink-0 cursor-pointer"
            aria-label="NOX4 - Retornar ao início"
          >
            <Logo variant="official" className="h-10 sm:h-12 md:h-14 w-auto" />
          </a>

          {/* Minimalist Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs: WhatsApp + Diagnóstico */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold tracking-wider transition-all duration-200 border border-slate-700/80 hover:border-emerald-500/50"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#1040FF] hover:bg-blue-600 text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-[0_0_20px_rgba(16,64,255,0.4)] hover:shadow-[0_0_25px_rgba(16,64,255,0.6)] active:scale-[0.98] border border-blue-400/40 cursor-pointer"
            >
              <span>Quero Meu Diagnóstico</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400"
              aria-label="WhatsApp NOX4"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenDiagnostic}
              className="px-3 py-1.5 rounded-lg bg-[#1040FF] text-white text-[11px] font-bold tracking-wider uppercase shadow-md"
            >
              Diagnóstico
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F19] border-b border-slate-800 px-6 py-5 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-200 hover:text-blue-400 py-1 tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-400 font-bold text-xs uppercase tracking-wider"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostic();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1040FF] text-white font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              <span>Quero Meu Diagnóstico</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

