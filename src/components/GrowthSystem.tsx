import React from 'react';
import { Compass, Users, TrendingUp, Sparkles, Check } from 'lucide-react';

export const GrowthSystem: React.FC = () => {
  return (
    <section className="py-24 bg-[#070A11] relative overflow-hidden">
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest block mb-3">
            O Sistema NOX4
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight uppercase leading-tight font-montserrat">
            A NOX4 conecta o que sua empresa precisa para crescer.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal">
            Três pilares interdependentes operando de forma integrada para transformar esforço em resultado.
          </p>
        </div>

        {/* 3 Pillars Grid with Central Convergence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-stretch mb-8">
          
          {/* Pilar 1: Estratégia */}
          <div className="p-8 rounded-2xl bg-[#0B0F19] border border-slate-800/90 hover:border-blue-700/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/40">
                  PILAR 01
                </span>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-blue-700 transition-colors">
                  <Compass className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              <h3 className="text-xl font-black text-white uppercase font-montserrat tracking-tight mb-3">
                Estratégia
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Identificamos onde está o gargalo e o que precisa ser priorizado.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Check className="w-4 h-4 text-blue-400" />
              <span>Direção & Prioridade</span>
            </div>
          </div>

          {/* Pilar 2: Aquisição */}
          <div className="p-8 rounded-2xl bg-[#0B0F19] border border-slate-800/90 hover:border-blue-700/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/40">
                  PILAR 02
                </span>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-blue-700 transition-colors">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              <h3 className="text-xl font-black text-white uppercase font-montserrat tracking-tight mb-3">
                Aquisição
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Criamos mecanismos para gerar oportunidades qualificadas.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Check className="w-4 h-4 text-blue-400" />
              <span>Demanda Qualificada</span>
            </div>
          </div>

          {/* Pilar 3: Vendas */}
          <div className="p-8 rounded-2xl bg-[#0B0F19] border border-slate-800/90 hover:border-blue-700/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/40">
                  PILAR 03
                </span>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-blue-700 transition-colors">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              <h3 className="text-xl font-black text-white uppercase font-montserrat tracking-tight mb-3">
                Vendas
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Estruturamos o caminho entre oportunidade, atendimento e conversão.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Check className="w-4 h-4 text-blue-400" />
              <span>Processo & Fechamento</span>
            </div>
          </div>

        </div>

        {/* Central Core: CRESCIMENTO */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-[#0F172A] to-blue-950/60 border border-blue-500/50 text-center shadow-[0_0_40px_rgba(30,64,175,0.2)] max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-bold uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4" />
            <span>No Centro do Sistema</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-montserrat uppercase tracking-tight">
            CRESCIMENTO
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Quando Estratégia, Aquisição e Vendas operam em sintonia, o resultado deixa de ser uma aposta e vira processo.
          </p>
        </div>

      </div>
    </section>
  );
};
