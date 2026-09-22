import React from 'react';
import { TrendingUp, Users, Flame, Building2, ArrowRight } from 'lucide-react';
import { CaseStudyCompact } from '../types';

export const ProofSection: React.FC = () => {
  const metrics = [
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
      valor: '+R$ 30M',
      rotulo: 'Gerados no Digital',
      detalhe: 'Volume de receita gerado através de canais digitais estruturados.',
    },
    {
      icon: <Users className="w-5 h-5 text-blue-400" />,
      valor: '+10.000',
      rotulo: 'Leads Qualificados / Mês',
      detalhe: 'Oportunidades geradas e processadas continuamente.',
    },
    {
      icon: <Flame className="w-5 h-5 text-blue-400" />,
      valor: '+9.300',
      rotulo: 'Vendas em Pré-vendas',
      detalhe: 'Contratos fechados antes da abertura de portas.',
    },
    {
      icon: <Building2 className="w-5 h-5 text-blue-400" />,
      valor: '+5 Anos',
      rotulo: 'Operando Grandes Redes',
      detalhe: 'Experiência em operações de alta demanda e escala nacional.',
    },
  ];

  const cases: CaseStudyCompact[] = [
    {
      empresa: 'Rede em Expansão Nacional',
      segmento: 'Unidades Físicas & Franquias',
      desafio: 'Atingir ponto de equilíbrio de novas unidades já no primeiro dia de portas abertas.',
      acao: 'Campanha de antecipação geolocalizada + atendimento rápido via WhatsApp + esteira de fechamento.',
      resultado: '+9.300 contratos fechados em pré-vendas com abertura em ponto de equilíbrio.',
      destaque: '+9.300 contratos',
    },
    {
      empresa: 'Operação de Serviços Contínuos',
      segmento: 'Serviços & Recorrência',
      desafio: 'Alto volume de leads desqualificados e baixa conversão do time comercial.',
      acao: 'Filtro de qualificação na mídia + roteiro consultivo de vendas + rotina de follow-up.',
      resultado: '+10.000 leads qualificados/mês com aumento de +42% na taxa de conversão.',
      destaque: '+42% em conversão',
    },
    {
      empresa: 'Operação Multicanal',
      segmento: 'Médias Empresas em Crescimento',
      desafio: 'Desconexão entre investimento de marketing e faturamento real registrado no caixa.',
      acao: 'Implantação de indicadores de ponta a ponta conectando mídia, CRM e taxa de fechamento.',
      resultado: '+R$ 30 milhões gerados via digital com controle rigoroso de CAC e margem.',
      destaque: '+R$ 30M gerados',
    },
  ];

  return (
    <section id="resultados" className="py-24 bg-[#0A0E1A] relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest block mb-3">
            Resultados Comprovados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight uppercase leading-tight font-montserrat">
            Crescimento precisa de resultado.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Nossa experiência foi construída onde a demanda precisa acontecer todos os dias.
          </p>
        </div>

        {/* 4 Strong Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0B0F19] border border-slate-800/90 hover:border-blue-700/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 w-fit rounded-lg bg-blue-950/70 border border-blue-800/40 mb-4">
                  {m.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white font-montserrat tracking-tight">
                  {m.valor}
                </div>
                <div className="text-xs font-bold text-blue-400 font-mono uppercase tracking-wider mt-1">
                  {m.rotulo}
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800/80 leading-relaxed">
                {m.detalhe}
              </p>
            </div>
          ))}
        </div>

        {/* Short Cases: DESAFIO → AÇÃO → RESULTADO */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-2">
            Cases em Formato Rápido
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0B0F19] border border-slate-800/90 hover:border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-slate-300">
                      {c.empresa}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {c.segmento}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80">
                      <span className="font-bold text-rose-400 block font-mono text-[10px] uppercase">
                        Desafio:
                      </span>
                      <span className="text-slate-300">{c.desafio}</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80">
                      <span className="font-bold text-blue-400 block font-mono text-[10px] uppercase">
                        Ação:
                      </span>
                      <span className="text-slate-300">{c.acao}</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-800/40">
                      <span className="font-bold text-emerald-400 block font-mono text-[10px] uppercase">
                        Resultado:
                      </span>
                      <span className="text-white font-medium">{c.resultado}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-blue-400 font-bold">
                  <span>Validação Operacional</span>
                  <span>{c.destaque}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
