import OrbitDiagram from './OrbitDiagram';
import { HERO_TAGS } from '../data/content';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <h1>Empowering growth with governance</h1>
          <p className="lead">Your one-stop shop for end-to-end SAP excellence.</p>

          <div className="button-row">
            <a className="btn btn-primary" href="#services">
              Explore our services
            </a>
            <a className="btn btn-ghost" href="#contact">
              Schedule a consultation
            </a>
          </div>

          <ul className="tag-list">
            {HERO_TAGS.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <OrbitDiagram />
      </div>
    </header>
  );
}
