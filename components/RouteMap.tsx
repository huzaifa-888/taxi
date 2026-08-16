export default function RouteMap() {
  return (
    <svg
      viewBox="0 0 900 200"
      className="w-full h-auto"
      role="img"
      aria-label="Route diagram from Al Khobar, Saudi Arabia, across the King Fahd Causeway, to Manama, Bahrain"
    >
      <line
        x1="60"
        y1="110"
        x2="840"
        y2="110"
        stroke="var(--color-navy-soft)"
        strokeWidth="2"
      />
      <line
        x1="60"
        y1="110"
        x2="840"
        y2="110"
        stroke="var(--color-amber)"
        strokeWidth="2"
        className="route-dash"
      />

      {/* Origin */}
      <circle cx="60" cy="110" r="7" fill="var(--color-amber)" />
      <text
        x="60"
        y="80"
        textAnchor="middle"
        fill="var(--color-sand)"
        fontSize="18"
        fontFamily="var(--font-display)"
        fontWeight="600"
      >
        Al Khobar
      </text>
      <text
        x="60"
        y="145"
        textAnchor="middle"
        fill="var(--color-teal-light)"
        fontSize="12"
      >
        Saudi Arabia
      </text>

      {/* Midpoint - causeway */}
      <circle cx="450" cy="110" r="5" fill="var(--color-sand)" />
      <text
        x="450"
        y="45"
        textAnchor="middle"
        fill="var(--color-sand)"
        fontSize="14"
        fontFamily="var(--font-display)"
      >
        King Fahd Causeway
      </text>
      <text
        x="450"
        y="65"
        textAnchor="middle"
        fill="var(--color-teal-light)"
        fontSize="12"
      >
        border checkpoints
      </text>
      <text
        x="450"
        y="150"
        textAnchor="middle"
        fill="var(--color-amber-light)"
        fontSize="13"
        fontWeight="600"
      >
        45{"\u2013"}60 min {"\u00b7"} SAR 300
      </text>

      {/* Destination */}
      <circle cx="840" cy="110" r="7" fill="var(--color-amber)" />
      <text
        x="840"
        y="80"
        textAnchor="middle"
        fill="var(--color-sand)"
        fontSize="18"
        fontFamily="var(--font-display)"
        fontWeight="600"
      >
        Manama
      </text>
      <text
        x="840"
        y="145"
        textAnchor="middle"
        fill="var(--color-teal-light)"
        fontSize="12"
      >
        Bahrain
      </text>
    </svg>
  );
}
