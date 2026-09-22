import React from 'react';
import { Logo } from './Logo';
import { ArrowUp } from 'lucide-react';
import { CONTACT_CONFIG } from '../config';

interface FooterProps {
  onOpenDiagnostic: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDiagnostic }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = CONTACT_CONFIG.getWhatsappUrl();

  return (
    <footer className="bg-[#05070D] border-t border-slate-800/80 text-slate-400 text-xs py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Logo & Core Proposition */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center transition-opacity hover:opacity-90 shrink-0 cursor-pointer"
              aria-label="Voltar ao início"
            >
              <Logo variant="official" className="h-12 w-auto" />
            </button>
            <div className="hidden sm:block h-8 w-[1px] bg-slate-800" />
            <p className="text-xs text-slate-400 max-w-sm">
              Sua empresa não precisa de mais uma agência. Precisa de um sistema de crescimento.
            </p>
          </div>

          {/* Quick Links & WhatsApp */}
          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider font-semibold text-slate-300">
            <a href="#como-funciona" className="hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="#resultados" className="hover:text-white transition-colors">
              Resultados
            </a>
            <a href="#diagnostico" className="hover:text-white transition-colors">
              Diagnóstico
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
            >
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} NOX4. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Voltar ao Topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
