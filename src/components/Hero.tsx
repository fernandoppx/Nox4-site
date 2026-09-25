import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Video, Upload, Check, RefreshCw, X } from 'lucide-react';

interface HeroProps {
  onOpenDiagnostic: () => void;
  onExploreHowItWorks: () => void;
}

const DB_NAME = 'nox4_assets';
const STORE_NAME = 'videos';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      req.result.createObjectStore(STORE_NAME);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveVideoBlob(blob: Blob) {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(blob, 'hero-video');
  } catch (err) {
    console.warn('Could not save video to IndexedDB:', err);
  }
}

async function loadVideoBlob(): Promise<Blob | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).get('hero-video');
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

async function clearVideoBlob() {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete('hero-video');
  } catch (err) {
    console.warn(err);
  }
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic, onExploreHowItWorks }) => {
  const [videoSrc, setVideoSrc] = useState<string>('/hero-bg.mp4');
  const [isCustomVideo, setIsCustomVideo] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showUploaderModal, setShowUploaderModal] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Try to load any previously saved custom video from IndexedDB
  useEffect(() => {
    let activeObjUrl: string | null = null;
    loadVideoBlob().then((blob) => {
      if (blob && blob.size > 0) {
        activeObjUrl = URL.createObjectURL(blob);
        setVideoSrc(activeObjUrl);
        setIsCustomVideo(true);
      }
    });

    return () => {
      if (activeObjUrl) {
        URL.revokeObjectURL(activeObjUrl);
      }
    };
  }, []);

  // Ensure autoplay on mount or when source changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Video autoplay prevented, ready to play on interaction:', err);
        });
      }
    }
  }, [videoSrc]);

  const handleApplyFile = async (file: File) => {
    if (!file || !file.type.startsWith('video/')) {
      showToast('Por favor selecione um arquivo de vídeo válido (.mp4, .webm)');
      return;
    }
    const newUrl = URL.createObjectURL(file);
    setVideoSrc(newUrl);
    setIsCustomVideo(true);
    await saveVideoBlob(file);
    showToast('Vídeo aplicado com sucesso!');
    setShowUploaderModal(false);
  };

  const handleResetDefault = async () => {
    await clearVideoBlob();
    setVideoSrc('/hero-bg.mp4');
    setIsCustomVideo(false);
    showToast('Vídeo padrão NOX4 restaurado!');
    setShowUploaderModal(false);
  };

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((curr) => (curr === msg ? null : curr));
    }, 4500);
  };

  // Drag and drop handlers on hero section
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      handleApplyFile(file);
    }
  };

  return (
    <section 
      id="hero" 
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-[#070A11]"
    >
      {/* ========================================================
          01. BACKGROUND VIDEO (FULLSCREEN, MUTED, LOOP, AUTOPLAY, OBJECT-FIT: COVER)
          ======================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
          aria-hidden="true"
          key={videoSrc}
          className="w-full h-full object-cover hero-video-zoom opacity-90 sm:opacity-95 transition-opacity duration-700"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* ========================================================
          02. CINEMATIC MULTI-LAYER OVERLAYS
          Calibrated to keep the dynamic video motion clearly visible
          while guaranteeing maximum typographic punch and readability.
          ======================================================== */}
      {/* Top & bottom edge transition blends */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A11]/65 via-transparent to-[#070A11]/90 pointer-events-none z-[1]" />

      {/* Radial overlay: soft focus behind typography, crystal clear on surroundings */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_48%,rgba(7,10,17,0.70)_0%,rgba(7,10,17,0.35)_55%,rgba(7,10,17,0.75)_100%)] pointer-events-none z-[2]" />

      {/* Subtle atmospheric blue glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[450px] bg-blue-600/20 blur-[140px] pointer-events-none rounded-full ambient-orb z-[2]" />

      {/* Ultra-subtle precision technical grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-[2]"
        style={{
          backgroundImage: `linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)`,
          backgroundSize: '54px 54px'
        }}
      />

      {/* Drag & drop visual overlay cue */}
      {isDragging && (
        <div className="absolute inset-0 z-30 bg-blue-950/80 backdrop-blur-md border-4 border-dashed border-blue-400 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-200">
          <Upload className="w-16 h-16 text-blue-400 mb-4 animate-bounce" />
          <h3 className="text-2xl font-bold text-white mb-2 font-montserrat">Solte seu arquivo de vídeo aqui</h3>
          <p className="text-blue-200 max-w-md text-sm">O vídeo será aplicado instantaneamente como plano de fundo em tela cheia do Hero da NOX4.</p>
        </div>
      )}

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-24 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/95 border border-blue-500/50 text-white text-xs sm:text-sm font-medium shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-300">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* ========================================================
          03. CENTERED HERO CONTENT (CLEAN, PROTAGONIST, NO RIGHT PANEL)
          Sequence:
          1. Identificador
          2. Headline Parte 1
          3. Headline Parte 2
          4. Subheadline
          5. CTAs
          ======================================================== */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center flex flex-col items-center">
        

        {/* Step 2 & 3: Main Headline with Sequential Stagger */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-black tracking-tight text-white leading-[1.1] uppercase font-montserrat max-w-4xl mx-auto">
          {/* Headline Part 1 */}
          <span className="block animate-hero-headline-1">
            Sua empresa não precisa <br className="hidden sm:inline" />de mais uma agência.
          </span>
          {/* Headline Part 2 */}
          <span className="block mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 animate-hero-headline-2">
            Precisa de um <br className="hidden sm:inline" />sistema de crescimento.
          </span>
        </h1>

        {/* Step 4: Subheadline */}
        <p className="animate-hero-sub mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md">
          A <strong className="text-white font-semibold">NOX4</strong> conecta estratégia, aquisição e vendas para transformar crescimento em processo.
        </p>

        {/* Step 5: Centered CTAs */}
        <div className="animate-hero-cta mt-8 sm:mt-10 w-full flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
            {/* CTA Principal - Dominant */}
            <button
              id="hero-cta-diagnostic"
              onClick={onOpenDiagnostic}
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_35px_rgba(37,99,235,0.45)] hover:shadow-[0_0_50px_rgba(56,189,248,0.65)] active:scale-[0.98] border border-blue-400/50 cursor-pointer group"
            >
              <span>Quero Meu Diagnóstico</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* CTA Secundário */}
            <button
              id="hero-cta-how"
              onClick={onExploreHowItWorks}
              className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-4 sm:py-4.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border border-slate-700/80 hover:border-slate-500 backdrop-blur-md cursor-pointer"
            >
              <span>Entender Como Funciona</span>
            </button>
          </div>

          {/* Supporting Microcopy */}
          <p className="mt-4 text-xs text-slate-300 font-medium tracking-wide flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_#60A5FA]" />
            Descubra onde sua empresa está perdendo oportunidades de crescimento.
          </p>
        </div>

      </div>

      {/* Hidden file input */}
      <input 
        type="file"
        ref={fileInputRef}
        accept="video/mp4,video/webm,video/quicktime"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleApplyFile(e.target.files[0]);
          }
        }}
      />

      {/* Video Customizer Modal */}
      {showUploaderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#0B1120] border border-slate-700 rounded-2xl p-6 sm:p-7 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-montserrat">Vídeo de Fundo do Hero</h3>
                  <p className="text-xs text-slate-400">Personalize o arquivo de vídeo reproduzido no topo</p>
                </div>
              </div>
              <button 
                type="button" 
                onClick={() => setShowUploaderModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4">
              {/* Option 1: File Upload */}
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="p-5 border-2 border-dashed border-slate-700 hover:border-blue-500/80 rounded-xl bg-slate-900/60 hover:bg-slate-900 transition-all cursor-pointer flex flex-col items-center justify-center text-center group"
              >
                <Upload className="w-8 h-8 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-semibold text-white">Carregar arquivo de vídeo (.mp4)</p>
                <p className="text-xs text-slate-400 mt-1">Selecione o arquivo do seu computador ou arraste para a tela</p>
              </div>

              {/* Status & Permanent deploy notice */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center justify-between font-semibold text-slate-200">
                  <span>Status atual:</span>
                  <span className={isCustomVideo ? "text-emerald-400" : "text-blue-400"}>
                    {isCustomVideo ? "Arquivo personalizado ativo" : "Vídeo padrão NOX4 ativo"}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  💡 <strong>Dica de Produção:</strong> Ao carregar o arquivo acima, ele é salvo localmente no seu navegador. Para torná-lo o vídeo definitivo para todos os visitantes do site, coloque seu arquivo em <code className="text-blue-300 font-mono">public/hero-bg.mp4</code>.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              {isCustomVideo ? (
                <button
                  type="button"
                  onClick={handleResetDefault}
                  className="inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Restaurar vídeo padrão</span>
                </button>
              ) : <div />}
              <button
                type="button"
                onClick={() => setShowUploaderModal(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          05. SCROLL HINT (ELEGANT BOTTOM NAVIGATION ANCHOR)
          ======================================================== */}
      <button 
        type="button"
        onClick={onExploreHowItWorks}
        aria-label="Rolar para entender como funciona"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer group"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase opacity-75 group-hover:opacity-100">Explorar</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-blue-400" />
      </button>
    </section>
  );
};
