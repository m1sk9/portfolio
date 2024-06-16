---
title: 'Pulsate Project: メンバー募集'
description: 'Pulsate Project: メンバー募集'
tags: ['tech', 'pulsate']
date: '2024-03-24'
published: false
---

- [GitHub Org](https://link.pulsate.dev/github)
- [Repository](https://github.com/pulsate-dev/pulsate)
- [公式Discord](https://link.pulsate.dev/discord)

:::message

この記事の内容は古くなっています.

:::

## プロジェクトの簡単な概要

### Pulsate Project とは

Pulsate Project は, 2023年に始まった分散型SNSの開発プロジェクトです.　私が Product Owner をしています.

既存の分散型SNS (Misskey や Mastodon) の代替として機能し, 高速かつ開発者・ユーザー視点で設計されたフレンドリーな ActivityPub 実装を目指しています.

主に取り組みたいことは以下の通りです.

1. 既存のユーザー・コミュニティ (サーバー) を取り込むようなソフトウェアの開発.
2. 無償で提供され, GitHub上 で公開・開発が行われ, [Apache 2.0 ライセンス](https://www.apache.org/licenses/LICENSE-2.0) で提供される.
3. カスタマイズをユーザー側で自由にできるような拡張性の高い設計を行う.
4. 今まで Misskey や Mastodon などを使っていたユーザーでも問題なく使いこなせるような UI/UX の設計を行う.

### 解決したい課題

Pulsate の解決したい課題は以下の通りです.

- ソフトウェアの UI/UX → **ユーザーに優しい UI/UX の設計** [^1] [^2]
  - 既存の分散型SNSはダークテーマのカラースキームが壊れていて潜在的なアクセシビリティの問題がある.
  - エラー発生時のコンテキストが不足していてプロダクション環境なのにどのようなエラーが発生しているのかの調査に労力をかける必要がある.
- 根本的な開発手法の問題 → **開発者・インスタンス管理者に優しい開発環境の提供**
  - LTS 前の Node.js を推奨バージョンとして定めてしまう [^3]
  - ドキュメントやAPIリファレンスが不足している

これらの負債・課題を解決し, **ユーザー・開発者・インスタンス管理者に優しい** ソフトウェアを提供することを目指しています.

### 技術スタック

2024年現在, バックエンドを中心とした開発を行っています. バックエンドの技術スタックは以下のとおりです:

- **言語**: TypeScript
- **ランタイム**: Node.js (将来的には Bun への移行を検討しています)
- **Webフレームワーク**: Hono
- **RDBMS**: PostgreSQL

### 組織体制

Pulsate Project は Rust のチームモデルを参考にし組織を構築しています.

[ガバナンス - Rust Programming Language](https://www.rust-lang.org/governance)

現在チームには7人のメンバーが所属しており, 以下のような役割分担を行っています:

**コアチーム**

Pulsate Project の総指揮を行います.

- Product Owner (チームリーダー): [m1sk9](https://github.com/m1sk9)
- Project Manager: [MikuroXina](https://github.com/MikuroXina)
- Project Leader: [laminne](https://github.com/laminne)

**開発チーム**

プロジェクトの開発を行います.

**モデレーションチーム**

GitHub や Discord などのコミュニティ運営を行います.

## メンバー募集

現在 Pulsate Project は絶賛チームメンバーを募集しています. (開発チームの人員が不足しています... 😭 興味がある方はぜひ!)

### 開発チーム

フロントエンドエンジニア

> React などのフロントエンド技術を使って UI/UX の設計を行います.

バックエンドエンジニア

> Node.js を使いバックエンドの開発を行います.

### モデレーションチーム

Discord や GitHub などのコミュニティのモデレーションを行います.

## 参加方法

Pulsate Project に興味を持っていただけた方は, ぜひいずれかの方法でご連絡ください:

- [公式Discord](https://link.pulsate.dev/discord) に参加し, `@laminne` に GitHub へのプロフィール を記載してDMを送信.
- コアチームメンバーの [Meru (m1sk9)](https://twitter.com/m1s2r8) か [laminne33](https://twitter.com/laminne33) にDMを送信.

## おわりに

Pulsate Project は, 2023年に始まった分散型SNSのプロジェクトでまだ日は浅いですが, 既存の分散型SNSの代替として機能し, 高速かつ開発者・ユーザー視点で設計されたフレンドリーな ActivityPub 実装を目指して今後の開発を進めていきます.

最新情報は [公式Discord](https://link.pulsate.dev/discord) で随時お知らせしていきます. ぜひご参加ください.

開発に興味を持っていただけた方はぜひご連絡ください. チームへの参加をお待ちしております.

[^1]: https://twitter.com/4649niya/status/1703979150833545349

[^2]: https://x.com/found136/status/1703916743251677475?s=20

[^3]: https://github.com/misskey-dev/misskey/issues/11154
