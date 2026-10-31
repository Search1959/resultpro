import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Download, ExternalLink, ShieldCheck } from 'lucide-react';

interface OriginalBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OriginalBlueprintModal: React.FC<OriginalBlueprintModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <div>
              <div className="text-sm font-bold text-slate-900">
                Official Strategy Blueprint (Kolkata · 2026)
              </div>
              <div className="text-xs text-slate-500">
                Original framework: Results first. Recognition next.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              title={isZoomed ? 'Zoom Out' : 'Zoom In'}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>
            <a
              href="/assets/aistudio/image_fc25ba66.png"
              download="Apex7tech-Growth-Strategy-2026.png"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              title="Download Graphic"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Display Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-900 flex items-center justify-center">
          <div
            className={`transition-all duration-300 max-w-full ${
              isZoomed ? 'scale-125 my-10' : 'scale-100'
            }`}
          >
            <img
              src="/assets/aistudio/image_fc25ba66.png"
              alt="Apex7tech Growth Strategy Blueprint"
              className="rounded-lg shadow-xl max-h-[70vh] w-auto object-contain mx-auto border border-slate-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Document version: 2026.1 Kolkata Operational Plan</span>
          </div>
          <div className="italic text-slate-500 font-serif">
            “जो बिकता है वो दिखता है” — Apex7tech
          </div>
        </div>
      </div>
    </div>
  );
};
