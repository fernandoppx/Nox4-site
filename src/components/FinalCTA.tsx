import React from 'react';
import { LeadForm } from './LeadForm';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0E1A] via-[#0D1528] to-[#070A11] relative overflow-hidden border-t border-slate-800">
      {/* Background Subtle Glow & Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-blue-600/15 blur-[160px] pointer-events-none rounded-full ambient-orb" />
      <div className="absolute top-12 -left-20 w-80 h-80 bg-sky-500/10 blur-[130px] pointer-events-none rounded-full ambient-orb" />

      {/* Precision Grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)`,
          backgroundSize: '56px 56px'
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Split Sequential Reveal */}
        <div className="text-center mb-12 fade-up">
          <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest block mb-3">
            Próximo Passo
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.1] font-montserrat mb-4">
            <span className="block">Descubra onde sua empresa está</span>
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
              perdendo crescimento.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Um diagnóstico para identificar os principais gargalos da sua operação e definir onde agir primeiro.
          </p>
        </div>

        {/* Streamlined Form Container */}
        <div className="max-w-2xl mx-auto fade-up delay-200">
          <LeadForm />
        </div>

      </div>
    </section>
  );
};
