type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleLines?: string[];
  intro?: string;
  introLines?: string[];
  align?: 'left' | 'center';
  id?: string;
};

export function SectionHeading({ eyebrow, title, titleLines, intro, introLines, align = 'left', id }: SectionHeadingProps) {
  const useTitleLines = Boolean(titleLines?.length && titleLines.join('') === title);
  const useIntroLines = Boolean(introLines?.length && introLines.join('') === intro);

  return (
    <div className={`section-heading${align === 'center' ? ' section-heading--center' : ''}`}>
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 id={id} aria-label={useTitleLines ? title : undefined} className={`section-heading__title${useTitleLines ? ' section-heading__title--phrased' : ''}`}>
        {useTitleLines
          ? titleLines!.map((line) => <span className="section-heading__title-line" key={line}>{line}</span>)
          : title}
      </h2>
      {intro && (
        <p className="section-heading__intro">
          {useIntroLines
            ? introLines!.map((line) => <span className="section-heading__intro-line" key={line}>{line}</span>)
            : intro}
        </p>
      )}
    </div>
  );
}
