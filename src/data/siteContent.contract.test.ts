import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const contentPath = resolve(process.cwd(), 'src/data/siteContent.json');

describe('site content contract', () => {
  it('contains the public-facing salon content required by the specification', () => {
    expect(existsSync(contentPath)).toBe(true);
    const content = readFileSync(contentPath, 'utf8');

    for (const phrase of [
      'ペットサロン もふもふ日和',
      '毎日に、もふもふ日和を。',
      'トリミング',
      'ペットホテル',
      '小型犬',
      'シャンプーコース',
      '炭酸泉',
      '猫専用スペース',
      'ご予約',
      'カウンセリング',
      '2026.09.01',
      'デモサイト用の仮情報',
    ]) {
      expect(content).toContain(phrase);
    }
  });
});
