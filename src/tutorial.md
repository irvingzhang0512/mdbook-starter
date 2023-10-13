# 文档生成工具 MDBook 试用记录

<!-- toc -->

## 0. 前言

+ 目标：为了给组内写点文档，需要一个 Markdown -> PDF/HTML 的文档生成工具。
+ 尝试MDBook的原因：Gitbook的桌面版应该不更新了，想找个替代品。
+ 资料：
  + [Github](https://github.com/rust-lang/mdBook)
  + [英文文档](https://rust-lang.github.io/mdBook/)
  + [中文文档](https://niqin.com/read/mdbook-guide/zh-cn/index.html)
+ 试用感受

| 功能           | 感受                                                         |
| -------------- | ------------------------------------------------------------ |
| 安装           | 非常容易，下载预编译包并放到系统路径下即可，不需要安装nodejs啥的。 |
| 支持的功能数量 | 相对较少，不支持顶部导航，支持侧边栏                         |
| 上手难度       | 低，功能少，但相对应的，配置也很方面                         |
| 对中文的支持   | 似乎看起来中文不太支持，听说**不支持按中文搜索**             |
| 导出PDF        | 官方支持，通过html打印为PDF，但**没有标题标签**              |

## 1. 基本功能

### 1.1 安装

+ 直接在 [Github Relases](https://github.com/rust-lang/mdBook/releases) 中下载预编译包即可。
+ 以 Windows 为例，下载预编译包，放到系统路径下，即可通过 `mdbook.exe` 开始进行各种命令操作。

### 1.2 创建/部署项目

```shell
# 创建项目
mdbook.exe init my-book

# 部署项目，运行后在网页上打开书本
cd my-book
mdbook.exe serve
```

### 1.3 配置章节结构

+ 在 `SUMMARY.md` 中可确定文档的结构，之后通过 `mdbook build` 命令自动创建各个文本
  + 注意，章节结构通过 `#` 标题以及 `-`无序列表来设置。
  + 生成的章节标题效果如后面的截图。

```markdown
# Summary

- [前言](./README.md)


# 工作环境

- [工作环境概述](./workspace/README.md)
- [办公电脑](./workspace/work_pc.md)
- [vpn](./workspace/vpn.md)
- [堡垒机使用](./workspace/jumpter_server/README.md)
  - [网络与通信环境](./workspace/jumper_server/net.md)
  - [开发环境](./workspace/jumper_server/programming.md)
- [服务器使用](./workspace/server/README.md)
  - [网络与通信环境](./workspace/server/net.md)
  - [开发环境](./workspace/server/programming.md)

# 软件开发

- [Python开发](./software_programming/python.md)
- [C++开发](./software_programming/cpp.md)
- [Git开发流程](./software_programming/git.md)

# 其他

- [如何提问](./others/how_to_ask_questions_the_smart_way.md)
```

![image-20230728143653152](https://zhangyiyang-blog.oss-cn-hangzhou.aliyuncs.com/20230728143654.png)

### 1.4 配置书本属性

```toml
[book]
title = "入职，从入门到放弃"
authors = ["zyy","txl"]
description = "期望减少新人熟悉环境所需时间"
language = "zh"
multilingual = false
src = "src"

[output.html]
mathjax-support = true
```



## 3. 插件配置

+ 除了 mdbook 本身自带的功能之外，还需要一些其他插件来



### 3.1 mdbook-toc

#### 3.1.1 在文章内部添加 TOC

+ 安装：下载 [mdbook-toc](https://github.com/badboy/mdbook-toc/releases) 中的 `mdbook-toc.exe` 文件，并放到系统路径中（如 `C:\Windows`）。
+ 配置，在 `book.toml`中添加：

```toml
[preprocessor.toc]
command = "mdbook-toc"
renderer = ["html"]
```

+ 使用：在文档正文中增加 `<!-- toc -->`

#### 3.1.2 在有侧边栏添加 TOC

+ 安装：参考 [mdbook-pagetoc](https://github.com/JorelAli/mdBook-pagetoc)
  + 手动添加 `sidebar.js`、`style.css`两个文件
  + 新增 `theme/index.hbs` 文件
+ 配置，在 `book.toml`中添加：

```toml
[output.html]
additional-css = ["style.css"]
additional-js = ["sidebar.js"]
```

+ 使用：啥都不用做，侧边栏就出现了。

### 3.2 mdbook-mermaid

+ 安装：下载[mdbook-mermaid](https://github.com/badboy/mdbook-mermaid/releases)中的 `mdbook-mermaid.exe` 文件，并放到系统路径中（如 `C:\Windows`）。
+ 配置：
  + 下面内容其实不需要手动加入，只需要运行 `mdbook-mermaid install ./` 即可自动修改配置文件，并添加js/css文件

```toml
[preprocessor.mermaid]
command = "mdbook-mermaid"

[output.html]
additional-js = ["mermaid.min.js", "mermaid-init.js"]
```

+ 使用：正常添加图即可

````markdown
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````
