import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { QrCode, ExternalLink, Sparkles } from 'lucide-react';

interface PortfolioQRCodeProps {
  url: string;
  size?: number;
  className?: string;
}

export const PortfolioQRCode: React.FC<PortfolioQRCodeProps> = ({
  url,
  size = 120,
  className = '',
}) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  useEffect(() => {
    QRCode.toDataURL(url, {
      width: size * 2,
      margin: 1,
      color: {
        dark: '#0A192F',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'M',
    })
      .then((dataUrl) => {
        setQrDataUrl(dataUrl);
      })
      .catch((err) => {
        console.error('Failed to generate QR code', err);
      });
  }, [url, size]);

  return (
    <div className={`flex items-center gap-3.5 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700/80 shadow-lg ${className}`}>
      {/* QR Code Container */}
      <div className="bg-white p-1.5 rounded-lg shrink-0 shadow-inner">
        {qrDataUrl ? (
          <img
            src={qrDataUrl}
            alt="Scan QR code to visit portfolio"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain block"
          />
        ) : (
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-100 flex items-center justify-center animate-pulse">
            <QrCode className="w-6 h-6 text-slate-400" />
          </div>
        )}
      </div>

      {/* Action / Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-0.5">
          <Sparkles className="w-3 h-3" />
          <span>Scan to Visit Here</span>
        </div>
        <div className="text-xs font-semibold text-white truncate">
          50+ Live Web Apps
        </div>
        <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
          Point mobile camera to browse live portfolio
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 hover:text-amber-200 transition-colors"
        >
          <span>Open Portfolio Link</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
