# MDBook Starter

This repository provides a template project for mdbook.

## Features

+ [x] CJK (mutiple language) search ([#2052](https://github.com/rust-lang/mdBook/issues/2052))
+ [x] [mdbook-mermaid](https://github.com/badboy/mdbook-mermaid/releases)
+ [x] TOC
  + [x] [mdbook-toc](https://github.com/badboy/mdbook-toc/releases)  
  + [x] [mdbook-pagetoc](https://github.com/JorelAli/mdBook-pagetoc)

## Bugs

+ [ ] There is no content in the exported PDFS
+ [x] 导航栏一直展示，无法隐藏，导致左侧边栏的第一篇blog被挡住
    + BUG 的出现原因在 index.hbs 版本不同，需要使用 mdbook 中最新版的 index.hbs 并在其中添加 pagetoc 相关代码。

## Tutorial

+ Build project `mdbook.exe build`
+ Use as a server `mdbook.exe serve`
+ A Chinese tutorial could be found [here](./src/tutorial.md)
