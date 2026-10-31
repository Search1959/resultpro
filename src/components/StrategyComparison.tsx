import React, { useState } from 'react';
import { Check, X, ArrowUpRight, HelpCircle } from 'lucide-react';

interface StrategyComparisonProps {
  onOpenProofModal: () => void;
}

export const StrategyComparison: React.FC<StrategyComparisonProps> = ({
  onOpenProofModal,
}) => {
  const [activeTab, setActiveTab] = useState<'side-by-side' | 'tradeoff'>(
    'side-by-side'
  );

  return (
    <section id="strategy" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              Decision Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Two Marketing Approaches. One Choice.
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Most agencies burn capital on vanity visibility before proving conversion.
              We reverse the sequence: generate undeniable proof, then amplify.
            </p>
          </div>

          {/* Interactive view toggle */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0 self-start md:self-auto border border-slate-200">
            <button
              onClick={() => setActiveTab('side-by-side')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeTab === 'side-by-side'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setActiveTab('tradeoff')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeTab === 'tradeoff'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Economics & Risk
            </button>
          </div>
        </div>

        {activeTab === 'side-by-side' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Card 1: Visibility-Driven */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-8 flex flex-col justify-between relative transition-all hover:border-slate-300">
              <div>
                <div className="text-xs font-bold tracking-wider uppercase text-slate-500 mb-3">
                  Strategy 1 · Visibility-Driven
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
                  “जो दिखता है वो बिकता है”
                </h3>
                <p className="text-sm font-normal text-slate-600 leading-relaxed">
                  Office, branding, big ads, social media. People see you first, then
                  think about you.
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200/80 space-y-3">
                  <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                    Typical Characteristics:
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>High upfront burn with unproven unit economics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>Impressions and vanity follower metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>High churn when product doesn’t match ad promises</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <span className="inline-block px-4 py-2 text-xs font-bold tracking-wider uppercase text-slate-700 bg-slate-200/80 rounded-md">
                  Keep the basics only
                </span>
                <p className="text-xs text-slate-500 mt-2">
                  Maintain clean presence, but do not over-invest here early on.
                </p>
              </div>
            </div>

            {/* Card 2: Performance-Driven (Highlight) */}
            <div className="rounded-2xl border-2 border-amber-500 bg-amber-500/[0.03] p-8 flex flex-col justify-between relative shadow-lg shadow-amber-500/5 transition-all">
              <div className="absolute -top-3.5 right-6 px-3 py-1 bg-amber-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider rounded-md shadow-sm">
                Apex7tech Mandate
              </div>

              <div>
                <div className="text-xs font-bold tracking-wider uppercase text-amber-600 mb-3">
                  Strategy 2 · Performance-Driven
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
                  “जो बिकता है वो दिखता है”
                </h3>
                <p className="text-sm font-normal text-slate-700 leading-relaxed">
                  Real clients, real results, testimonials, referrals. The product
                  succeeds first, then the brand grows.
                </p>

                <div className="mt-6 pt-6 border-t border-amber-200/60 space-y-3">
                  <div className="text-xs font-semibold text-amber-900 uppercase tracking-wide">
                    Apex7tech Execution Model:
                  </div>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span className="font-medium">
                        Tangible client revenue & customer acquisitions first
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>1-page case studies with verified data points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        Viral word-of-mouth & referral engines that outlast ads
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={onOpenProofModal}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-md transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Lead with this</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-amber-800/80 font-medium mt-2">
                  Recommended path: scale advertising spend only after client proof exists.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Economic & Risk Table View */
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase tracking-wider text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6 font-semibold">Strategic Dimension</th>
                  <th className="py-4 px-6 font-semibold text-slate-500">
                    Strategy 1: Visibility First
                  </th>
                  <th className="py-4 px-6 font-semibold text-amber-700 bg-amber-50/50">
                    Strategy 2: Performance First (Apex7tech)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">
                    Primary Philosophy
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    “जो दिखता है वो बिकता है” (Visual hype drives sales)
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-900 bg-amber-50/30">
                    “जो बिकता है वो दिखता है” (Proven results build real stature)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">
                    Capital Allocation
                  </td>
                  <td className="py-4 px-6 text-red-600/90 flex items-center gap-1.5">
                    <X className="w-4 h-4 shrink-0" />
                    <span>Heavy upfront: agency fees, giant billboards, broad ads</span>
                  </td>
                  <td className="py-4 px-6 text-emerald-700 font-medium bg-amber-50/30">
                    Lean baseline: website, local trust, performance proof
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">
                    Target Metric
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    Impressions, reach, likes, aesthetic awards
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-900 bg-amber-50/30">
                    Paying clients, revenue generated, verified reviews
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">
                    Timing of Paid Ads
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    Day 1 (before product-market fit or testimonials)
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-900 bg-amber-50/30">
                    Month 4+ (only after 3–5 proof clients & video testimonials)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">
                    Risk to Business
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    High risk of running out of runway before closing deals
                  </td>
                  <td className="py-4 px-6 font-medium text-emerald-700 bg-amber-50/30">
                    Zero-waste: deals self-fund subsequent marketing phases
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
