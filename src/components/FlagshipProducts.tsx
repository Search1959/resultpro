import React, { useState } from 'react';
import { ExternalLink, MessageCircle, ZoomIn, X, Sparkles, Store, Smartphone, Check } from 'lucide-react';

interface FlagshipProductsProps {
  onOpenProofModal?: (mode?: 'apply' | 'message') => void;
}

export const FlagshipProducts: React.FC<FlagshipProductsProps> = ({ onOpenProofModal }) => {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; title: string } | null>(null);

  const product1 = {
    title: 'Free Website & ₹7,000 Online Shop for Local Businesses',
    badge: 'Flagship Product 01',
    category: 'Retail & Google Maps Growth',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_4.27.20_PM_cdd56a05.jpeg',
    tagline: 'আপনার দোকানের ফ্রি ওয়েবসাইট! / आपकी दुकान की फ्री वेबसाइट',
    highlights: [
      'Free website attached directly to Google Maps profile',
      'Full eCommerce store + admin panel for only ₹7,000',
      'Accept UPI, Cards, and Cash on Delivery with no commission',
      'Free Domain + Hosting included for 1st year',
    ],
    whatsappText: 'POSTER',
    link: 'https://deinrimapp.in/yourshop',
  };

  const product2 = {
    title: 'TradePOSX: Smart Mobile POS, GST & Google Reviews',
    badge: 'Flagship Product 02',
    category: 'Mobile ERP & Counter Automation',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-22_at_9.11.42_PM_49257317.jpeg',
    tagline: 'Bill Faster. Collect Dues. Grow Your Shop. (फोन से ही बिल बनाएं)',
    highlights: [
      'Bill directly from smartphone — zero costly POS machines needed',
      'Automatic Google Review booster links on customer WhatsApp bills',
      'Complete Udhaar ledger with one-tap payment reminders',
      'GST invoices, stock inventory, and multi-language voice billing',
    ],
    demoLink: 'https://tradeposx.com',
  };

  return (
    <section id="flagship-products" className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Product Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 2 Flagship Solutions in the Market
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              In line with our growth strategy — <span className="font-semibold text-slate-900">“Focus on 2 products only”</span> — here
              are the two battle-tested products actively generating revenue and results for local shop and enterprise owners.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-2xs shrink-0">
            Rule Compliance: <span className="text-emerald-600 font-bold">2 Proven Products Only</span>
          </div>
        </div>

        {/* Both Images Side by Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Product Card 1: Shop Website Poster */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between group hover:border-amber-400 transition-all">
            <div>
              {/* Header Strip */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Store className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {product1.badge}
                  </span>
                </div>
                <span className="text-[11px] text-slate-300 font-medium">
                  {product1.category}
                </span>
              </div>

              {/* Poster Image (Side-by-Side Left) */}
              <div
                onClick={() => setZoomedImage({ src: product1.image, title: product1.title })}
                className="relative bg-slate-950 cursor-pointer overflow-hidden group/img aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center p-2"
              >
                <img
                  src={product1.image}
                  alt={product1.title}
                  className="w-full h-full object-contain block group-hover/img:scale-[1.02] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover/img:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-slate-950/85 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-slate-700 flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                    <span>Click to view full poster</span>
                  </span>
                </div>
              </div>

              {/* Product Info & Highlights */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {product1.title}
                </h3>
                <div className="text-xs font-semibold text-amber-700 mb-4">
                  {product1.tagline}
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {product1.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/919836130393?text=POSTER`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp “POSTER” to 98361 30393</span>
              </a>

              <button
                onClick={() => setZoomedImage({ src: product1.image, title: product1.title })}
                className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Enlarge</span>
              </button>
            </div>
          </div>

          {/* Product Card 2: TradePOSX Poster */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between group hover:border-amber-400 transition-all">
            <div>
              {/* Header Strip */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {product2.badge}
                  </span>
                </div>
                <span className="text-[11px] text-slate-300 font-medium">
                  {product2.category}
                </span>
              </div>

              {/* Poster Image (Side-by-Side Right) */}
              <div
                onClick={() => setZoomedImage({ src: product2.image, title: product2.title })}
                className="relative bg-slate-950 cursor-pointer overflow-hidden group/img aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center p-2"
              >
                <img
                  src={product2.image}
                  alt={product2.title}
                  className="w-full h-full object-contain block group-hover/img:scale-[1.02] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover/img:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-slate-950/85 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-slate-700 flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                    <span>Click to view full poster</span>
                  </span>
                </div>
              </div>

              {/* Product Info & Highlights */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {product2.title}
                </h3>
                <div className="text-xs font-semibold text-amber-700 mb-4">
                  {product2.tagline}
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {product2.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex flex-wrap items-center gap-3">
              <a
                href={product2.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Try Free Demo → tradeposx.com</span>
              </a>

              <a
                href="https://wa.me/919836130393?text=Hi%20Arun,%20I%20want%20a%20demo%20of%20TradePOSX"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => setZoomedImage({ src: product2.image, title: product2.title })}
                className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Enlarge</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Poster Inspection */}
      {zoomedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col max-h-[95vh]">
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800 text-white">
              <div className="flex items-center gap-2 truncate pr-4">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                <span className="text-sm font-bold truncate">{zoomedImage.title}</span>
              </div>
              <button
                onClick={() => setZoomedImage(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 overflow-auto flex items-center justify-center bg-slate-950 flex-1">
              <img
                src={zoomedImage.src}
                alt={zoomedImage.title}
                className="max-h-[82vh] w-auto object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
