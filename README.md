# 微光手记

一个简洁、响应式的中文个人博客模板，支持深色模式，无需构建工具，可直接部署到 GitHub Pages。

## 本地预览

直接用浏览器打开 `index.html`，或在本目录启动静态服务器：

```powershell
python -m http.server 8000
```

然后访问 <http://localhost:8000>。

## 修改内容

- 在 `index.html` 中替换名字、自我介绍、文章和联系方式。
- 复制 `article.html` 来新增文章，再修改首页文章卡片的链接。
- 在 `styles.css` 顶部修改颜色变量，可快速更换整站配色。
- 将 `https://github.com/your-username` 替换为你的 GitHub 地址。

## 部署

推送到 GitHub 仓库后，在仓库的 **Settings → Pages** 中将来源设置为 **Deploy from a branch**，选择 `main` 分支和 `/ (root)` 目录并保存。
