import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light', // light text for dark backgrounds (default)
  showTagline = true,
}) => {
  const isDarkText = variant === 'dark';

  // Sizing definitions
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const subtextSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[11px] tracking-[0.25em]',
    lg: 'text-[13px] tracking-[0.3em]',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Precision Vector reproduction of the Apex 7 icon:
          Left bar: Amber '7' angled arm
          Right bar: Clean slant arm completing the Apex 'A' */}
      <svg
        viewBox="0 0 100 100"
        className={`${iconSizes[size]} shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left stroke: Stylized Amber '7' */}
        <path
          d="M 12 28 L 62 28 L 22 88 L 6 88 L 42 38 L 12 38 Z"
          fill="#F59E0B"
        />
        {/* Right stroke: Clean White/Slate diagonal completing the Apex (A) shape */}
        <path
          d="M 68 36 L 86 88 L 70 88 L 56 46 Z"
          fill={isDarkText ? '#0F172A' : '#FFFFFF'}
        />
      </svg>

      {/* Brand Text Lockup */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-black tracking-tight ${textSizes[size]} ${
            isDarkText ? 'text-slate-950' : 'text-white'
          }`}
        >
          apex<span className="text-amber-500">7</span>tech
        </span>
        {showTagline && (
          <span
            className={`font-semibold uppercase mt-0.5 ${subtextSizes[size]} ${
              isDarkText ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            RESULTS FIRST
          </span>
        )}
      </div>
    </div>
  );
};
