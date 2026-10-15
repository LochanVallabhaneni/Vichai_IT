import Reveal from './Reveal';
import { PLEDGE_PRINCIPLES, OUTCOMES } from '../data/content';

export default function Commitment() {
  return (
    <section id="commitment">
      <div className="container">
        <Reveal>
          <h2>The ViPledge: your success is our commitment</h2>

          <div className="pledge-grid">
            {PLEDGE_PRINCIPLES.map(({ title, paragraphs }) => (
              <article className="pledge-card" key={title}>
                <h3>{title}</h3>
                {paragraphs.map((text) => (
                  <p className="muted" key={text}>
                    {text}
                  </p>
                ))}
              </article>
            ))}
          </div>

          <div className="outcomes">
            <h3>What this means for you</h3>
            <div className="outcomes-grid">
              {OUTCOMES.map(({ title, text }) => (
                <div key={title}>
                  <b>{title}</b>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
