import siteContent from '../../data/siteContent.json';
import { PhotoFrame } from './PhotoFrame';
import { SectionHeading } from './SectionHeading';

export function Gallery() {
  return (
    <section id="gallery" className="section section--ivory" aria-labelledby="gallery-title">
      <div className="site-container">
        <SectionHeading
          eyebrow="GALLERY"
          title="サロンで過ごす、やさしい時間"
          titleLines={['サロンで過ごす、', 'やさしい時間']}
          intro="仕上がりだけでなく、過ごしている時間も心地よく。もふもふ日和の日々をご紹介します。"
          introLines={['仕上がりだけでなく、過ごしている時間も心地よく。', 'もふもふ日和の日々をご紹介します。']}
          align="center"
          id="gallery-title"
        />

        <div className="gallery__grid">
          {siteContent.gallery.map((item, index) => (
            <figure className={`gallery__item gallery__item--${index + 1}`} key={item.caption}>
              <PhotoFrame {...item} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
