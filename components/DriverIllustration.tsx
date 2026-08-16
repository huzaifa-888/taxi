export default function DriverIllustration() {
  return (
    <svg
      viewBox="0 0 600 480"
      className="w-full h-full min-h-[320px]"
      role="img"
      aria-label="Illustration of a chauffeur-driven SUV in front of a city skyline"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-navy)" />
          <stop offset="100%" stopColor="var(--color-navy-soft)" />
        </linearGradient>
      </defs>
      <rect width="600" height="480" fill="url(#skyGrad)" />

      {/* skyline */}
      <g opacity="0.55" fill="var(--color-navy-light)">
        <rect x="30" y="220" width="46" height="180" />
        <rect x="90" y="180" width="34" height="220" />
        <rect x="140" y="240" width="50" height="160" />
        <rect x="430" y="200" width="40" height="200" />
        <rect x="480" y="160" width="30" height="240" />
        <rect x="520" y="230" width="46" height="170" />
        <polygon points="250,400 250,140 260,110 270,140 270,400" />
      </g>

      {/* road */}
      <rect x="0" y="400" width="600" height="80" fill="var(--color-navy)" />
      <line x1="0" y1="400" x2="600" y2="400" stroke="var(--color-navy-light)" strokeWidth="2" />
      <line
        x1="0"
        y1="440"
        x2="600"
        y2="440"
        stroke="var(--color-amber-light)"
        strokeWidth="3"
        strokeDasharray="20 16"
      />

      {/* car body */}
      <g>
        <rect x="150" y="330" width="300" height="70" rx="18" fill="var(--color-sand)" />
        <path
          d="M195 330 L225 285 Q235 275 250 275 L360 275 Q375 275 385 285 L405 330 Z"
          fill="var(--color-sand)"
        />
        <path
          d="M235 325 L255 292 Q260 285 270 285 L345 285 Q355 285 360 292 L372 325 Z"
          fill="var(--color-navy)"
          opacity="0.85"
        />
        <line x1="300" y1="285" x2="300" y2="325" stroke="var(--color-sand)" strokeWidth="3" />

        {/* checker accent */}
        <rect x="150" y="352" width="14" height="14" fill="var(--color-amber-light)" />
        <rect x="164" y="366" width="14" height="14" fill="var(--color-amber-light)" />
        <rect x="150" y="380" width="14" height="14" fill="var(--color-amber-light)" />

        {/* wheels */}
        <circle cx="215" cy="402" r="26" fill="var(--color-navy-light)" />
        <circle cx="215" cy="402" r="11" fill="var(--color-sand)" />
        <circle cx="385" cy="402" r="26" fill="var(--color-navy-light)" />
        <circle cx="385" cy="402" r="11" fill="var(--color-sand)" />
      </g>

      {/* driver figure at open door */}
      <g>
        <circle cx="460" cy="300" r="14" fill="var(--color-sand)" />
        <rect x="447" y="316" width="26" height="55" rx="10" fill="var(--color-sand)" />
        <rect x="447" y="368" width="10" height="35" rx="4" fill="var(--color-navy-light)" />
        <rect x="463" y="368" width="10" height="35" rx="4" fill="var(--color-navy-light)" />
      </g>
    </svg>
  );
}
