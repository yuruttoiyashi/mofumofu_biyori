import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Gallery } from './Gallery';
import { Hotel } from './Hotel';

describe('Japanese heading line breaks', () => {
  it('keeps the hotel wording intact with a break after the particle', () => {
    render(<Hotel />);
    const heading = screen.getByRole('heading', { name: 'おうちの続きを過ごせる場所' });
    expect(heading.children).toHaveLength(2);
    expect(heading.children[0]).toHaveTextContent(/^おうちの続きを$/);
    expect(heading.children[1]).toHaveTextContent(/^過ごせる場所$/);
  });

  it('keeps 過ごす together and separates the gallery description by sentence', () => {
    render(<Gallery />);
    const heading = screen.getByRole('heading', { name: 'サロンで過ごす、やさしい時間' });
    expect(heading.children).toHaveLength(2);
    expect(heading.children[0]).toHaveTextContent(/^サロンで過ごす、$/);
    expect(heading.children[1]).toHaveTextContent(/^やさしい時間$/);
    const intro = document.querySelector('#gallery .section-heading__intro')!;
    expect(intro.textContent).toBe('仕上がりだけでなく、過ごしている時間も心地よく。もふもふ日和の日々をご紹介します。');
    expect(intro.children).toHaveLength(2);
    expect(intro.children[1]).toHaveTextContent(/^もふもふ日和の日々をご紹介します。$/);
  });
});
