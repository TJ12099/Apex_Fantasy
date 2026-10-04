import { useId } from 'react';

const WAVES = [
  { d: 'M0 90 C 240 20, 480 160, 720 90 S 1200 20, 1440 90', width: 2.2, opacity: 0.95 },
  { d: 'M0 100 C 260 40, 470 170, 720 100 S 1180 30, 1440 100', width: 1.2, opacity: 0.6 },
  { d: 'M0 80 C 220 10, 500 150, 720 80 S 1220 10, 1440 80', width: 1, opacity: 0.45 },
  { d: 'M0 110 C 280 60, 460 150, 720 110 S 1160 50, 1440 110', width: 0.8, opacity: 0.35 },
];

export default function GlowWave() {
  const id = useId().replace(/:/g, '');

  return (
    <div className="glow-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`${id}-line`} x1="0" x2="1">
            <stop offset="0" stopColor="#3aa0ff" stopOpacity="0" />
            <stop offset="0.2" stopColor="#3aa0ff" />
            <stop offset="0.5" stopColor="#bfe3ff" />
            <stop offset="0.8" stopColor="#3aa0ff" />
            <stop offset="1" stopColor="#3aa0ff" stopOpacity="0" />
          </linearGradient>
          <filter id={`${id}-glow`} x="-5%" y="-50%" width="110%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter={`url(#${id}-glow)`}>
          {WAVES.map((wave) => (
            <path
              key={wave.d}
              d={wave.d}
              stroke={`url(#${id}-line)`}
              strokeWidth={wave.width}
              strokeOpacity={wave.opacity}
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
