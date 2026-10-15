import { useState } from 'react';
import Reveal from './Reveal';
import Tabs from './Tabs';
import { ABOUT_TABS } from '../data/content';

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="about" className="section-flush">
      <div className="container">
        <Reveal>
          <div className="about-grid">
            <div>
              <h2>Who we are</h2>
              <p className="lead">Deep industry knowledge and elite technical expertise, working as one team.</p>
              <Tabs
                tabs={ABOUT_TABS.map((tab) => tab.title)}
                activeIndex={activeIndex}
                onChange={setActiveIndex}
                label="About Vichai"
              />
            </div>

            <div className="about-text" role="tabpanel">
              {ABOUT_TABS[activeIndex].paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
