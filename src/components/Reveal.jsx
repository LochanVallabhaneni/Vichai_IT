import useReveal from '../hooks/useReveal';

export default function Reveal({ delay = 0, children }) {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
