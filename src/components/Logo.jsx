const LIME = '#d9f55a';

export default function Logo({ size = 54 }) {
  return (
    <a className="logo" href="#top" aria-label="Vichai home">
      <svg className="logo-mark" style={{ height: size }} viewBox="0 0 200 230" role="img" aria-label="Vichai logo">
        <rect width="200" height="230" rx="14" fill="#363636" />
        <polygon
          points="100,28 176,72 176,158 100,202 24,158 24,72"
          fill="none"
          stroke={LIME}
          strokeWidth="8"
          strokeLinejoin="miter"
        />
        <text
          x="100"
          y="125"
          textAnchor="middle"
          fill={LIME}
          fontFamily="Sora, sans-serif"
          fontWeight="700"
          fontSize="27"
          textLength="94"
          lengthAdjust="spacingAndGlyphs"
        >
          VICHAI
        </text>
      </svg>
      <span className="logo-name">VICHAI</span>
    </a>
  );
}
