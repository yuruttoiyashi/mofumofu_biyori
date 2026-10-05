import siteContent from '../../data/siteContent.json';
import { PhotoFrame } from './PhotoFrame';

export function Hero() {
  const taglineLines = siteContent.brand.tagline.split(/(?<=、)/u);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner site-container">
        <div className="hero__media">
          <PhotoFrame {...siteContent.hero.image} priority />
        </div>
        <div className="hero__content">
          <p className="hero__brand-name">{siteContent.brand.name}</p>
          <p className="hero__eyebrow">{siteContent.hero.eyebrow}</p>
          <h1 id="hero-title" aria-label={siteContent.brand.tagline}>
            {taglineLines.map((line) => <span className="hero__title-line" key={line}>{line}</span>)}
          </h1>
          <p className="hero__description">{siteContent.hero.description}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#trimming">
              トリミングを見る <span aria-hidden="true">↘</span>
            </a>
            <a className="button button--text" href="#hotel">
              ホテルを見る <span aria-hidden="true">↘</span>
            </a>
          </div>
          <p className="hero__meta" aria-label="サービス情報">
            <span>DOG</span>
            <span>CAT</span>
            <span>09:00 — 18:00</span>
          </p>
        </div>
      </div>
    </section>
  );
}
