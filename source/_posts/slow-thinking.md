---
title: 用来试试水我的第一篇blog
date: 2026-06-20 09:00:00
update: 2026-06-25 15:42:00
categories:
  - 测试
tags:
  - test
description: 改动了source/_page下的md文件。
---

> 问题一：改动了categories，tags，问题是只是改动这里，标签就会自动加上吗？我对此表示好奇。这究竟是Page Front-matter还是Post Front-matter？

## 答案一

直接写在_posts下的md文件是Post Front-matter，直接给改动开头的

```markdown
title: 用来试试水我的第一篇blog
date: 2026-06-20 09:00:00
update: 2026-06-25 15:42:00
categories:
  - 测试
tags:
  - test
description: 改动了`source/_page`下的md文件。
```
不管是categories还是tags，都会自动生成。

> 问题二：新增加的文章，是直接接在同个md文件里写还是新生成文件再写

## 答案二

正常来讲肯定是新建一个md文件啊，动动脑子就知道了

> 问题三：公告，目录，以及首页的导航栏究竟在哪里修改？

## 答案三
在`themes\butterfly\source\config.yml`里修改。它的逻辑是`source`中生成的文件夹下的`index.md`其实是网页page，所以page front-matter指的就是这里，type：指向不同的内容，所以其实内容是type里指向的，`index.md`其实只是网页名称等的设置，需要type来绑定内容。

> 问题四：如何直接获取网站的的图标链接

## 答案四

用 favicon 服务，比如` https://www.google.com/s2/favicons?domain=网站域名&sz=128`