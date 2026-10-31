import React from 'react';
import { ArrowRight, Eye, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenProofModal: () => void;
  onOpenBlueprintModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenProofModal,
  onOpenBlueprintModal,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#0A192F] text-white pt-16 pb-20 border-b border-slate-800">
      {/* Background subtle geometry */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker Bar exactly matching image */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-10 border-b border-slate-800/80 text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">APEX7TECH</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300">GROWTH STRATEGY</span>
          </div>
          <div className="text-slate-400 font-normal tracking-normal lowercase first-letter:uppercase">
            Kolkata <span className="text-slate-600">·</span> 2026
          </div>
        </div>

        {/* Hero Title & Value Proposition */}
        <div className="mt-12 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Launch Phase: 3–5 Exclusive Proof Client Slots Open</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight text-balance">
            Results first.{' '}
            <span className="text-amber-400 block sm:inline">Recognition next.</span>
          </h1>

          <div className="mt-3 text-lg font-medium text-amber-300/90 font-serif italic">
            “पहले परिणाम, फिर पहचान”
          </div>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl">
            Two marketing approaches, one decision: lead with performance, keep
            visibility lean, then scale on proof.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenProofModal}
              className="px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-all shadow-md shadow-amber-950/30 flex items-center gap-2 group cursor-pointer"
            >
              <span>Apply as Proof Client</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenBlueprintModal}
              className="px-5 py-3.5 text-sm sm:text-base font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              <span>Inspect Strategy Blueprint</span>
            </button>
          </div>
        </div>

        {/* 3 Pillars Quick Banner */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/70">
          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <TrendingUp className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-white">One Real Metric</div>
              <div className="text-xs text-slate-400 mt-0.5">
                Tracked & verified before spending on vanity ads
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-white">Lean Visibility Base</div>
              <div className="text-xs text-slate-400 mt-0.5">
                Fast web, local Google presence & real case studies
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              ₹
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Special Launch Pricing</div>
              <div className="text-xs text-slate-400 mt-0.5">
                Demo-to-deal incentive for early Kolkata partners
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
