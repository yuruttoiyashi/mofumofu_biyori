import siteContent from '../../data/siteContent.json';
import { PhotoFrame } from './PhotoFrame';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="section section--paper" aria-labelledby="about-title">
      <div className="site-container">
        <SectionHeading
          eyebrow={siteContent.about.eyebrow}
          title={siteContent.about.title}
          intro="飼い主さまと、その子の気持ちに寄り添う場所でありたいと考えています。"
          id="about-title"
        />

        <div className="about__layout">
          <div className="about__copy">
            <p>{siteContent.about.body}</p>
            <ul className="principles-list">
              {siteContent.about.principles.map((principle, index) => (
                <li key={principle.title}>
                  <span className="principles-list__number">0{index + 1}</span>
                  <span>
                    <span className="principles-list__title">{principle.title}</span>
                    <span className="principles-list__body">{principle.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about__photo">
            <PhotoFrame {...siteContent.about.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
