import React, { useState } from 'react';
import {
  Download,
  Share2,
  Check,
  QrCode,
  Sparkles,
  Leaf,
  Phone,
  MessageCircle,
  MapPin,
  ExternalLink,
} from 'lucide-react';

interface BrandCardProps {
  onOpenProofModal?: (mode?: 'apply' | 'message') => void;
}

export const BrandCard: React.FC<BrandCardProps> = ({ onOpenProofModal }) => {
  const [copied, setCopied] = useState(false);
  const [activeCardView, setActiveCardView] = useState<'both' | 'brand' | 'contact'>('both');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="brand-card"
      className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sustainable Digital Transformation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Mission to digitalize systems for a{' '}
              <span className="text-emerald-400">greener tomorrow</span>.
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
              We replace paper records, slow manual workflows, and disconnected spreadsheets
              with fast, reliable digital infrastructure. Keep our two-sided executive pass
              or connect with us directly.
            </p>
          </div>

          {/* Quick View Controls for Mobile/Desktop */}
          <div className="flex items-center gap-1 p-1 bg-slate-800/80 rounded-lg shrink-0 border border-slate-700/80">
            <button
              onClick={() => setActiveCardView('both')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeCardView === 'both'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setActiveCardView('brand')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeCardView === 'brand'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Brand Pass
            </button>
            <button
              onClick={() => setActiveCardView('contact')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeCardView === 'contact'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Contact Pass
            </button>
          </div>
        </div>

        {/* 2 Cards Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Brand Pass (Front) */}
          {(activeCardView === 'both' || activeCardView === 'brand') && (
            <div className="flex flex-col justify-between group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-[#0A192F] transition-all duration-300 group-hover:border-amber-500/50 group-hover:shadow-amber-500/5">
                {/* Header Tag */}
                <div className="px-4 py-2.5 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="font-bold uppercase tracking-wider text-amber-400">
                      Brand Pass · Front
                    </span>
                  </div>
                  <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                    <QrCode className="w-3.5 h-3.5 text-amber-400" />
                    <span>Scan to Visit Web</span>
                  </div>
                </div>

                {/* Image */}
                <div className="p-2 sm:p-3 bg-[#0A192F]">
                  <img
                    src="/assets/aistudio/image_2978181a.png"
                    alt="Apex7tech Brand Card - Results First, Mission to digitalize systems for a greener tomorrow"
                    className="w-full h-auto object-cover rounded-xl block border border-slate-800/60"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Footer Details */}
                <div className="px-5 py-4 bg-slate-950/60 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-semibold">Mission:</span>
                    <span className="text-slate-300">Digital systems for a greener tomorrow</span>
                  </div>
                  <a
                    href="/assets/aistudio/image_2978181a.png"
                    download="Apex7tech-Brand-Card.png"
                    className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Save Card</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Card 2: Contact Pass (Beside) */}
          {(activeCardView === 'both' || activeCardView === 'contact') && (
            <div className="flex flex-col justify-between group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-white transition-all duration-300 group-hover:border-amber-500/50 group-hover:shadow-amber-500/5">
                {/* Header Tag */}
                <div className="px-4 py-2.5 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-bold uppercase tracking-wider text-emerald-400">
                      Contact Pass · Back
                    </span>
                  </div>
                  <div className="text-slate-300 text-[11px] flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Scan to WhatsApp Arun</span>
                  </div>
                </div>

                {/* Image */}
                <div className="p-2 sm:p-3 bg-white">
                  <img
                    src="/assets/aistudio/image_9cd43714.png"
                    alt="Arun Kumar Jaiswal - Web App Developer & Digital Marketing Professional, Apex7tech"
                    className="w-full h-auto object-cover rounded-xl block border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Footer Details */}
                <div className="px-5 py-4 bg-slate-950/60 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-semibold">Executive:</span>
                    <span className="text-white font-medium">Arun Kumar Jaiswal</span>
                  </div>
                  <a
                    href="/assets/aistudio/image_9cd43714.png"
                    download="Arun-Kumar-Jaiswal-Apex7tech-Card.png"
                    className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Save Card</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Strip: Direct Touchpoints for Kolkata Partners */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/919836130393?text=Hi%20Arun,%20I%20would%20like%20to%20discuss%20a%20project%20with%20Apex7tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs text-slate-400">WhatsApp Me</div>
                <div className="font-bold text-white tabular-nums">98361 30393</div>
              </div>
            </a>

            {/* Direct Phone */}
            <a
              href="tel:+917603064791"
              className="flex items-center gap-2.5 text-amber-400 hover:text-amber-300 transition-colors font-medium"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Direct Call</div>
                <div className="font-bold text-white tabular-nums">76030 64791</div>
              </div>
            </a>

            {/* Kolkata Location */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=27/3B+Jugal+Kishor+Das+Lane+Kolkata+700006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Registered Kolkata Office</div>
                <div className="text-xs font-medium text-slate-200">
                  27/3B Jugal Kishor Das Lane, Kolkata 700006
                </div>
              </div>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={handleCopyLink}
              className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-700/80 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Pass</span>
                </>
              )}
            </button>

            {onOpenProofModal && (
              <button
                onClick={() => onOpenProofModal('message')}
                className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                Send Message
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
