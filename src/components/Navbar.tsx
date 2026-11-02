import React from 'react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenProofModal: (mode?: 'apply' | 'message') => void;
  onOpenBlueprintModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenProofModal,
  onOpenBlueprintModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Official Brand Logo with Chevron Mark */}
        <a
          href="#"
          className="whitespace-nowrap shrink-0 hover:opacity-95 transition-opacity"
          aria-label="Apex7tech Home"
        >
          <Logo size="sm" showTagline={false} />
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#strategy"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Strategy
          </a>
          <a
            href="#flagship-products"
            className="hover:text-amber-400 font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            Products
          </a>
          <a
            href="#philosophy"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Philosophy
          </a>
          <a
            href="#process"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Process
          </a>
          <a
            href="#services"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Services
          </a>
          <a
            href="#brand-card"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Digital Pass
          </a>
          <button
            onClick={() => onOpenProofModal('message')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            Send Message
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenProofModal('apply')}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-amber-950/20 cursor-pointer"
          >
            Apply as Proof Client
          </button>
        </div>
      </div>
    </header>
  );
};
