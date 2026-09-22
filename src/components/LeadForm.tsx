import React, { useState } from 'react';
import { DiagnosticLeadData, FormErrors } from '../types';
import { Logo } from './Logo';
import { CONTACT_CONFIG } from '../config';
import { Send, CheckCircle2, AlertCircle, Lock, ArrowUpRight } from 'lucide-react';

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbx8dJDgvca4GdkiURTkA-DJ06dLPb88L-hXQVTxGI9ErDT0_RIDYe5Fz40b5V7y1OKM/exec";

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.476-.15-.677.15-.2.301-.777.98-.952 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.175.201-.3.301-.501.101-.2.051-.376-.025-.526-.075-.15-.677-1.631-.928-2.235-.245-.589-.494-.509-.677-.518-.175-.009-.376-.011-.577-.011-.201 0-.527.075-.803.376-.276.301-1.053 1.028-1.053 2.508s1.079 2.909 1.229 3.11c.151.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.899.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.076-.125-.276-.2-.577-.35z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.95l4.908-1.353A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.962 7.962 0 01-4.27-1.229l-.307-.189-2.909.803.803-2.909-.189-.307A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"
    />
  </svg>
);

interface LeadFormProps {
  onSuccess?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<DiagnosticLeadData>({
    nome: '',
    empresa: '',
    cargo: '',
    faturamento: '',
    whatsapp: '',
    email: '',
    segmento: '',
    desafio: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'whatsapp') {
      setFormData((prev) => ({ ...prev, [name]: formatWhatsApp(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.nome.trim()) errs.nome = 'Informe seu nome';
    if (!formData.empresa.trim()) errs.empresa = 'Informe o nome da sua empresa';
    if (!formData.cargo.trim()) errs.cargo = 'Selecione seu cargo';
    if (!formData.faturamento.trim()) errs.faturamento = 'Selecione o faturamento mensal';
    if (!formData.whatsapp.trim() || formData.whatsapp.replace(/\D/g, '').length < 10) {
      errs.whatsapp = 'Informe um WhatsApp com DDD válido';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Informe um e-mail corporativo válido';
    }
    if (!formData.segmento.trim()) errs.segmento = 'Informe o segmento da empresa';
    if (!formData.desafio) errs.desafio = 'Selecione o principal gargalo atual';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Structure prepared for CRM/webhook integration & local demo persistence
   try {
  await fetch(GOOGLE_SHEETS_URL, {
    method: "POST",
    body: JSON.stringify({
      ...formData,
      timestamp: new Date().toISOString()
    }),
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  });
} catch (error) {
  console.error("Erro ao enviar lead:", error);
}
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  if (submitted) {
    const whatsappCustomUrl = CONTACT_CONFIG.getWhatsappUrl(
      `Olá! Acabei de solicitar o diagnóstico para a empresa ${formData.empresa} (${formData.cargo}) e gostaria de agilizar o atendimento.`
    );

    return (
      <div className="p-8 sm:p-12 rounded-2xl bg-[#0B101D] border border-blue-500/60 text-center shadow-2xl animate-in fade-in duration-300">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex justify-center mb-6 mx-auto cursor-pointer hover:opacity-90 transition-opacity"
          aria-label="Voltar ao início"
        >
          <Logo variant="stacked" size="sm" showSubtitle={true} />
        </button>

        <div className="w-14 h-14 rounded-full bg-blue-950/80 border border-blue-500 flex items-center justify-center mx-auto mb-5 shadow-[0_0_25px_rgba(37,99,235,0.4)]">
          <CheckCircle2 className="w-7 h-7 text-emerald-400" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white font-montserrat uppercase tracking-tight mb-3">
          Recebemos suas informações.
        </h3>
        <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-6 font-normal">
          Nossa equipe executiva irá analisar a operação da <strong>{formData.empresa}</strong> e entrará em contato via WhatsApp no número <strong>{formData.whatsapp}</strong>.
        </p>

        {/* Immediate WhatsApp Action */}
        <div className="pt-2 pb-4">
          <a
            href={whatsappCustomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Falar Agora no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </a>
          <p className="text-xs text-slate-400 mt-2">
            Prefere agilizar? Clique acima para iniciar o contato diretamente no WhatsApp.
          </p>
        </div>
      </div>
    );
  }

  const directWhatsappUrl = CONTACT_CONFIG.getWhatsappUrl();

  return (
    <div id="diagnostico" className="rounded-2xl bg-[#090D18] border border-slate-800/90 p-6 sm:p-10 shadow-2xl relative">
      
      {/* Brand Header inside the form */}
      <div className="flex flex-col items-center justify-center text-center pb-6 mb-6 border-b border-slate-800/80">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer hover:opacity-90 transition-opacity mb-2"
          aria-label="Voltar ao início"
        >
          <Logo variant="stacked" size="sm" showSubtitle={true} />
        </button>
        <h3 className="text-lg sm:text-xl font-black text-white tracking-tight uppercase font-montserrat mt-2">
          Diagnóstico de Crescimento & Operação
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-1">
          Preencha os dados abaixo para identificarmos os principais gargalos de aquisição e conversão da sua empresa.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        
        {/* Row 1: Nome & Empresa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
              Seu Nome *
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Ex: Carlos Eduardo"
              className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                errors.nome ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-blue-500'
              }`}
            />
            {errors.nome && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.nome}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
              Empresa *
            </label>
            <input
              type="text"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Ex: Grupo Alpha"
              className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                errors.empresa ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-blue-500'
              }`}
            />
            {errors.empresa && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.empresa}</p>}
          </div>
        </div>

        {/* Row 2: Cargo & Faturamento (Novos Campos Solicitados) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
              Seu Cargo *
            </label>
            <select
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                errors.cargo ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-blue-500'
              }`}
            >
              <option value="">Selecione seu cargo...</option>
              <option value="Sócio / Fundador / CEO">Sócio / Fundador / CEO</option>
              <option value="Diretor(a) Executivo / Geral">Diretor(a) Executivo / Geral</option>
              <option value="Diretor(a) ou Gerente Comercial">Diretor(a) ou Gerente Comercial</option>
              <option value="Diretor(a) ou Head de Marketing">Diretor(a) ou Head de Marketing</option>
              <option value="Gerente de Operações / Expansão">Gerente de Operações / Expansão</option>
              <option value="Outro cargo de decisão">Outro cargo de decisão</option>
            </select>
            {errors.cargo && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.cargo}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
              Faturamento Mensal *
            </label>
            <select
              name="faturamento"
              value={formData.faturamento}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                errors.faturamento ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-blue-500'
              }`}
            >
              <option value="">Faixa de faturamento mensal...</option>
              <option value="Até R$ 50 mil / mês">Até R$ 50 mil / mês</option>
              <option value="R$ 50 mil a R$ 150 mil / mês">R$ 50 mil a R$ 150 mil / mês</option>
              <option value="R$ 150 mil a R$ 500 mil / mês">R$ 150 mil a R$ 500 mil / mês</option>
              <option value="R$ 500 mil a R$ 1 milhão / mês">R$ 500 mil a R$ 1 milhão / mês</option>
              <option value="Acima de R$ 1 milhão / mês">Acima de R$ 1 milhão / mês</option>
            </select>
            {errors.faturamento && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.faturamento}</p>}
          </div>
        </div>

        {/* Row 3: WhatsApp & E-mail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
              WhatsApp Corporativo *
            </label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              maxLength={15}
              className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                errors.whatsapp ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-blue-500'
              }`}
            />
            {errors.whatsapp && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.whatsapp}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
              E-mail Corporativo *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nome@empresa.com.br"
              className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-blue-500'
              }`}
            />
            {errors.email && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
          </div>
        </div>

        {/* Row 4: Segmento */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
            Segmento de Atuação *
          </label>
          <input
            type="text"
            name="segmento"
            value={formData.segmento}
            onChange={handleChange}
            placeholder="Ex: Serviços, Franquias, B2B, Saúde, Varejo..."
            className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              errors.segmento ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-blue-500'
            }`}
          />
          {errors.segmento && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.segmento}</p>}
        </div>

        {/* Row 5: Principal Desafio Hoje (6 opções estratégicas) */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
            Principal Desafio Hoje *
          </label>
          <select
            name="desafio"
            value={formData.desafio}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              errors.desafio ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-blue-500'
            }`}
          >
            <option value="">Selecione o desafio que mais reflete sua empresa...</option>
            <option value="Preciso gerar mais oportunidades">Preciso gerar mais oportunidades</option>
            <option value="Tenho leads, mas vendo pouco">Tenho leads, mas vendo pouco</option>
            <option value="Meu comercial precisa melhorar">Meu comercial precisa melhorar</option>
            <option value="Meu marketing não está funcionando como deveria">Meu marketing não está funcionando como deveria</option>
            <option value="Quero estruturar o crescimento">Quero estruturar o crescimento</option>
            <option value="Outro">Outro</option>
          </select>
          {errors.desafio && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.desafio}</p>}
        </div>

        {/* Action Button */}
        <div className="pt-3 space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-xl bg-[#1040FF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_30px_rgba(16,64,255,0.45)] hover:shadow-[0_0_35px_rgba(16,64,255,0.65)] active:scale-[0.99] border border-blue-400/40 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Processando...
              </span>
            ) : (
              <>
                <span>Solicitar Diagnóstico</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Direct WhatsApp Option */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-800"></div>
            <span className="flex-shrink mx-3 text-[11px] text-slate-500 uppercase tracking-widest font-mono">ou</span>
            <div className="flex-grow border-t border-slate-800"></div>
          </div>

          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 hover:text-white border border-slate-700/80 hover:border-emerald-500/60 font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm group"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>Falar Direto no WhatsApp da NOX4</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          </a>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
            <Lock className="w-3 h-3" />
            <span>Sem compromisso. Seus dados estão estritamente protegidos.</span>
          </div>
        </div>

      </form>
    </div>
  );
};

