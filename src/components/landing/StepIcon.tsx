type Props = { name: "consult" | "design" | "build" | "test" | "launch"; size?: number };

export default function StepIcon({ name, size = 64 }: Props) {
  const id = `si-${name}`;
  const common = { width: size, height: size, viewBox: "0 0 64 64", fill: "none" as const };

  if (name === "consult")
    return (
      <svg {...common}>
        <defs>
          <linearGradient id={`${id}-a`} x1="10" y1="8" x2="54" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#1D3FD6" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="24" fill={`url(#${id}-a)`} />
        <circle cx="32" cy="32" r="24" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        <path d="M42 22 27 29l-5 13 15-7 5-13Z" fill="rgba(255,255,255,0.18)" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M32 8v4M32 52v4M8 32h4M52 32h4" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );

  if (name === "design")
    return (
      <svg {...common}>
        <defs>
          <linearGradient id={`${id}-a`} x1="32" y1="18" x2="32" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF8A00" />
            <stop offset="1" stopColor="#FF2D0E" />
          </linearGradient>
        </defs>
        <path d="M14 8c8 0 14 4 18 10 4-6 10-10 18-10" stroke="rgba(255,255,255,0.75)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="8" r="3.5" stroke="#fff" strokeWidth="2" />
        <circle cx="50" cy="8" r="3.5" stroke="#fff" strokeWidth="2" />
        <path d="M32 18l14 14v18a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V32l14-14Z" fill={`url(#${id}-a)`} />
        <path d="M32 54l-6-14h12l-6 14Z" fill={`url(#${id}-a)`} />
        <circle cx="32" cy="36" r="4" fill="#0A0A0C" />
      </svg>
    );

  if (name === "build")
    return (
      <svg {...common}>
        <defs>
          <linearGradient id={`${id}-a`} x1="12" y1="10" x2="52" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F8BFF" />
            <stop offset="1" stopColor="#1B39D9" />
          </linearGradient>
        </defs>
        <rect x="14" y="8" width="36" height="48" rx="5" fill={`url(#${id}-a)`} />
        <circle cx="21" cy="15" r="1.6" fill="rgba(255,255,255,0.8)" />
        <circle cx="26" cy="15" r="1.6" fill="rgba(255,255,255,0.55)" />
        <rect x="20" y="22" width="24" height="17" rx="3" fill="rgba(255,255,255,0.22)" stroke="#fff" strokeWidth="1.6" />
        <path d="m25 29 3 3-3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M31 35h6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M20 45h24M20 50h14" stroke="rgba(255,255,255,0.75)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );

  if (name === "test")
    return (
      <svg {...common}>
        <defs>
          <linearGradient id={`${id}-a`} x1="8" y1="10" x2="46" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F8BFF" />
            <stop offset="1" stopColor="#1B39D9" />
          </linearGradient>
          <linearGradient id={`${id}-b`} x1="34" y1="30" x2="58" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF9A2E" />
            <stop offset="1" stopColor="#FF3B0F" />
          </linearGradient>
        </defs>
        <rect x="8" y="10" width="38" height="30" rx="4" fill={`url(#${id}-a)`} />
        <path d="M20 46h14M27 40v6" stroke="rgba(255,255,255,0.75)" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="40" cy="40" r="12" fill="rgba(10,10,12,0.85)" stroke="#fff" strokeWidth="2" />
        <path d="m49 49 7 7" stroke={`url(#${id}-b)`} strokeWidth="5" strokeLinecap="round" />
        <path d="m35 40 4 4 7-8" stroke={`url(#${id}-b)`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );

  return (
    <svg {...common}>
      <defs>
        <linearGradient id={`${id}-a`} x1="32" y1="4" x2="32" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB020" />
          <stop offset="1" stopColor="#FF2E0B" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="32" y1="46" x2="32" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7A18" />
          <stop offset="1" stopColor="#FF2E0B" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M32 4c8 7 12 16 12 26v14H20V30C20 20 24 11 32 4Z" fill={`url(#${id}-a)`} />
      <path d="M20 30 12 40v8l8-6V30ZM44 30l8 10v8l-8-6V30Z" fill={`url(#${id}-a)`} />
      <circle cx="32" cy="24" r="5" fill="#0A0A0C" />
      <path d="M27 48h10l-5 12-5-12Z" fill={`url(#${id}-b)`} />
    </svg>
  );
}
