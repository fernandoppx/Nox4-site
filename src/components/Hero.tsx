import React from 'react';
import { ArrowRight, Compass, Users, TrendingUp, Sparkles, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenDiagnostic: () => void;
  onExploreHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic, onExploreHowItWorks }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-[#070A11]">
      {/* ========================================================
          01. BACKGROUND VIDEO (FULL COVERAGE, AUTO, MUTED, LOOP, PLAYSINLINE)
          ======================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
          aria-hidden="true"
          className="w-full h-full object-cover hero-video-zoom opacity-45 sm:opacity-55"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ========================================================
          02. MULTI-LAYER DARK / GRADIENT OVERLAYS (EXCELLENT CONTRAST & DEPTH)
          ======================================================== */}
      {/* Top and Bottom Gradient Blends */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A11]/90 via-[#070A11]/70 to-[#070A11] pointer-events-none z-[1]" />
      
      {/* Vignette / Edge Softening */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,10,17,0.7)_100%)] pointer-events-none z-[2]" />

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-blue-600/15 blur-[160px] pointer-events-none rounded-full ambient-orb z-[2]" />

      {/* Precision Micro-Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-[2]"
        style={{
          backgroundImage: `linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* ========================================================
          03. NOX4 FOREGROUND CONTENT (STAGGERED PROGRESSIVE ENTRANCE)
          ======================================================== */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Direct Copy & Action */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Step 1: NOX4 Architectural Category Identifier Badge */}
            <div className="animate-hero-badge">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-[11px] font-mono tracking-widest text-slate-300 uppercase shadow-lg shadow-black/40">
                <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#38BDF8] animate-pulse" />
                <span>Arquitetura de Crescimento Empresarial</span>
              </div>
            </div>

            {/* Step 2: Main Headline with Line-by-Line Split Stagger */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-white leading-[1.12] uppercase font-montserrat">
              <span className="block animate-hero-headline-1">
                Sua empresa não precisa de mais uma agência.{' '}
              </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-slate-100 animate-hero-headline-2">
                Precisa de um sistema de crescimento.
              </span>
            </h1>

            {/* Step 3: Subheadline */}
            <p className="animate-hero-sub text-base sm:text-lg text-slate-300/95 font-normal leading-relaxed max-w-xl">
              A <strong className="text-white font-semibold">NOX4</strong> conecta estratégia, aquisição e vendas para transformar crescimento em processo.
            </p>

            {/* Step 4: CTAs & Microcopy */}
            <div className="animate-hero-cta space-y-4 pt-1">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="hero-cta-diagnostic"
                  onClick={onOpenDiagnostic}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] active:scale-[0.98] border border-blue-400/40 cursor-pointer group"
                >
                  <span>Quero Meu Diagnóstico</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  id="hero-cta-how"
                  onClick={onExploreHowItWorks}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/90 text-slate-300 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 border border-slate-700/80 hover:border-slate-500 backdrop-blur-sm cursor-pointer"
                >
                  <span>Entender Como Funciona</span>
                </button>
              </div>

              {/* Supporting Microcopy */}
              <p className="text-xs text-slate-400 font-medium tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_#60A5FA]" />
                Descubra onde sua empresa está perdendo oportunidades de crescimento.
              </p>
            </div>
          </div>

          {/* Right Column: Abstract Growth System Diagram (Elevated Visual Architecture) */}
          <div className="lg:col-span-5 relative animate-hero-diagram">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/20 via-sky-500/10 to-transparent blur-xl pointer-events-none" />

            <div className="relative rounded-2xl bg-[#0B0F19]/90 backdrop-blur-xl border border-slate-800 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden interactive-card">
              
              {/* Terminal / System Header */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
                  <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                    SISTEMA OPERACIONAL NOX4
                  </span>
                </div>
                <span className="text-[10px] font-mono text-sky-400 font-semibold bg-blue-950/80 border border-blue-800/50 px-2.5 py-0.5 rounded-full">
                  FLUXO SINCRONIZADO
                </span>
              </div>

              {/* Interconnected System Nodes */}
              <div className="relative py-2 space-y-3.5">
                
                {/* Node 1: Estratégia */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-600/60 transition-all duration-300 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800/40 group-hover:scale-105 transition-transform">
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
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                </div>

                {/* Connecting Vector Line */}
                <div className="h-3 flex justify-center items-center">
                  <div className="w-[2px] h-full bg-gradient-to-b from-blue-500/80 to-blue-500/30" />
                </div>

                {/* Node 2: Aquisição */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-600/60 transition-all duration-300 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800/40 group-hover:scale-105 transition-transform">
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
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                </div>

                {/* Connecting Vector Line */}
                <div className="h-3 flex justify-center items-center">
                  <div className="w-[2px] h-full bg-gradient-to-b from-blue-500/80 to-blue-500/30" />
                </div>

                {/* Node 3: Vendas */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-600/60 transition-all duration-300 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800/40 group-hover:scale-105 transition-transform">
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
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                </div>

              </div>

              {/* Converging Core Result */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/60 via-[#0F172A] to-blue-950/60 border border-blue-500/40 text-center shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                  <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest block mb-0.5">
                    RESULTADO CONVERGENTE
                  </span>
                  <div className="text-base sm:text-lg font-black text-white font-montserrat uppercase tracking-tight flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
                    <span>Crescimento Previsível</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Hint Indicator at Bottom */}
      <button 
        type="button"
        onClick={onExploreHowItWorks}
        aria-label="Rolar para ver mais"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer group"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase opacity-75 group-hover:opacity-100">Explorar</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};
