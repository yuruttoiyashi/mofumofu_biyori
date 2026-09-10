import siteContent from '../../data/siteContent.json';
import { PhotoFrame } from './PhotoFrame';
import { SectionHeading } from './SectionHeading';

export function Hotel() {
  return (
    <section id="hotel" className="section section--paper" aria-labelledby="hotel-title">
      <div className="site-container">
        <div className="hotel__layout">
          <div className="hotel__photo">
            <PhotoFrame {...siteContent.hotel.image} />
          </div>

          <div className="hotel__content">
            <SectionHeading
              eyebrow={siteContent.hotel.eyebrow}
              title={siteContent.hotel.heading}
              intro={siteContent.hotel.intro}
              id="hotel-title"
            />

            <div className="hotel__care">
              <p className="hotel__label">STAY &amp; CARE</p>
              <ul className="care-list">
                {siteContent.hotel.care.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hotel__rates">
              <p className="hotel__label">HOTEL RATE</p>
              <div className="menu-table-wrap">
                <table className="menu-table hotel-table">
                  <caption>ペットホテル料金</caption>
                  <thead>
                    <tr>
                      <th scope="col">対象</th>
                      <th scope="col">日帰り</th>
                      <th scope="col">1泊</th>
                    </tr>
                  </thead>
                  <tbody>
                    {siteContent.hotel.rates.map((rate) => (
                      <tr key={rate.target}>
                        <td>{rate.target}</td>
                        <td>{rate.day}</td>
                        <td>{rate.night}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="menu-note">※ 食事・投薬・時間外のお預かりはご予約時にご相談ください。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
