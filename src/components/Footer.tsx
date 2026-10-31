import React from 'react';

interface FooterProps {
  onOpenBlueprintModal: () => void;
  onOpenProofModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBlueprintModal,
  onOpenProofModal,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800">
          <div>
            <div className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              Apex7tech
            </div>
            <div className="mt-1 text-sm text-slate-400 flex items-center gap-2">
              <span>Web</span>
              <span className="text-slate-600">·</span>
              <span>Apps</span>
              <span className="text-slate-600">·</span>
              <span>Digital Marketing</span>
            </div>
            <div className="mt-2 text-xs text-amber-400 font-serif italic text-base">
              पहले परिणाम, फिर पहचान
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#strategy" className="hover:text-white transition-colors">
              Strategy
            </a>
            <a href="#philosophy" className="hover:text-white transition-colors">
              Philosophy
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Process
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <button
              onClick={onOpenBlueprintModal}
              className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              View Blueprint Graphic
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Apex7tech. Kolkata, West Bengal, India. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Operating on: <strong className="text-white font-medium">Results First, Recognition Next</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
