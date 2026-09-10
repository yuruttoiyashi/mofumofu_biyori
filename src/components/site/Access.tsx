import siteContent from '../../data/siteContent.json';
import { SectionHeading } from './SectionHeading';

export function Access() {
  const { access } = siteContent;

  return (
    <section id="access" className="section section--paper" aria-labelledby="access-title">
      <div className="site-container">
        <SectionHeading
          eyebrow="ACCESS"
          title="店舗情報"
          intro="駅から歩いて来られる、静かな通り沿いの小さなサロンです。"
          id="access-title"
        />

        <div className="access__layout">
          <div className="access__details">
            <dl className="access-list">
              <div>
                <dt>所在地</dt>
                <dd>{access.address}</dd>
              </div>
              <div>
                <dt>営業時間</dt>
                <dd>{access.hours}</dd>
              </div>
              <div>
                <dt>定休日</dt>
                <dd>{access.closed}</dd>
              </div>
              <div>
                <dt>お電話</dt>
                <dd><a href={`tel:${access.phone.replaceAll('-', '')}`}>{access.phone}</a></dd>
              </div>
              <div>
                <dt>駐車場</dt>
                <dd>{access.parking}</dd>
              </div>
              <div>
                <dt>アクセス</dt>
                <dd>{access.access}</dd>
              </div>
            </dl>
            <p className="demo-note">{access.notice}</p>
          </div>

          <div className="map-placeholder" role="img" aria-label="デモ用の地図スペース">
            <span className="map-placeholder__label">MAP / DEMO</span>
            <span className="map-placeholder__pin" aria-hidden="true">●</span>
            <span className="map-placeholder__caption">もふもふ日和</span>
          </div>
        </div>
      </div>
    </section>
  );
}
