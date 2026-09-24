import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { GrowthSystem } from './components/GrowthSystem';
import { ProofSection } from './components/ProofSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DiagnosticModal } from './components/DiagnosticModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { useGlobalScrollReveal } from './hooks/useScrollReveal';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize IntersectionObserver scroll animations across all sections
  useGlobalScrollReveal();

  const handleOpenDiagnostic = () => {
    const el = document.getElementById('diagnostico');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // focus on the first input
      const input = el.querySelector('input');
      if (input) input.focus();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleExploreHowItWorks = () => {
    const el = document.getElementById('como-funciona');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070A11] text-[#F1F5F9] selection:bg-blue-600 selection:text-white">
      {/* Minimalist Header */}
      <Header onOpenDiagnostic={handleOpenDiagnostic} />

      {/* 5 Moments of Narrative Flow: IMPACTO → PROBLEMA → SOLUÇÃO → PROVA → AÇÃO */}
      <main>
        {/* 01. HERO (IMPACTO) */}
        <Hero
          onOpenDiagnostic={handleOpenDiagnostic}
          onExploreHowItWorks={handleExploreHowItWorks}
        />

        {/* 02. O PROBLEMA */}
        <ProblemSection />

        {/* 03. A SOLUÇÃO NOX4 (ESTRATÉGIA + AQUISIÇÃO + VENDAS = CRESCIMENTO) */}
        <GrowthSystem />

        {/* 04. PROVA (NÚMEROS FORTES + CASES CURTOS) */}
        <ProofSection />

        {/* 05. CTA FINAL & FORMULÁRIO (AÇÃO) */}
        <FinalCTA />
      </main>

      {/* Minimalist Footer */}
      <Footer onOpenDiagnostic={handleOpenDiagnostic} />

      {/* Diagnostic Modal Fallback */}
      <DiagnosticModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Mobile Sticky CRO Bar */}
      <MobileStickyCTA onOpenDiagnostic={handleOpenDiagnostic} />

      {/* Floating WhatsApp Action for Desktop/Tablet */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
