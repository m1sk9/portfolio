---
layout: '../../../../organisms/BlogLayout.astro'
title: '新たな分散型SNS 「Pulsate」 について'
description: 'SNS作ってます ♡ (旧Blogからの移行記事)'
published: false
published_at: '2023-11-30'
---

> **注意:**
>
> この記事は旧ブログサイトからの移行記事です. この記事の内容は古いため最新の情報は 「[Pulsate 進捗報告 (2024年3月版) & メンバー募集](../2024/about-pulsate-2024-03)」 を確認してください.

簡単に変更でき, より早く, 開発者に優しい次世代の分散型SNSを現在友人と共に開発中です.

- [なぜ新たな分散型SNSを作るのか](#なぜ新たな分散型snsを作るのか)
- [技術スタックについて](#技術スタックについて)
- [ガバナンス](#ガバナンス)

## なぜ新たな分散型SNSを作るのか

現在日本で開発されている ActivityPub を利用した分散型SNSは, 開発者やユーザーに優しくありません.

名前は伏せますが, 私はその分散型SNSに対して, 以下のような問題点を感じています.

- UI/UX が非常に使いづらい
- ダークテーマのカラースキーム・アクセシビリティの問題
- エラー発生時のコンテキスト不足
- ユーザーのプライバシーを軽視した設計
- 当時まだ LTS になっていなかった Node.js v20 を推奨バージョンとして指定する

これらはソフトウェア面・開発面で多くの負債を産んでいる原因にもなっていると考え, 私は **これらの負債を解決し, ユーザー・開発者に優しい SNS を開発したい** と思い Pulsate Project を立ち上げました.

## 技術スタックについて

現在バックエンドを中心に開発しています.

- フレームワーク: [Hono](https://hono.dev)
- プログラミング言語: [TypeScript](https://www.typescriptlang.org)
- ランタイム: [Deno](https://deno.com)
- RDBMS: [MySQL](https://www.mysql.com)

## ガバナンス

Pulsate Project は Rust のチームモデルを参考にしていて, 以下のようなチームが存在します.

[ガバナンス - Rust 公式ホームページ](https://www.rust-lang.org/ja/governance)

1. コアチーム
   - Pulsate Project の全体的な方針を決定するチーム.
2. 開発チーム
   - Pulsate の開発を行うチーム.
3. モデレーションチーム
   - Pulsate のコミュニティ内のモデレーションを行うチーム.

また, Linear / Notion を使い, プロジェクト管理を厳格に行いつつ開発を行っています.

- [Linear](https://linear.app/)
- [Notion](https://www.notion.so/)

---

現在, v0 (Alpha) での公開を目指して開発を進めています. もし Pulsate というプロジェクトに興味を持っていただけたら, ぜひ Discord に参加してください.

- [公式ホームページ](https://pulsate.dev)
- [GitHub](https://link.pulsate.dev/github)
- [Discord](https://link.pulsate.dev/discord)
