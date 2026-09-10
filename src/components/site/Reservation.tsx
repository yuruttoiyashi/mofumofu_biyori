import siteContent from '../../data/siteContent.json';

export function Reservation() {
  return (
    <section id="reservation" className="reservation section section--ivory" aria-labelledby="reservation-title">
      <div className="site-container">
        <div className="reservation__panel">
          <div className="reservation__copy">
            <p className="reservation__eyebrow">RESERVATION</p>
            <h2 id="reservation-title">ご予約・お問い合わせ</h2>
            <p>ご希望のメニューやお日にちをお聞かせください。初めての方も、どうぞ気軽にご連絡ください。</p>
          </div>

          <div className="reservation__actions">
            <a className="button button--light" href={siteContent.reservation.lineHref} target="_blank" rel="noreferrer">
              {siteContent.reservation.lineLabel} <span aria-hidden="true">↗</span>
            </a>
            <a className="reservation__phone" href={siteContent.reservation.phoneHref}>
              <span>{siteContent.reservation.phoneLabel}</span>
              <strong>{siteContent.access.phone}</strong>
            </a>
            <p className="reservation__notice">{siteContent.reservation.notice}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
