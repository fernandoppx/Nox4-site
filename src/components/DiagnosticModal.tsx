import React from 'react';
import { X } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0B0F19] border border-blue-500/60 shadow-[0_0_50px_rgba(0,0,0,0.9)] my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
          aria-label="Fechar Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Inner Form */}
        <div className="p-2 sm:p-4">
          <LeadForm onSuccess={() => {}} />
        </div>
      </div>
    </div>
  );
};
