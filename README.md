# 瑞治网

## 部署指南

1. Fork 本仓库
2. 根据下方的自定义指南调整配置
3. 在 Cloudflare Pages 中基于本仓库创建一个新的 Pages 项目并部署，即可访问。

## 自定义指南

### 自定义站点信息

- 站点信息配置在 `src/config/site.ts` 中
- `siteTitle`：站点标题
- `footerText`：页脚文字

### 自定义网站介绍

- 网站介绍配置在 `src/config/introduction.ts` 中
- `introduction`：网站介绍，支持大部分 Markdown 语法

### 自定义主题

- 主题配置在 `src/config/theme.ts` 中
- 可更改浅色模式和深色模式下的`primary`和`secondary`颜色
- 为了致敬经典，使用**苍耳与墨**字体，如需更改字体，请在 `src/config/theme.ts` 中修改 `fontFamily` 的值

### 启用短链接功能

- 本站默认启用短链接功能，假设有一个正在运行的短链接服务，地址为 `${shortLinkBaseUrl}`，那么在访问本站的`/xx`时，会自动跳转到 `${shortLinkBaseUrl}/xx`
- 如果不需要短链接功能，请在 `src/config/site.ts` 中将 `isShortLinkEnabled` 设置为 `false`

### 自定义链接

- 链接配置在 `src/config/nav.ts` 中
- 链接组可配置`title`、`desc` 和 `items`
  - `title`：链接组标题
  - `desc`：链接组描述
  - `items`：链接项列表
- 链接项可配置`name`、`desc` 和 `link`
  - `name`：链接名称
  - `desc`：链接描述
  - `link`：链接地址
