import React from 'react';
import { ArrowRight, Compass, Users, TrendingUp, Sparkles, Activity } from 'lucide-react';

interface HeroProps {
  onOpenDiagnostic: () => void;
  onExploreHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic, onExploreHowItWorks }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#070A11]">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />
      
      {/* Precision Geometric Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)`,
          backgroundSize: '56px 56px'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Direct Copy & Action */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Architectural Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono tracking-widest text-slate-300 uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Arquitetura de Crescimento Empresarial</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-white leading-[1.12] uppercase font-montserrat">
              Sua empresa não precisa de mais uma agência.{' '}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-slate-200">
                Precisa de um sistema de crescimento.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              A <strong className="text-white font-semibold">NOX4</strong> conecta estratégia, aquisição e vendas para transformar crescimento em processo.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-cta-diagnostic"
                onClick={onOpenDiagnostic}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#1E40AF] hover:bg-[#2563EB] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-[0_0_30px_rgba(30,64,175,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.65)] active:scale-[0.98] border border-blue-400/40 cursor-pointer group"
              >
                <span>Quero Meu Diagnóstico</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-cta-how"
                onClick={onExploreHowItWorks}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-transparent hover:bg-slate-900 text-slate-300 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 border border-slate-800 hover:border-slate-700 cursor-pointer"
              >
                <span>Entender Como Funciona</span>
              </button>
            </div>

            {/* Supporting Microcopy */}
            <p className="text-xs text-slate-400 font-medium tracking-wide flex items-center gap-2 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Descubra onde sua empresa está perdendo oportunidades de crescimento.
            </p>
          </div>

          {/* Right Column: Abstract Growth System Diagram */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#0B0F19] border border-slate-800/90 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
              
              {/* Terminal / System Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
                  <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                    SISTEMA OPERACIONAL NOX4
                  </span>
                </div>
                <span className="text-[10px] font-mono text-blue-400 font-semibold bg-blue-950/60 border border-blue-800/40 px-2 py-0.5 rounded">
                  FLUXO SINCRONIZADO
                </span>
              </div>

              {/* Interconnected System Nodes */}
              <div className="relative py-4 space-y-4">
                
                {/* Node 1: Estratégia */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between hover:border-blue-700/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/70 text-blue-400 border border-blue-800/40">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white uppercase tracking-wider font-montserrat">
                        01. Estratégia
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Diagnóstico & Priorização de Gargalos
                      </div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

                {/* Connecting Vector Line */}
                <div className="h-4 flex justify-center items-center">
                  <div className="w-[2px] h-full bg-gradient-to-b from-blue-500/80 to-blue-500/40" />
                </div>

                {/* Node 2: Aquisição */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between hover:border-blue-700/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/70 text-blue-400 border border-blue-800/40">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white uppercase tracking-wider font-montserrat">
                        02. Aquisição
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Geração de Oportunidades Qualificadas
                      </div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

                {/* Connecting Vector Line */}
                <div className="h-4 flex justify-center items-center">
                  <div className="w-[2px] h-full bg-gradient-to-b from-blue-500/80 to-blue-500/40" />
                </div>

                {/* Node 3: Vendas */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between hover:border-blue-700/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/70 text-blue-400 border border-blue-800/40">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white uppercase tracking-wider font-montserrat">
                        03. Vendas
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Atendimento, Processo & Conversão
                      </div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

              </div>

              {/* Converging Core Result */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/50 via-[#0F172A] to-blue-950/50 border border-blue-600/40 text-center">
                  <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest block mb-1">
                    RESULTADO CONVERGENTE
                  </span>
                  <div className="text-base sm:text-lg font-black text-white font-montserrat uppercase tracking-tight flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span>Crescimento Previsível</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
