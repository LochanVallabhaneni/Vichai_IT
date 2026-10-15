import Reveal from './Reveal';
import AdminConsole from './AdminConsole';
import { PROGOV_CAPABILITIES, PROGOV_BENEFITS } from '../data/content';

function FeatureList({ title, items }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul className="check-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Product() {
  return (
    <section id="product" className="product">
      <div className="container product-grid">
        <Reveal>
          <h2>Meet Progov</h2>
          <p className="lead">
            Our workflow product for optimizing, tracking, and governing business processes across your organization.
          </p>

          <div className="feature-columns">
            <FeatureList title="Key capabilities" items={PROGOV_CAPABILITIES} />
            <FeatureList title="Key benefits" items={PROGOV_BENEFITS} />
          </div>

          <div className="tech-note">
            <h4>Our technology</h4>
            <p>Built on SAP S/4HANA, cloud and on-premise, leveraging native SAP technologies.</p>
          </div>

          <div className="button-row">
            <a className="btn btn-primary" href="#contact">
              Try a demo
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <AdminConsole />
        </Reveal>
      </div>
    </section>
  );
}
