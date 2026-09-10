import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from './Header';

describe('Header mobile navigation', () => {
  it('opens the menu and closes it after navigation', () => {
    render(<Header />);

    const menuButton = screen.getByRole('button', { name: 'メニューを開く' });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuButton);
    expect(screen.getByRole('button', { name: 'メニューを閉じる' })).toHaveAttribute('aria-expanded', 'true');

    const aboutLinks = screen.getAllByRole('link', { name: /ABOUT/ });
    fireEvent.click(aboutLinks[aboutLinks.length - 1]);
    expect(screen.getByRole('button', { name: 'メニューを開く' })).toHaveAttribute('aria-expanded', 'false');
  });
});
