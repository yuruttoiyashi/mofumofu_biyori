import siteContent from '../../data/siteContent.json';
import { SectionHeading } from './SectionHeading';

export function Trimming() {
  return (
    <section id="trimming" className="section section--ivory" aria-labelledby="trimming-title">
      <div className="site-container">
        <div className="trimming__header">
          <SectionHeading
            eyebrow={siteContent.trimming.eyebrow}
            title={siteContent.trimming.title}
            id="trimming-title"
          />
          <p className="section-heading__intro">{siteContent.trimming.intro}</p>
        </div>

        <div className="trimming__body">
          <div>
            <div className="menu-table-wrap">
              <table className="menu-table">
                <caption>トリミング料金</caption>
                <thead>
                  <tr>
                    <th scope="col">対象</th>
                    <th scope="col">コース</th>
                    <th scope="col">料金</th>
                  </tr>
                </thead>
                <tbody>
                  {siteContent.trimming.rates.map((rate) => (
                    <tr key={`${rate.target}-${rate.menu}`}>
                      <td>{rate.target}</td>
                      <td>{rate.menu}</td>
                      <td>{rate.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="menu-note">※ {siteContent.trimming.note}</p>
          </div>

          <div className="options-block">
            <p className="options-block__label">OPTIONAL CARE</p>
            <ul className="options-list">
              {siteContent.trimming.options.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
