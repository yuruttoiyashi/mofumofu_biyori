type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  id?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = 'left', id }: SectionHeadingProps) {
  return (
    <div className={`section-heading${align === 'center' ? ' section-heading--center' : ''}`}>
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </div>
  );
}
