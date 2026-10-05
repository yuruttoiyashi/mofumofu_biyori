import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from './Hero';

describe('hero tagline', () => {
  it('keeps the salon name together in a second line and preserves the accessible heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1, name: '毎日に、もふもふ日和を。' });
    expect(heading.textContent).toBe('毎日に、もふもふ日和を。');
    expect(heading.children).toHaveLength(2);
    expect(heading.children[0]).toHaveTextContent(/^毎日に、$/);
    expect(heading.children[1]).toHaveTextContent(/^もふもふ日和を。$/);
    expect(screen.getByRole('link', { name: /トリミングを見る/ })).toHaveAttribute('href', '#trimming');
    expect(screen.getByRole('link', { name: /ホテルを見る/ })).toHaveAttribute('href', '#hotel');
  });
});
