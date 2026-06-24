# Hexo 个人博客零基础教程

## 一、Hexo 是什么

Hexo 是一个静态博客生成器。你只需要在 `source/_posts` 中写 Markdown，Hexo 会自动生成首页、文章页、分类页、标签页和归档页。

这个项目的工作方式是：

```text
Markdown 文章 + Hexo 配置 + Butterfly 主题
                 ↓
         Hexo 生成 public 文件夹
                 ↓
      GitHub Actions 发布到 Pages
```

- **Markdown**：负责文章正文。
- **Hexo**：读取文章和配置，生成网页。
- **主题**：控制网页结构、颜色和排版。
- **Git**：记录每次修改。
- **GitHub Actions**：在你推送后自动运行 Hexo。
- **GitHub Pages**：把生成的网页公开到互联网。

## 二、项目目录

```text
codex_blog/
├─ _config.yml                 Hexo 的网站总配置
├─ package.json                项目命令与依赖清单
├─ package-lock.json           锁定依赖的准确版本
├─ source/
│  ├─ _posts/                  Markdown 文章
│  └─ images/                  文章图片
├─ scaffolds/                  新建文章时使用的模板
├─ themes/butterfly/           压缩包中完整的 Butterfly 5.5.5 主题
│  ├─ layout/                  Pug 页面模板
│  ├─ source/                  Stylus、JavaScript、图标和图片
│  ├─ languages/               中文等语言文件
│  └─ _config.yml              Butterfly 主题设置
├─ .github/workflows/pages.yml GitHub 自动构建与部署流程
├─ README.md                   项目简介
└─ HEXO_GUIDE.md               本教程
```

以下目录由程序生成，不要手动编辑：

- `node_modules/`：电脑上安装的依赖，体积很大，不上传 GitHub。
- `public/`：Hexo 生成的最终网站，也不上传 GitHub；GitHub Actions 会重新生成。
- `db.json`：Hexo 的本地缓存。

## 三、为什么使用 `npm.cmd`

电脑已经安装 Node.js 和 npm，但 PowerShell 的安全策略会阻止 `npm.ps1`。因此本教程使用：

```powershell
npm.cmd
npx.cmd
```

它们与 `npm`、`npx` 功能相同，只是直接运行 Windows 的 `.cmd` 文件，不需要修改系统安全策略。

## 四、第一次使用

在 VS Code 中打开 `D:\codex_blog`，选择“终端 → 新建终端”，运行：

```powershell
cd D:\codex_blog
npm.cmd install
```

- `cd` 表示切换目录。
- `npm.cmd` 是 Node.js 的包管理工具。
- `install` 根据 `package.json` 和 `package-lock.json` 安装 Hexo 依赖。

依赖已经在当前电脑安装过；以后更换电脑或删除 `node_modules` 后再运行即可。

## 五、本地预览

运行：

```powershell
npm.cmd run server
```

- `run` 表示运行 `package.json` 中定义的命令。
- `server` 会执行 `hexo server`，生成博客并启动本地服务器。

浏览器访问：

<http://localhost:4000>

保存 Markdown 后，Hexo 通常会自动重新生成；刷新浏览器即可。按 `Ctrl + C` 停止服务器。

Hexo 博客不能通过双击根目录 HTML 预览，因为根目录保存的是源文件，最终 HTML 需要由 Hexo生成。

## 六、新增文章

### 方法一：使用 Hexo 命令（推荐）

在项目目录运行：

```powershell
npx.cmd hexo new post "my-new-post"
```

- `npx.cmd` 运行项目中已经安装的命令。
- `hexo new` 新建内容。
- `post` 表示新建文章。
- `"my-new-post"` 是英文文件名，建议使用小写字母和连字符。

Hexo 会在 `source/_posts` 中创建文章。打开它，把顶部资料改成：

```yaml
---
title: 我的新文章
date: 2026-06-24 20:00:00
categories:
  - 生活
tags:
  - 随笔
  - 记录
description: 这段话会显示在首页文章卡片中。
---
```

两行 `---` 中间叫 Front Matter：

- `title`：中文文章标题。
- `date`：发布日期和时间。
- `categories`：文章分类。
- `tags`：文章标签，可以有多个。
- `description`：首页摘要。

第二行 `---` 后面开始写 Markdown 正文。

### 方法二：复制现有文章

复制 `source/_posts/slow-thinking.md`，改成新的英文文件名，然后修改所有资料和正文。不要让两篇文章使用完全相同的文件名。

## 七、Markdown 常用语法

```markdown
## 二级标题

这是普通段落。

**粗体** 和 *斜体*

- 无序列表
- 第二项

1. 有序列表
2. 第二项

> 这是一段引用。

[链接文字](https://example.com)

![图片说明](/images/photo.jpg)

`行内代码`
```

