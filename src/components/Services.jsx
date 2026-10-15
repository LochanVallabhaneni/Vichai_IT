import { useState } from 'react';
import Reveal from './Reveal';
import Tabs from './Tabs';
import { SERVICES, INDUSTRIES } from '../data/content';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const service = SERVICES[activeIndex];

  return (
    <section id="services">
      <div className="container">
        <Reveal>
          <h2>Core SAP capabilities</h2>
          <p className="lead">
            From the data foundation to the applications and connections built on top of it, we cover your entire SAP
            landscape.
          </p>

          <Tabs
            tabs={SERVICES.map((item) => item.title)}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
            label="Service areas"
          />

          <div className="service-panel" role="tabpanel">
            <div>
              <h3>{service.title}</h3>
              <p className="muted">{service.summary}</p>
            </div>
            <ul className="check-list">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="industries">
            {INDUSTRIES.map(({ name, note }) => (
              <div key={name}>
                {name}
                <span>{note}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
