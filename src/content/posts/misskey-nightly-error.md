---
title: 'Firefox Nightly 上での Misskey の UI アイコンが壊れる'
description: 'Firefox Nightly でのみ発生する Misskey の不具合'
tags: ['tech', 'misskey']
date: '2024-05-30'
published: true
---

Firefox Nightly では Misskey 上の UI アイコン表示が壊れます.

![](/post-image/2024/misskey-nightly-error/broken-icon.jpg)

## 原因

`@tabler/icons-webfont` が OpenType 仕様に準拠していないことが原因です. Webフォントの OTL データを検証し, 準拠していないフォントの読み込みは弾くようになっています.

安定版・ベータ版の Firefox ではデフォルトで検証しないので発生しませんが, Nightly だけはちゃんと検証するようで Misskey が使用している UI アイコンは準拠出来ていないので表示が壊れるということです. [^1]

この問題は `tabler/tabler-icons` 側で 2023年1月 に問題が報告されていますが, 現状まだ修正されていないようです.

https://github.com/tabler/tabler-icons/issues/476

この [Codepen](https://codepen.io/outloudvi/pen/yLqEoWW) が PoC です.

```html:index.html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.1.2/tabler-icons.css">
<i class="icon ti ti-home ti-fw"></i>
```

## 回避方法

1. タスクバーに `about:config` を入力し, 設定エディタを開く
2. `gfx.downloadable_fonts.otl_validation` の値を `false` に設定する
3. 再起動, またはタブをリロード

![](/post-image/2024/misskey-nightly-error/firefox-about-config.png)
![](/post-image/2024/misskey-nightly-error/firefox-gfx-otl-validation.jpg)

[^1]: これデフォルトが検証しておくのが普通なのではと思っている. どうなんでしょうかね.
