# 瑞治导航站

一个轻量、美观、功能强大的书签导航站，支持多种自定义，适合个人或团队使用。

## ✨ 项目亮点

- ✅ 高度可定制：支持图标、标题、介绍、主题、链接等全面配置
- 🌗 深色 / 浅色模式切换：自动适配系统主题，提升阅读体验
- 🔍 搜索功能：快速查找书签，不再翻找一堆链接
- ☁️ 无服务器，部署方便：基于静态页面，配合 Cloudflare Pages 一键上线

## 🚀 快速部署指南

1. Fork 本仓库
2. 根据下方的「自定义指南」进行个性化配置
3. 前往 [Cloudflare Pages](https://pages.cloudflare.com/)
   - 创建新项目，选择本仓库
   - 部署时预设选择“React(Vite)”
4. 部署完成后即可访问你专属的导航站！

## ⚙️ 自定义指南

### 🎨 自定义网站图标

修改 `public/favicon.svg` 文件，即可替换站点图标。

### 🏠 自定义站点信息

编辑 `src/config/data/site.json` 文件：

- `siteTitle`：站点标题
- `footerText`：页脚文字

#### 🔁 短链接跳转

项目通过 `public/_redirects` 配置短链接跳转，部署至 Cloudflare Pages 后自动生效。  
访问 `/xx` 时将 301 跳转至 `https://go.cos.tg/xx`。

如需修改跳转目标，编辑 `public/_redirects` 文件即可。

如果无需使用短链接功能，直接删除 `public/_redirects` 文件即可。

### 📖 自定义网站介绍

编辑 `src/config/data/introduction.md` 文件：

- 支持 Markdown 格式，可用于个人介绍、站点说明等。

### 🎨 自定义主题风格

编辑 `src/config/theme.ts` 文件：

- 可自定义浅色模式和深色模式下的 `primary` 与 `secondary` 主题色
- 默认使用经典的**仓耳与墨**字体，如需替换请修改 `fontFamily` 字段

### 🔗 自定义导航链接

编辑 `src/config/data/nav.json` 文件：

- 每个链接组支持：
  - `title`：标题
  - `desc`：描述
  - `items`：链接项列表
- 每个链接项支持：
  - `name`：链接名称
  - `desc`：链接说明
  - `link`：跳转地址
