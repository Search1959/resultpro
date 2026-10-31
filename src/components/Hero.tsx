import React, { useState } from 'react';
import { ArrowRight, Eye, ShieldCheck, TrendingUp, Sparkles, ExternalLink, QrCode, X, ZoomIn } from 'lucide-react';
import { PortfolioQRCode } from './PortfolioQRCode';

interface HeroProps {
  onOpenProofModal: (mode?: 'apply' | 'message') => void;
  onOpenBlueprintModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenProofModal,
  onOpenBlueprintModal,
}) => {
  const [isPortfolioZoomed, setIsPortfolioZoomed] = useState(false);
  const portfolioUrl = 'https://deinrimapp.in/admin/index.php?p=websites';

  return (
    <section className="relative overflow-hidden bg-[#0A192F] text-white pt-3 sm:pt-4 pb-14 sm:pb-16 border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-slate-800/80 text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase">
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 100 100"
              className="w-4 h-4 shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M 12 28 L 62 28 L 22 88 L 6 88 L 42 38 L 12 38 Z" fill="#F59E0B" />
              <path d="M 68 36 L 86 88 L 70 88 L 56 46 Z" fill="#FFFFFF" />
            </svg>
            <span className="text-amber-400 font-bold">APEX7TECH</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300">GROWTH STRATEGY</span>
          </div>
          <div className="text-slate-400 font-normal tracking-normal lowercase first-letter:uppercase">
            Kolkata <span className="text-slate-600">·</span> 2026
          </div>
        </div>

        {/* 2-Part Split Hero Grid */}
        <div className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Part 1: Content Column */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Launch Phase: 3–5 Exclusive Proof Client Slots Open</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Results first.{' '}
              <span className="text-amber-400 block sm:inline">Recognition next.</span>
            </h1>

            <div className="mt-3 text-lg font-medium text-amber-300/90 font-serif italic">
              “पहले परिणाम, फिर पहचान”
            </div>

            <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Two marketing approaches, one decision: lead with performance, keep
              visibility lean, then scale on proof. Built on a foundation of 50+
              working applications and local enterprise software.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onOpenProofModal('apply')}
                className="px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-all shadow-md shadow-amber-950/30 flex items-center gap-2 group cursor-pointer"
              >
                <span>Apply as Proof Client</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onOpenProofModal('message')}
                className="px-4 py-3 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Send Message</span>
              </button>

              <button
                onClick={onOpenBlueprintModal}
                className="text-xs sm:text-sm font-medium text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 px-2 py-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-amber-400" />
                <span>Strategy Blueprint</span>
              </button>
            </div>

            {/* Quick KPI Strip */}
            <div className="mt-10 grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80">
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60">
                <div className="text-lg sm:text-xl font-bold text-amber-400 tabular-nums">50+</div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">Live Web Apps & Sites</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60">
                <div className="text-lg sm:text-xl font-bold text-emerald-400 tabular-nums">1 Real</div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">Metric Tracked</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60">
                <div className="text-lg sm:text-xl font-bold text-white tabular-nums">₹ Launch</div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">Partner Pricing</div>
              </div>
            </div>
          </div>

          {/* Part 2: Showcase Image & QR Code Column */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full relative group">
              {/* Outer decorative rim glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-sky-500/20 to-emerald-500/30 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-300" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-2xl flex flex-col">
                {/* Card Top Title Bar */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="font-bold text-slate-200">
                      Live Portfolio Showcase
                    </span>
                  </div>
                  <button
                    onClick={() => setIsPortfolioZoomed(true)}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1 text-[11px] cursor-pointer"
                    title="Click to view full image"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Zoom</span>
                  </button>
                </div>

                {/* Portfolio Showcase Graphic (image_d0eef9a4.png) */}
                <div
                  onClick={() => setIsPortfolioZoomed(true)}
                  className="relative cursor-pointer overflow-hidden bg-slate-900"
                >
                  <img
                    src="/assets/aistudio/image_d0eef9a4.png"
                    alt="Deinrim Solutionss (P) Ltd. Web App Development Portfolio - 50+ Web Apps & Websites"
                    className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/80 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-slate-700 flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                      <span>Click to enlarge preview</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Bar: QR Code to Visit Here + Direct Link */}
                <div className="p-3 sm:p-4 bg-slate-950/95 border-t border-slate-800 space-y-3">
                  {/* Generated Dynamic QR Code */}
                  <PortfolioQRCode url={portfolioUrl} />

                  {/* Direct Clickable Button to Visit Here */}
                  <a
                    href={portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>Visit 50+ Web App Portfolio</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400 px-1">
                <span>Backed by 50+ deployed client systems</span>
                <span className="text-amber-400 font-medium">Scan QR or tap to open</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Portfolio Image */}
      {isPortfolioZoomed && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col max-h-[92vh]">
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800 text-white">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-sm font-bold">50+ Web App & Website Portfolio</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <span>Open Live Directory</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setIsPortfolioZoomed(false)}
                  className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 overflow-auto flex items-center justify-center bg-slate-950">
              <img
                src="/assets/aistudio/image_d0eef9a4.png"
                alt="Web App Portfolio Showcase"
                className="max-h-[75vh] w-auto object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
