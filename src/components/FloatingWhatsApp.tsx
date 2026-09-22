import React from 'react';
import { WhatsAppIcon } from './LeadForm';
import { CONTACT_CONFIG } from '../config';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = CONTACT_CONFIG.getWhatsappUrl();

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden sm:block group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_4px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_30px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/40"
      >
        <WhatsAppIcon className="w-5 h-5 text-white" />
        <span className="text-xs font-bold tracking-wide uppercase pr-1">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
};
