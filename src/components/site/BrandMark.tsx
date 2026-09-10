import siteContent from '../../data/siteContent.json';

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className={`brand-mark${compact ? ' brand-mark--compact' : ''}`}>
      <svg className="brand-mark__icon" viewBox="0 0 56 40" aria-hidden="true">
        <path d="M10 28c0-7.4 5.5-12.9 12.8-12.9S35.6 20.6 35.6 28" />
        <path d="M13.8 17.5V7.2l7 6.6M31.7 17.5V7.2l-6.8 6.6" />
        <path d="M36.2 10.5c6.4-3.9 11.8-.4 12.7 5.7-5.9 1.3-10.5-.1-12.7-5.7Z" />
        <path d="M42.7 10.5c-1.7 4.5-4.7 8.3-9.5 11.1" />
      </svg>
      <span className="brand-mark__wordmark">
        <span className="brand-mark__name">{siteContent.brand.shortName}</span>
        {!compact && <span className="brand-mark__descriptor">PET SALON</span>}
      </span>
    </span>
  );
}
