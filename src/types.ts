export interface DiagnosticLeadData {
  nome: string;
  empresa: string;
  cargo: string;
  faturamento: string;
  whatsapp: string;
  email: string;
  segmento: string;
  desafio: string;
}

export interface FormErrors {
  nome?: string;
  empresa?: string;
  cargo?: string;
  faturamento?: string;
  whatsapp?: string;
  email?: string;
  segmento?: string;
  desafio?: string;
}

export interface CaseStudyCompact {
  empresa: string;
  segmento: string;
  desafio: string;
  acao: string;
  resultado: string;
  destaque: string;
}
