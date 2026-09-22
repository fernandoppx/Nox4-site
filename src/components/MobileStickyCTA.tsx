import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './LeadForm';
import { CONTACT_CONFIG } from '../config';

interface MobileStickyCTAProps {
  onOpenDiagnostic: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenDiagnostic }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the hero (e.g. 400px) and hide if near bottom form
      const scrollY = window.scrollY;
      const isPastHero = scrollY > 400;
      const formEl = document.getElementById('diagnostico');
      let isNearForm = false;
      if (formEl) {
        const rect = formEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          isNearForm = true;
        }
      }
      setVisible(isPastHero && !isNearForm);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  const whatsappUrl = CONTACT_CONFIG.getWhatsappUrl();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 bg-[#070A11]/95 backdrop-blur-md border-t border-slate-800 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-2.5 rounded-lg bg-slate-900 border border-emerald-500/50 text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shrink-0"
        >
          <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenDiagnostic}
          className="flex-1 py-2.5 px-4 rounded-lg bg-[#1040FF] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-1.5 border border-blue-400/40"
        >
          <span>Diagnóstico</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

