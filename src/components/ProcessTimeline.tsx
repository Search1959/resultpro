import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Calendar, Target, Video, Megaphone } from 'lucide-react';

interface ProcessTimelineProps {
  onOpenProofModal: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  onOpenProofModal,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="process" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              Execution Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The process
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Three disciplined phases that convert initial products into proven market demand.
              Currently executing Phase 1 with launch partners.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
            Status: <span className="text-emerald-600 font-bold">Phase 1 In Progress</span>
          </div>
        </div>

        {/* 3 Process Cards Grid (faithfully reproducing the image layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Step 1: 0-3 Months */}
          <div
            onClick={() => setActiveStep(1)}
            className={`rounded-2xl p-7 border transition-all flex flex-col justify-between cursor-pointer ${
              activeStep === 1
                ? 'border-slate-900 bg-slate-50/80 shadow-md ring-2 ring-slate-900/10'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-slate-950 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  1
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  0–3 MONTHS
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-4">
                Win 3–5 proof clients
              </h3>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-900 font-bold text-base leading-none">•</span>
                  <span>Focus on 2 products only</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-900 font-bold text-base leading-none">•</span>
                  <span>Turn free demo pages into paid deals at a launch price</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-900 font-bold text-base leading-none">•</span>
                  <span>Track one real number per client</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/80">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                <Target className="w-3.5 h-3.5" />
                Current Active Window
              </span>
            </div>
          </div>

          {/* Step 2: 2-4 Months */}
          <div
            onClick={() => setActiveStep(2)}
            className={`rounded-2xl p-7 border transition-all flex flex-col justify-between cursor-pointer ${
              activeStep === 2
                ? 'border-slate-900 bg-slate-50/80 shadow-md ring-2 ring-slate-900/10'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-slate-950 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  2
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  2–4 MONTHS
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-4">
                Turn results into proof
              </h3>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-900 font-bold text-base leading-none">•</span>
                  <span>Video testimonials + Google reviews</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-900 font-bold text-base leading-none">•</span>
                  <span>1-page case study per client on the website</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-900 font-bold text-base leading-none">•</span>
                  <span>Ask each happy client for 2 referrals</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/80">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                <Video className="w-3.5 h-3.5" />
                Evidence Production
              </span>
            </div>
          </div>

          {/* Step 3: Month 4 Onwards (Amber highlighted in infographic) */}
          <div
            onClick={() => setActiveStep(3)}
            className={`rounded-2xl p-7 border-2 border-amber-500 bg-amber-500/[0.02] transition-all flex flex-col justify-between cursor-pointer shadow-sm ${
              activeStep === 3
                ? 'ring-2 ring-amber-500/20 shadow-md'
                : 'hover:border-amber-600'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold text-sm flex items-center justify-center shrink-0">
                  3
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  MONTH 4 ONWARDS
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-4">
                Amplify the proof
              </h3>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold text-base leading-none">•</span>
                  <span>Meta & Google Ads built on case studies</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold text-base leading-none">•</span>
                  <span>Trade bodies & CII events with real stories</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold text-base leading-none">•</span>
                  <span>Then invest in office, branding, wider ads</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-amber-200/80">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-md">
                <Megaphone className="w-3.5 h-3.5 text-amber-700" />
                Scale on Real Numbers
              </span>
            </div>
          </div>
        </div>

        {/* Action Callout inside process */}
        <div className="mt-12 p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-slate-900">
              Want to be one of the 3–5 proof clients in Phase 1?
            </div>
            <div className="text-xs text-slate-600 mt-0.5">
              Launch deal pricing in exchange for 1 measurable business goal & a 1-page case study.
            </div>
          </div>
          <button
            onClick={onOpenProofModal}
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Claim Launch Slot
          </button>
        </div>
      </div>
    </section>
  );
};
