import React from 'react';
import { ArrowRight, AlertTriangle, XCircle, ArrowDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const bottlenecks = [
    {
      stage: 'AQUISIÇÃO',
      order: '01',
      gargalos: ['Leads que não avançam', 'Marketing desconectado do comercial'],
    },
    {
      stage: 'ATENDIMENTO',
      order: '02',
      gargalos: ['Atendimento sem processo', 'Falta de acompanhamento rápido'],
    },
    {
      stage: 'VENDAS',
      order: '03',
      gargalos: ['Vendas inconsistentes', 'Oportunidades perdidas no fechamento'],
    },
    {
      stage: 'CRESCIMENTO',
      order: '04',
      gargalos: ['Receita estagnada', 'Falta de previsibilidade operacional'],
      isResult: true,
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-[#0A0E1A] relative border-t border-slate-800/80 overflow-hidden">
      {/* Background Depth Orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-700/10 rounded-full blur-[150px] pointer-events-none ambient-orb" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-rose-950/20 rounded-full blur-[130px] pointer-events-none ambient-orb" />

      {/* Decorative Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Sophisticated Split Sequential Reveal */}
        <div className="max-w-3xl mb-16 fade-up">
          <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest block mb-3">
            O Ponto Crítico
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight uppercase leading-tight font-montserrat">
            <span className="block">Seu problema pode não ser</span>
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-rose-300">
              falta de clientes.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Muitas empresas investem em marketing, tráfego e vendas, mas continuam crescendo abaixo do potencial porque existem gargalos entre essas áreas.
          </p>
        </div>

        {/* Visual Flow with Bottleneck Points */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative">
          {bottlenecks.map((item, idx) => (
            <div key={item.stage} className={`relative flex flex-col fade-up delay-${(idx + 1) * 150}`}>
              
              {/* Card with Micro-Interactions */}
              <div className={`p-6 rounded-2xl border transition-all duration-300 flex-1 flex flex-col justify-between interactive-card ${
                item.isResult
                  ? 'bg-[#0E1528] border-blue-500/60 shadow-[0_0_30px_rgba(30,64,175,0.25)] hover:border-sky-400/70'
                  : 'bg-[#0B0F19]/90 backdrop-blur-sm border-slate-800/90 hover:border-slate-700'
              }`}>
                <div>
                  {/* Top order indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      FASE {item.order}
                    </span>
                    {item.isResult ? (
                      <span className="text-[10px] font-mono font-bold text-sky-400 uppercase">
                        Impacto Final
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono font-bold text-rose-400 uppercase flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        Gargalo
                      </span>
                    )}
                  </div>

                  {/* Stage Name */}
                  <h3 className="text-lg font-black text-white uppercase font-montserrat tracking-wide mb-4">
                    {item.stage}
                  </h3>

                  {/* Identified Ruptures */}
                  <div className="space-y-2.5">
                    {item.gargalos.map((gargalo, gIdx) => (
                      <div
                        key={gIdx}
                        className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-start gap-2 text-xs text-slate-300"
                      >
                        <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <span>{gargalo}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 text-center">
                  {item.isResult ? 'Ruptura no resultado' : 'Vazamento entre etapas'}
                </div>
              </div>

              {/* Arrow Connector for Desktop */}
              {idx < bottlenecks.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#070A11] border border-slate-700 items-center justify-center text-slate-400 shadow-lg">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}

              {/* Arrow Connector for Mobile */}
              {idx < bottlenecks.length - 1 && (
                <div className="md:hidden flex justify-center py-2 text-slate-600">
                  <ArrowDown className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Visual Summary Punchline */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-[#0B0F19]/90 backdrop-blur-sm border border-slate-800 text-center max-w-2xl mx-auto shadow-xl fade-up delay-400 interactive-card">
          <p className="text-sm sm:text-base text-slate-200 font-medium">
            Quando marketing e comercial não operam como um sistema único, o investimento em tráfego se perde no meio do caminho.
          </p>
        </div>

      </div>
    </section>
  );
};
