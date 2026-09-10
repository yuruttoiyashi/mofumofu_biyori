import { useEffect, useState } from 'react';
import siteContent from '../../data/siteContent.json';
import { closeMenuOnNavigation, toggleMenu } from '../../lib/menu';
import { BrandMark } from './BrandMark';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const handleNavigation = () => {
    setIsMenuOpen(closeMenuOnNavigation());
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>
      <header className="site-header">
        <div className="site-container site-header__inner">
          <a className="site-header__brand" href="#top" aria-label={`${siteContent.brand.name} トップへ`}>
            <BrandMark />
          </a>

          <nav className="desktop-nav" aria-label="メインナビゲーション">
            <ul className="desktop-nav__list">
              {siteContent.nav.map((item) => (
                <li key={item.target}>
                  <a href={`#${item.target}`} onClick={handleNavigation}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a className="header-reservation-link" href="#reservation" onClick={handleNavigation}>
            <span>予約する</span>
            <span aria-hidden="true">↗</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(toggleMenu(isMenuOpen))}
          >
            <span className="menu-toggle__lines" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="menu-toggle__label">Menu</span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`mobile-nav${isMenuOpen ? ' mobile-nav--open' : ''}`}
          hidden={!isMenuOpen}
        >
          <nav aria-label="モバイルナビゲーション">
            <p className="mobile-nav__eyebrow">もふもふ日和</p>
            <ul className="mobile-nav__list">
              {siteContent.nav.map((item, index) => (
                <li key={item.target}>
                  <a href={`#${item.target}`} onClick={handleNavigation}>
                    <span className="mobile-nav__number">0{index + 1}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#reservation" onClick={handleNavigation}>
                  <span className="mobile-nav__number">07</span>
                  <span>RESERVATION</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
