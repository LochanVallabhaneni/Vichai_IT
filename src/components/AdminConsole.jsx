import { Fragment } from 'react';

// Decorative mock-up of the Progov admin console (no real data).
const FLOW_STEPS = ['Request', 'Review', 'Approve', 'Complete'];
const ACTIVE_STEP = 2;
const CHART_BARS = [40, 65, 50, 80, 60, 90, 70];

export default function AdminConsole() {
  return (
    <div className="console" aria-hidden="true">
      <div className="console-header">
        <i />
        <i />
        <i />
      </div>

      <div className="console-body">
        <div className="console-sidebar">
          {[0, 1, 2, 3, 4].map((item) => (
            <b key={item} />
          ))}
        </div>

        <div className="console-main">
          <div className="console-title">Process overview</div>

          <div className="flow">
            {FLOW_STEPS.map((step, index) => (
              <Fragment key={step}>
                <span className={`flow-step ${index === ACTIVE_STEP ? 'is-active' : ''}`}>{step}</span>
                {index < FLOW_STEPS.length - 1 && <span className="flow-arrow">›</span>}
              </Fragment>
            ))}
          </div>

          <div className="chart">
            {CHART_BARS.map((height, index) => (
              <div key={index} className="bar" style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="console-caption">Illustrative view of the Progov admin console</div>
        </div>
      </div>
    </div>
  );
}
