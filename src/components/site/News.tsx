import siteContent from '../../data/siteContent.json';
import { SectionHeading } from './SectionHeading';

export function News() {
  return (
    <section id="news" className="section section--ivory" aria-labelledby="news-title">
      <div className="site-container news__layout">
        <SectionHeading eyebrow="NEWS" title="お知らせ" intro="営業や季節のお手入れについてのお知らせです。" id="news-title" />

        <ul className="news-list">
          {siteContent.news.map((item) => (
            <li key={item.date}>
              <time dateTime={item.date.replaceAll('.', '-')}>{item.date}</time>
              <span>{item.title}</span>
              <span className="news-list__arrow" aria-hidden="true">↗</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
