import React from 'react';
import { Layout, Smartphone, TrendingUp, Check, ArrowRight } from 'lucide-react';

interface ServicesOverviewProps {
  onOpenProofModal: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onOpenProofModal,
}) => {
  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for conversion, not vanity
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We don’t sell hours or vague brand retainers. Every engagement is tied to
            a single, tangible business milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Web */}
          <div className="rounded-xl p-7 border border-slate-200 bg-slate-50/50 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-5 shadow-xs">
                <Layout className="w-6 h-6 text-amber-500" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Domain 01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Web Development
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Clean, blazing-fast landing pages and websites engineered specifically
                to convert local searchers into booked calls and paid inquiries.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Sub-second page load speeds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Direct WhatsApp / Call lead triggers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Integrated case-study proof engine</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200">
              <div className="text-xs font-semibold text-slate-500">Target Outcome:</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">
                Qualified inbound inquiries within 14 days of launch
              </div>
            </div>
          </div>

          {/* Service 2: Apps */}
          <div className="rounded-xl p-7 border border-slate-200 bg-slate-50/50 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-5 shadow-xs">
                <Smartphone className="w-6 h-6 text-amber-500" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Domain 02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Custom Web & Mobile Apps
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Lightweight workflow software, client portals, and booking engines
                that replace manual paper registers and chaotic spreadsheets.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Zero bloat: only features your team needs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Works seamlessly on mobile & desktop</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Real-time client tracking & notification</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200">
              <div className="text-xs font-semibold text-slate-500">Target Outcome:</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">
                50%+ reduction in manual operational coordination hours
              </div>
            </div>
          </div>

          {/* Service 3: Digital Marketing */}
          <div className="rounded-xl p-7 border border-slate-200 bg-slate-50/50 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-5 shadow-xs">
                <TrendingUp className="w-6 h-6 text-amber-500" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Domain 03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Digital Marketing & SEO
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Hyper-focused local search visibility, Google Business optimization,
                and paid ad funnels built solely upon proven customer case studies.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Kolkata & regional local SEO domination</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Review collection & referral loop systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Zero paid spend until proof is documented</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200">
              <div className="text-xs font-semibold text-slate-500">Target Outcome:</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">
                Top 3 Google Maps rank & predictable referral flow
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenProofModal}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <span>Discuss your project with Apex7tech</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
