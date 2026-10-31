import React from 'react';
import { ShieldAlert } from 'lucide-react';

export const GoldenRule: React.FC = () => {
  return (
    <section className="py-12 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#0F1E36] text-white px-6 py-6 sm:py-7 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 whitespace-nowrap">
              ONE RULE
            </span>
            <p className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight">
              No new product until two existing products have paying clients.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-medium shrink-0 flex items-center gap-1.5 self-end md:self-auto">
            <span>Disciplined Execution</span>
            <span className="text-slate-600">·</span>
            <span className="text-amber-400">Zero Feature Bloat</span>
          </div>
        </div>
      </div>
    </section>
  );
};
