export default function Tabs({ tabs, activeIndex, onChange, label }) {
  return (
    <div className="tabs" role="tablist" aria-label={label}>
      {tabs.map((title, index) => (
        <button
          key={title}
          type="button"
          role="tab"
          className="tab"
          aria-selected={activeIndex === index}
          onClick={() => onChange(index)}
        >
          {title}
        </button>
      ))}
    </div>
  );
}
