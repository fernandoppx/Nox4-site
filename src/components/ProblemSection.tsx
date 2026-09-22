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
    <section id="como-funciona" className="py-24 bg-[#0A0E1A] relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest block mb-3">
            O Ponto Crítico
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight uppercase leading-tight font-montserrat">
            Seu problema pode não ser falta de clientes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Muitas empresas investem em marketing, tráfego e vendas, mas continuam crescendo abaixo do potencial porque existem gargalos entre essas áreas.
          </p>
        </div>

        {/* Visual Flow with Bottleneck Points */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative">
          {bottlenecks.map((item, idx) => (
            <div key={item.stage} className="relative flex flex-col">
              
              {/* Card */}
              <div className={`p-6 rounded-2xl border transition-all duration-200 flex-1 flex flex-col justify-between ${
                item.isResult
                  ? 'bg-[#0E1528] border-blue-500/60 shadow-[0_0_25px_rgba(30,64,175,0.2)]'
                  : 'bg-[#0B0F19] border-slate-800/90'
              }`}>
                <div>
                  {/* Top order indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      FASE {item.order}
                    </span>
                    {item.isResult ? (
                      <span className="text-[10px] font-mono font-bold text-blue-400 uppercase">
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

                <div className="mt-6 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 text-center">
                  {item.isResult ? 'Ruptura no resultado' : 'Vazamento entre etapas'}
                </div>
              </div>

              {/* Arrow Connector for Desktop */}
              {idx < bottlenecks.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#070A11] border border-slate-700 items-center justify-center text-slate-400">
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
        <div className="mt-12 p-6 rounded-2xl bg-[#0B0F19] border border-slate-800 text-center max-w-2xl mx-auto">
          <p className="text-sm sm:text-base text-slate-200 font-medium">
            Quando marketing e comercial não operam como um sistema único, o investimento em tráfego se perde no meio do caminho.
          </p>
        </div>

      </div>
    </section>
  );
};
