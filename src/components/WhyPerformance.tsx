import React, { useState } from 'react';
import { Square, CheckSquare, Sparkles, Building2, Globe, Share2, Award } from 'lucide-react';

export const WhyPerformance: React.FC = () => {
  // Interactive checklist for minimum visibility baseline
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    website: true,
    googleProfile: true,
    linkedin: false,
    consistentBranding: true,
  });

  const toggleCheck = (id: string) => {
    setChecklist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;

  return (
    <section id="philosophy" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            The Rationale
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why performance first, now
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A practical assessment of where real enterprise value is created in the Kolkata market and beyond.
          </p>
        </div>

        {/* 4 Pillars Grid (matching the amber square bullet points from the image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Pillar 1 */}
          <div className="flex items-start gap-3.5 p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-amber-300 transition-colors">
            <div className="w-3.5 h-3.5 rounded-sm bg-amber-500 shrink-0 mt-1.5" />
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                New brand.
              </h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Apex7tech replaces the old name, so early proof matters more than reach.
                Nobody trusts a rebrand just because it bought billboard space.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex items-start gap-3.5 p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-amber-300 transition-colors">
            <div className="w-3.5 h-3.5 rounded-sm bg-amber-500 shrink-0 mt-1.5" />
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Products are ready.
              </h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                The gap is paying clients and results, not more visibility. Engineering
                and deployment systems are live; execution is the missing link.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex items-start gap-3.5 p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-amber-300 transition-colors">
            <div className="w-3.5 h-3.5 rounded-sm bg-amber-500 shrink-0 mt-1.5" />
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Local buyers trust word of mouth.
              </h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                In Kolkata and regional enterprise corridors, buyer trust stems from
                peer recommendations and proven case numbers, far more than a flashy
                office or high-cost ad campaigns.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="flex items-start gap-3.5 p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-amber-300 transition-colors">
            <div className="w-3.5 h-3.5 rounded-sm bg-amber-500 shrink-0 mt-1.5" />
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Visibility costs upfront.
              </h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Visibility burns capital immediately and only pays back once there is
                rock-solid operational proof and client testimonials behind it.
              </p>
            </div>
          </div>
        </div>

        {/* Minimum Visibility To Keep Banner (from the infographic) */}
        <div className="rounded-xl bg-slate-900 text-white p-7 sm:p-8 border border-slate-800 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                Strategic Standard
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Minimum visibility to keep
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                The lean, non-negotiable footprint needed before investing in paid media.
              </p>
            </div>

            {/* Interactive Progress Indicator */}
            <div className="bg-slate-800/80 px-4 py-2.5 rounded-lg border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 flex items-center gap-3 shrink-0">
              <span>Foundation Score:</span>
              <span className="font-bold text-amber-400 tabular-nums text-base">
                {completedCount} / 4 Active
              </span>
            </div>
          </div>

          {/* Interactive 4 Checklist Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {/* Item 1 */}
            <button
              onClick={() => toggleCheck('website')}
              className={`p-4 rounded-lg text-left transition-all border cursor-pointer ${
                checklist.website
                  ? 'bg-amber-500/10 border-amber-500/40 text-white'
                  : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Globe className="w-5 h-5 text-amber-400" />
                {checklist.website ? (
                  <CheckSquare className="w-4 h-4 text-amber-400" />
                ) : (
                  <Square className="w-4 h-4 text-slate-500" />
                )}
              </div>
              <div className="text-sm font-semibold text-white">Clean Website</div>
              <div className="text-xs text-slate-300 mt-1">
                Featuring real projects, verified metrics, zero fluff
              </div>
            </button>

            {/* Item 2 */}
            <button
              onClick={() => toggleCheck('googleProfile')}
              className={`p-4 rounded-lg text-left transition-all border cursor-pointer ${
                checklist.googleProfile
                  ? 'bg-amber-500/10 border-amber-500/40 text-white'
                  : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Building2 className="w-5 h-5 text-amber-400" />
                {checklist.googleProfile ? (
                  <CheckSquare className="w-4 h-4 text-amber-400" />
                ) : (
                  <Square className="w-4 h-4 text-slate-500" />
                )}
              </div>
              <div className="text-sm font-semibold text-white">Google Business Profile</div>
              <div className="text-xs text-slate-300 mt-1">
                Verified address in Kolkata with genuine reviews
              </div>
            </button>

            {/* Item 3 */}
            <button
              onClick={() => toggleCheck('linkedin')}
              className={`p-4 rounded-lg text-left transition-all border cursor-pointer ${
                checklist.linkedin
                  ? 'bg-amber-500/10 border-amber-500/40 text-white'
                  : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Share2 className="w-5 h-5 text-amber-400" />
                {checklist.linkedin ? (
                  <CheckSquare className="w-4 h-4 text-amber-400" />
                ) : (
                  <Square className="w-4 h-4 text-slate-500" />
                )}
              </div>
              <div className="text-sm font-semibold text-white">LinkedIn + 1 Active Social</div>
              <div className="text-xs text-slate-300 mt-1">
                Consistent updates on client breakthroughs
              </div>
            </button>

            {/* Item 4 */}
            <button
              onClick={() => toggleCheck('consistentBranding')}
              className={`p-4 rounded-lg text-left transition-all border cursor-pointer ${
                checklist.consistentBranding
                  ? 'bg-amber-500/10 border-amber-500/40 text-white'
                  : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Award className="w-5 h-5 text-amber-400" />
                {checklist.consistentBranding ? (
                  <CheckSquare className="w-4 h-4 text-amber-400" />
                ) : (
                  <Square className="w-4 h-4 text-slate-500" />
                )}
              </div>
              <div className="text-sm font-semibold text-white">Consistent Name & Logo</div>
              <div className="text-xs text-slate-300 mt-1">
                Uniform brand identity across every touchpoint
              </div>
              <a
                href="#brand-card"
                onClick={(e) => e.stopPropagation()}
                className="inline-block mt-2 text-[11px] text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2"
              >
                View official brand card ↓
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
