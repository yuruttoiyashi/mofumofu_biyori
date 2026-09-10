import { useState } from 'react';

type PhotoFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function PhotoFrame({ src, alt, className = '', priority = false }: PhotoFrameProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`photo-frame${hasError ? ' photo-frame--fallback' : ''}${className ? ` ${className}` : ''}`}
      role={hasError ? 'img' : undefined}
      aria-label={hasError ? alt : undefined}
    >
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setHasError(true)}
        />
      )}
      {hasError && <span className="sr-only">{alt}</span>}
    </div>
  );
}
