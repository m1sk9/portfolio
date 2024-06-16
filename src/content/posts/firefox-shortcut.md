---
title: 'Firefox (macOS) のショートカット (よく使うやつだけ)'
description: 'Firefox (macOS) のショートカット (よく使うやつだけ)'
tags: ['tech', 'firefox']
date: '2024-06-05'
published: false
---

`tech` なのか? 違うのでは?

Firefox にはキーボードショートカットが用意されています. まあ今の主流ブラウザには全部あるよね. 拙者過去は Chrome と Arc しか使ったことないが.

[Firefox のキーボードショートカット - Firefox ヘルプ](https://support.mozilla.org/ja/kb/keyboard-shortcuts-perform-firefox-tasks-quickly?redirectslug=Keyboard+shortcuts&redirectlocale=ja)

---

- [再読み込み](#再読み込み)
- [キャッシュを上書きして再読み込み](#キャッシュを上書きして再読み込み)
- [ページの先頭, 終端へ移動](#ページの先頭-終端へ移動)
- [ページ内検索](#ページ内検索)
- [検索エンジンの切り替え](#検索エンジンの切り替え)
- [検索バーにフォーカスする](#検索バーにフォーカスする)
- [タブを閉じる](#タブを閉じる)
- [ウィンドウを閉じる](#ウィンドウを閉じる)
- [最近使用した順にタブを切り替える](#最近使用した順にタブを切り替える)
- [Firefox を閉じる (アプリ自体の終了)](#firefox-を閉じる-アプリ自体の終了)
- [新規タブ](#新規タブ)
- [新規ウィンドウ](#新規ウィンドウ)
  - [新規プライベートウィンドウ](#新規プライベートウィンドウ)
- [最後に閉じたタブやウィンドウを開き直す](#最後に閉じたタブやウィンドウを開き直す)
  - [ウィンドウのみを開き直す](#ウィンドウのみを開き直す)
  - [履歴をサイドバーで開く](#履歴をサイドバーで開く)
  - [最近の履歴を削除](#最近の履歴を削除)
- [開発者ツール](#開発者ツール)
  - [ウェブコンソール](#ウェブコンソール)
  - [インスペクター](#インスペクター)
  - [プロファイラーを開く](#プロファイラーを開く)
  - [ネットワーク](#ネットワーク)
  - [ページソースの表示](#ページソースの表示)
- [スクリーンショットの撮影](#スクリーンショットの撮影)

## 再読み込み

`F5` or `command ⌘` + `R`

ページの再読み込みを行う.

## キャッシュを上書きして再読み込み

`command ⌘` + `shift` + `R`

キャッシュを上書きしつつページを再読み込みする. ページキャッシュのせいで正しく動作していないウェブサイトには有効.

## ページの先頭, 終端へ移動

先頭: `command ⌘` + `↑`
終端: `command ⌘` + `↓`

## ページ内検索

`command ⌘` + `F`

ちなみにデフォルトだと結果のハイライトがされないので ON にしておこう.

## 検索エンジンの切り替え

検索バーにフォーカスが当たっている状態で:
`command ⌘` + `↑` (`↓`)

![](/post-image/2024/firefox-shortcut/firefox-search-engine.gif)

切り替えるのがめんどくさい場合は `@google` や `@duckduckgo` などのキーワードで指定するのが一番早い.

## 検索バーにフォーカスする

`command ⌘` + `K` or `command ⌘` + `option ⌥` + `F`

## タブを閉じる

`command ⌘` + `W`

(ピン留めされたタブは閉じれない.)

## ウィンドウを閉じる

`command ⌘` + `shift` + `W`

## 最近使用した順にタブを切り替える

`command ⌘` + `Tab`

## Firefox を閉じる (アプリ自体の終了)

`command ⌘` + `Q`

ショートカットというか macOS 自体のキー

## 新規タブ

`command ⌘` + `T`

## 新規ウィンドウ

`command ⌘` + `N`

(`W` じゃないよ!)

### 新規プライベートウィンドウ

`command ⌘` + `shift` + `P`

## 最後に閉じたタブやウィンドウを開き直す

`command ⌘` + `shift` + `T`

開き直せるタブなどがない場合はセッションが復元される. [間違えて閉じちゃった](#firefox-を閉じる-アプリ自体の終了)ときはこれで戻せる. クラッシュしたときとかは確か無理だった気がする... どうだったっけ

### ウィンドウのみを開き直す

`command ⌘` + `shift` + `N`

### 履歴をサイドバーで開く

`command ⌘` + `shift` + `H`

### 最近の履歴を削除

`command ⌘` + `shift` + `delete`

ちなみに [Forgot](https://support.mozilla.org/ja/kb/forget-button-quickly-delete-your-browsing-history) を使っても同じことができる.

![](/post-image/2024/firefox-shortcut/firefox-forgot.jpg)

## 開発者ツール

`F12` or `command ⌘` + `alt` + `I`

みんな大好き開発者ツール

### ウェブコンソール

`command ⌘` + `alt` + `K`

### インスペクター

`command ⌘` + `alt` + `C`

### プロファイラーを開く

`Shift` + `F5`

ウェブサイトのパフォーマンスを可視化する [Firefox Profiler](https://profiler.firefox.com/) を開ける.

### ネットワーク

`command ⌘` + `alt` + `E`

### ページソースの表示

`command ⌘` + `U`

## スクリーンショットの撮影

`command ⌘` + `shift` + `S`

---

開発者ツール上のショートカットも一応用意されている模様. 私はバックエンド専門なので見るのはネットワークくらいなんだけどフロントエンドエンジニアは知っておくと便利かも

[All keyboard shortcuts — Firefox Source Docs](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html)
