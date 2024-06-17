---
title: 'モジュール外からの構造体を読み取り専用に - "readonly" '
description: 'あるモジュールで定義した構造体をモジュール外から書き込みでのアクセスをさせたくないときに使えるライブラリとして Rust には **readonly** があります'
tags: ['tech', 'rust']
date: '2024-06-18'
published: true
---

あるモジュールで定義した構造体をモジュール外から書き込みでのアクセスをさせたくないときに使えるライブラリとして Rust には **readonly** があります.

[dtolnay/readonly: Struct fields that are made read-only accessible to other modules](https://github.com/dtolnay/readonly)

dtolnay 氏と言えばみんな大好き serde や anyhow の作者ですが, 彼は GitHub のリポジトリが Rust だけで構成されているほどの Rust 狂信者で[^1] 色んなライブラリを公開してくれています. readonly はそんなリポジトリ欄を見ている中で出会ったライブラリです. serde などが有名過ぎてこれらのライブラリはあまり記事などでは見ないので今回紹介したいと思います.

- [使い方](#使い方)
  - [値だけを読み取り専用にする](#値だけを読み取り専用にする)
- [使いどころ](#使いどころ)

## 使い方

```toml:Cargo.toml
[dependencies]
readonly = "0.2"
```

readonly は `#[readonly::make]` というマクロを追加します. このマクロが設定された構造体は **宣言元のモジュール内でのみ読み書きができるようになります**

例えば以下の例では `foo` というモジュールで宣言された `Bar` 構造体は **`foo`内でのみ** 値の読み書きが出来ます.

```rust
mod foo {
    #[readonly::make]
    pub struct Bar {
        pub a: i32,
    }

    impl Bar {
        pub fn new(&mut self) {
            println!("{}", self.a);
            self.a += 1;
        }
    }
}

fn demo(s: &mut foo::Bar) {
    println!("{}", s.a);
}
```

モジュール外である `demo()` 関数内で構造体の値 (`a`) を書き換えてみるとエラーになります.

```rust
fn demo(s: &mut foo::Bar) {
    println!("{}", s.a);

    s.a += 1;
}
```

```sh
error[E0594]: cannot assign to data in a dereference of `foo::Bar`
   |
21 |     s.a += 1;
   |     ^^^^^^^^ cannot assign
```

もちろん `#[readonly::make]` マクロが付与された構造体はその **モジュール内** でのみ読み書きが可能になるため, **モジュール外** で値を含め宣言した場合はエラーになります.

```rust
mod m {
    #[readonly::make]
    pub struct S {
        pub n: i32,
    }
}

fn main() {
    let mut s = m::S { n: 0 };
}
```

```sh
error[E0451]: field `n` of struct `S` is private
   |
17 |     let mut s = m::S { n: 0 };
   |                        ^^^^ private field
```

### 値だけを読み取り専用にする

構造体の各フィールドに `#[readonly]` というマクロを含めると **そのフィールドだけを読み取り専用にすること** も出来ます.

```rust
#[readonly::make]
pub struct S {
    #[readonly]
    pub n: i32,

    pub s: String,
}s
```

## 使いどころ

構造体で宣言するものの中には, コード内での書き込みは行わず実行中に読み取りのみに使用する変数などを用意したい時があるため そのようなケースでは readonly を使うことが出来ると思います.

このようなケースで[実際 dtolnay 氏は oqueue という別のプロジェクトで使用しています](https://github.com/dtolnay/oqueue/blob/528a3fa34afc30ad8b6ef18441e62e7ea56bf94b/src/task.rs#L26-L39).

```rust:oqueue/src/task.rs
#[readonly::make]
#[derive(Clone)]
pub struct Task {
    handle: Rc<Handle>,

    /// Index of the current task. This is a sequential counter that begins at 0
    /// and increments by 1 for each successively started task. It may be
    /// helpful in determining what work this task is responsible for
    /// performing.
    ///
    /// This field is read-only; writing to its value will not compile.
    #[readonly]
    pub index: usize,
}
```

anyhow で `Result` が使いやすくなり, readonly で構造体を読み取り専用に出来る ...これがほぼ一人でメンテナンスしているわけですからね... dtolnay 氏だいすき ❤️ これからも着いていきます

[^1]: 一応 `Shell` もある: https://github.com/dtolnay?tab=repositories&q=&type=&language=rust
