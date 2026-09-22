import React from 'react';
import { LeadForm } from './LeadForm';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0E1A] via-[#0D1528] to-[#070A11] relative overflow-hidden border-t border-slate-800">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest block mb-3">
            Próximo Passo
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.1] font-montserrat mb-4">
            Descubra onde sua empresa está perdendo crescimento.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Um diagnóstico para identificar os principais gargalos da sua operação e definir onde agir primeiro.
          </p>
        </div>

        {/* Streamlined Form Container */}
        <div className="max-w-2xl mx-auto">
          <LeadForm />
        </div>

      </div>
    </section>
  );
};
