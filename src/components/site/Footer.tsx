import siteContent from '../../data/siteContent.json';
import { BrandMark } from './BrandMark';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer__top">
          <a href="#top" aria-label={`${siteContent.brand.name} トップへ`}>
            <BrandMark compact />
          </a>

          <nav aria-label="フッターナビゲーション">
            <ul className="site-footer__nav">
              {siteContent.nav.map((item) => (
                <li key={item.target}><a href={`#${item.target}`}>{item.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__contact">
            <p>OPEN 09:00 — 18:00 / 水曜定休</p>
            <div>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
              <a href={siteContent.reservation.lineHref} target="_blank" rel="noreferrer">LINE</a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 mofumofu biyori</span>
          <span>Pet salon for dogs &amp; cats</span>
        </div>
      </div>
    </footer>
  );
}
