const base = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function IconOrbit(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="24" r="4.5" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" transform="rotate(-60 24 24)" />
    </svg>
  );
}

export function IconSatellite(props) {
  return (
    <svg {...base} {...props}>
      <rect x="19" y="19" width="10" height="10" rx="1.5" transform="rotate(45 24 24)" />
      <path d="m12.5 12.5 5 5M30.5 30.5l5 5" />
      <rect x="4" y="6" width="12" height="7" transform="rotate(45 10 9.5)" />
      <rect x="32" y="34" width="12" height="7" transform="rotate(45 38 37.5)" />
      <path d="M31 17c2.5 0 4.5-2 4.5-4.5M33.5 20.5c4.4 0 8-3.6 8-8" />
    </svg>
  );
}

export function IconPlanet(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="24" r="17" />
      <path d="M11 15c4 1 5 4 9 4s4 5 1 7-2 6 1 8M29 8c-1 3 1 5 4 6s5 4 3 8-1 6 2 7M8 27c3-1 6 0 7 3" />
    </svg>
  );
}

export function IconCrew(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="16" r="6" />
      <path d="M12 38c1.5-7 6.2-10.5 12-10.5S34.5 31 36 38" />
      <circle cx="10" cy="20" r="4" />
      <circle cx="38" cy="20" r="4" />
      <path d="M3 34c1-4 3.5-6.5 7-6.5M45 34c-1-4-3.5-6.5-7-6.5" />
    </svg>
  );
}

export function IconTarget(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="24" r="17" />
      <circle cx="24" cy="24" r="10" />
      <circle cx="24" cy="24" r="3" />
      <path d="M24 3v6M24 39v6M3 24h6M39 24h6" />
    </svg>
  );
}

export function IconSignal(props) {
  return (
    <svg {...base} {...props}>
      <path d="M24 26v16M18 42h12" />
      <circle cx="24" cy="23" r="3" />
      <path d="M16.5 15.5a10.6 10.6 0 0 0 0 15M31.5 15.5a10.6 10.6 0 0 1 0 15M11 10a18.4 18.4 0 0 0 0 26M37 10a18.4 18.4 0 0 1 0 26" />
    </svg>
  );
}

export function IconArrow(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export const conceptIcons = [IconSatellite, IconOrbit, IconSignal];
