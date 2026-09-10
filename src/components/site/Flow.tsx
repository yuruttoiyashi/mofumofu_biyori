import siteContent from '../../data/siteContent.json';
import { SectionHeading } from './SectionHeading';

export function Flow() {
  return (
    <section id="flow" className="section section--paper" aria-labelledby="flow-title">
      <div className="site-container">
        <SectionHeading
          eyebrow="FLOW"
          title="ご利用の流れ"
          intro="はじめての方にも安心していただけるよう、最初にゆっくりお話をうかがいます。"
          align="center"
          id="flow-title"
        />

        <ol className="flow-list">
          {siteContent.flow.map((step) => (
            <li className="flow-list__item" key={step.number}>
              <span className="flow-list__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