代码块使用三个反引号包住，并可在开头写语言名称，例如 `javascript`。段落之间要留一个空行。

## 八、添加图片

把图片放进：

```text
source/images/
```

例如 `source/images/sunset.jpg`，文章中写：

```markdown
![傍晚的天空](/images/sunset.jpg)
```

建议图片名称使用小写英文、数字和连字符，不使用空格。GitHub 区分文件名大小写。

## 九、修改网站信息

打开根目录 `_config.yml`：

```yaml
title: 微光手记
subtitle: 记录好奇，也记录生活
description: 网站介绍
author: kkklovegip
url: https://kkklovegip.github.io
```

- 修改名称、介绍和作者时，只改冒号右侧内容。
- 冒号后必须保留一个空格。
- `url` 已对应当前 GitHub Pages 地址，不要随意改变。

主题菜单、头像、首页图片、侧边栏和 GitHub 地址位于 `themes/butterfly/_config.yml`。这个文件来自你提供的 `hexo-theme-butterfly-dev.zip`，当前版本为 5.5.5。

## 十、主题代码组成

### HTML/Pug 模板

`themes/butterfly/layout` 中的 `.pug` 文件最终会生成 HTML：

- `index.pug`：首页文章列表。
- `post.pug`：文章详情页。
- `archive.pug`：归档页。
- `category.pug` 和 `tag.pug`：分类与标签页。
- `includes/`：导航、页脚、侧边栏、评论等可复用组件。

Pug 使用缩进表示 HTML 的层级。Butterfly 会自动遍历 Hexo 中的文章，因此新增 Markdown 后无需修改首页模板。

### CSS 样式

Butterfly 使用 Stylus 编写样式，文件位于 `themes/butterfly/source/css/`。Hexo 构建时，`hexo-renderer-stylus` 会将它们转换成浏览器能够读取的 CSS。

### JavaScript

`themes/butterfly/source/js/` 包含导航、侧边栏、图片预览、代码块等交互功能。写文章不需要修改这些文件。

## 十一、检查构建

发布前可以运行：

```powershell
npm.cmd run clean
npm.cmd run build
```

- `clean` 删除旧缓存和生成结果。
- `build` 执行 `hexo generate`，在 `public` 中生成最终网站。

看到 `Generated` 且没有红色错误，就代表构建成功。

## 十二、第一次设置 GitHub Pages

仓库已经连接到：

```text
https://github.com/kkklovegip/kkklovegip.github.io.git
```

推送新项目后，在 GitHub 仓库中：

1. 点击 **Settings**。
2. 左侧选择 **Pages**。
3. 在 **Build and deployment** 下，将 **Source** 选择为 **GitHub Actions**。

不要再选择 `Deploy from a branch`，因为 Hexo 源码不是可以直接发布的最终 HTML。项目中的 `.github/workflows/pages.yml` 会自动安装依赖、运行 Hexo 并部署 `public`。

## 十三、发布到 GitHub

每次写完并预览后运行：

```powershell
cd D:\codex_blog
git status
git add .
git commit -m "发布新文章"
git push
```

- `git status`：查看发生变化的文件，不会修改任何内容。
- `git add .`：把当前项目内的修改放进待提交区。
- `git commit -m "发布新文章"`：在电脑上保存一个版本并添加说明。
- `git push`：把新提交上传到 GitHub。

推送后打开仓库顶部的 **Actions**。工作流出现绿色对勾后，访问：

<https://kkklovegip.github.io>

第一次部署或缓存更新通常需要几分钟。如果看到旧页面，按 `Ctrl + F5` 强制刷新。

## 十四、常见问题

### `npm` 无法加载 `npm.ps1`

使用 `npm.cmd`，不要修改 PowerShell 执行策略。

### `Cannot find module`

依赖没有安装或不完整，运行：

```powershell
npm.cmd install
```

### 端口 4000 被占用

先找到之前运行服务器的终端并按 `Ctrl + C`，或者运行：

```powershell
npx.cmd hexo server -p 4001
```

然后访问 <http://localhost:4001>。

### 新文章没有显示

检查文件是否在 `source/_posts`；Front Matter 是否由两行 `---` 包住；日期格式是否正确；文件是否保存。

### GitHub Actions 构建失败

进入仓库 **Actions**，点开红色任务查看具体步骤。常见原因是 `_config.yml` 或文章 Front Matter 缩进错误。YAML 使用空格缩进，不能使用 Tab。

### `nothing to commit`

Git 没检测到新修改。确认 VS Code 已按 `Ctrl + S` 保存文件。
