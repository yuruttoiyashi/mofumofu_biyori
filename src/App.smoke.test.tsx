import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('mofumofu biyori page', () => {
  it('renders the brand, primary tagline, and requested content landmarks', () => {
    render(<App />);

    expect(screen.getByText('ペットサロン もふもふ日和')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: '毎日に、もふもふ日和を。' })).toBeInTheDocument();

    for (const id of ['about', 'trimming', 'hotel', 'gallery', 'flow', 'news', 'access', 'reservation']) {
      expect(document.getElementById(id)).toBeInTheDocument();
    }
  });
});
