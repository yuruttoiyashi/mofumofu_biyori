import { describe, expect, it } from 'vitest';
import { closeMenuOnNavigation, toggleMenu } from './menu';

describe('mobile menu state', () => {
  it('toggles the current open state', () => {
    expect(toggleMenu(false)).toBe(true);
    expect(toggleMenu(true)).toBe(false);
  });

  it('closes after a navigation item is selected', () => {
    expect(closeMenuOnNavigation()).toBe(false);
  });
});
