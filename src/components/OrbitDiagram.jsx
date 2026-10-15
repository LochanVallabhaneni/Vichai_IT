// Hero illustration: a governed "clean core" with three capability areas orbiting it.
const CENTER = 200;

const ORBIT_NODES = [
  { x: 200, y: 50, label: 'MDG', sub: 'Data' },
  { x: 330, y: 275, label: 'BTP', sub: 'Apps' },
  { x: 70, y: 275, label: 'Integration', sub: 'Suite' },
];

function OrbitNode({ x, y, label, sub }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="orbit-node">
        <circle r="44" fill="var(--surf)" stroke="var(--ink)" strokeWidth="2" />
        <text y="-3" textAnchor="middle" fill="var(--ink)" fontSize={label.length > 6 ? 12 : 15} fontFamily="Sora" fontWeight="700">
          {label}
        </text>
        <text y="13" textAnchor="middle" fill="var(--mut)" fontSize="10">
          {sub}
        </text>
      </g>
    </g>
  );
}

export default function OrbitDiagram() {
  return (
    <div
      className="orbit"
      role="img"
      aria-label="Diagram: a governed digital core surrounded by data governance, application development and integration"
    >
      <svg viewBox="0 0 400 400">
        <circle cx={CENTER} cy={CENTER} r="185" fill="none" stroke="var(--line)" />
        <circle cx={CENTER} cy={CENTER} r="150" fill="none" stroke="var(--mut)" strokeDasharray="4 8" />
        <circle cx={CENTER} cy={CENTER} r="100" fill="none" stroke="var(--line)" />

        <g className="pulse">
          <circle cx={CENTER} cy={CENTER} r="66" fill="var(--blue)" opacity="0.25" />
        </g>
        <circle cx={CENTER} cy={CENTER} r="56" fill="var(--blue)" stroke="var(--blue)" strokeWidth="2" />
        <text x={CENTER} y="196" textAnchor="middle" fill="var(--bg)" fontFamily="Sora" fontWeight="700" fontSize="15">
          Clean
        </text>
        <text x={CENTER} y="214" textAnchor="middle" fill="var(--bg)" fontFamily="Sora" fontWeight="700" fontSize="15">
          core
        </text>

        <g className="orbit-ring">
          {ORBIT_NODES.map((node) => (
            <OrbitNode key={node.label} {...node} />
          ))}
        </g>
      </svg>
    </div>
  );
}
