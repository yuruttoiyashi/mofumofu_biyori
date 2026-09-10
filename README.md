# ペットサロン もふもふ日和

犬と猫のためのペットサロン「もふもふ日和」公式サイトのデモ実装です。自然光のある店内写真、余白を活かしたタイポグラフィ、アイボリー・くすみグリーン・ブラウンの配色で、上品であたたかな小規模サロンを表現しています。

## 起動方法

Node.js が利用できる環境で、プロジェクトルートから実行してください。

```bash
npm install
npm run dev
```

表示されたローカルURLをブラウザで開きます。

## ビルド

```bash
npm run build
```

本番用ファイルは `dist/` に生成されます。

## テスト

```bash
npm test
```

コンテンツ契約、ページの主要ランドマーク、モバイルメニューの状態遷移を確認します。

## 構成

- `src/components/site/` — Header、Hero、About、Trimming、Hotel、Gallery、Flow、News、Access、Reservation、Footer
- `src/data/siteContent.json` — サロン情報、料金、ニュース、予約導線などの表示データ
- `src/index.css` — ブランドトークン、レイアウト、レスポンシブスタイル
- `public/images/` — サイトの世界観に合わせたデモ写真素材

## 実店舗で利用する場合

このプロジェクトは架空店舗のデモです。公開前に、以下を実際の情報へ差し替えてください。

- `src/data/siteContent.json` の住所、電話番号、営業時間、料金、ニュース、LINE URL
- `src/components/site/Footer.tsx` の Instagram URL
- `public/images/` の写真（商用利用可能な自社写真・ライセンス済み素材）
- `index.html` の description と title

写真はデモ用に用意したオリジナル素材です。実店舗の公開サイトでは、掲載許諾と商用利用条件を確認した写真に置き換えてください。

## 技術スタック

- React
- Vite
- TypeScript
- Tailwind CSS
- Vitest / Testing Library
