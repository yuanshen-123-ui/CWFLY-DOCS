# CWFLY-DOCS

CWFLY 官方文档站（**VitePress**）：新人指南、管制手册、航班计划与 FSD 使用说明、API 文档。

## 本地开发
```bash
npm install
npm run dev        # 本地预览
npm run build      # 产物：docs/.vitepress/dist
npm start          # 生产静态服务
```

## 目录
```
docs/              文档内容（Markdown）
docs/.vitepress/   站点配置与主题
public/            静态资源
server.js          生产静态服务
```

## 生产
Nginx 配置见 CWFLY-DEPLOY 仓库 `nginx/nginx-docs.conf`，线上域名 `docs.cwflysim.cn`。
---
## 相关仓库

| 仓库 | 内容 |
|---|---|
| [CWFLY-WEB](https://github.com/yuanshen-123-ui/CWFLY-WEB) | 网站前后端（Vue3 + Express/Prisma） |
| [CWFLY-FSD](https://github.com/yuanshen-123-ui/CWFLY-FSD) | FSD 服务器（Python asyncio，FSD 协议） |
| [CWFLY-ATC](https://github.com/yuanshen-123-ui/CWFLY-ATC) | 管制中心（ATC 席位/雷达/排班） |
| [CWFLY-BOT](https://github.com/yuanshen-123-ui/CWFLY-BOT) | QQ 机器人（OneBot / NapCat） |
| [CWFLY-DOCS](https://github.com/yuanshen-123-ui/CWFLY-DOCS) | 文档站（VitePress） |
| [CWFLY-DEPLOY](https://github.com/yuanshen-123-ui/CWFLY-DEPLOY) | 部署脚本 / Nginx / SQL 迁移 |

> 本仓库由 CWFLY 主仓库于 2026-10-30 拆分而来，初始提交为当时快照（不含历史）。