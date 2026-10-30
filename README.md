# CWFLY-DOCS · 官方文档站

CWFLY 模拟飞行社区的**官方文档站**，基于 **VitePress** 构建。内容覆盖新人指南、管制手册、FSD 使用说明、机器人命令、API 文档、开发规范与合规条款。

- 🌐 线上：https://docs.cwflysim.cn

---

## 一、文档结构

| 目录 | 内容 |
|---|---|
| `general/` | 通用：账号体系、行为准则、社区规则、隐私政策、Cookie 政策 |
| `guide/` | 用户指南：新人上手、申请流程、管理端申请与权限 |
| `fsd/` | FSD 连线：客户端（FSD9）使用、服务器说明与连接参数 |
| `bot/` | QQ 机器人：命令列表、配置说明 |
| `api/` | 开放 API：认证、用户、飞行计划、活动 |
| `admin/` | 管理后台：用户管理、权限、申请审批 |
| `ctd/` | 管制培训资料：空域、航图（eAIP）、考试、FIRA、面试、学习中心、METAR、晋升、无线电通话、RVSM、SOP、大纲 |
| `ptd/` | 飞行员培训资料（对应机组训练体系） |
| `tech/` | 技术文档：架构、部署、接口说明 |
| `contribute/` | 贡献指南：开发流程、文档写作规范 |

---

## 二、技术栈

| 项 | 说明 |
|---|---|
| 框架 | VitePress（Vue 3 + Markdown 静态站点） |
| 主题 | 默认主题 + 自定义样式（`docs/.vitepress/theme`） |
| 资源 | `public/`（logo、favicon、图片） |
| 生产服务 | `server.js`（静态服务，供 PM2/Node 托管） |

---

## 三、本地开发

```bash
npm install
npm run dev        # 本地预览（热更新）
npm run build      # 产物：docs/.vitepress/dist
npm run preview    # 预览构建产物
npm start          # 生产静态服务
```

Windows 下也可双击 `start.bat`。

---

## 四、写作约定

- 每个目录必须有 `index.md`（作为该章节入口）
- 标题从 `# 一级标题` 开始；章节内用 `##`/`###`
- 代码块标注语言（`bash`/`ini`/`json`/`js` 等）
- 图片放 `public/`，用绝对路径 `/xxx.png` 引用
- 涉及密钥/口令的示例必须使用占位符（如 `<your-token>`），**禁止写入真实值**
- 新增章节后需在 `docs/.vitepress/config` 的侧边栏中登记

---

## 五、部署

```bash
npm run build
# 将 docs/.vitepress/dist 同步到服务器
pm2 reload cwfly-docs     # 若用 Node 服务托管
```

- 静态目录：`/opt/cwfly/docs/dist`
- 发布后注意 CDN/浏览器缓存，必要时带版本号强刷

---

## 六、常见问题

| 现象 | 处理 |
|---|---|
| 侧边栏缺页面 | 检查 `.vitepress/config` 的 sidebar 是否登记 |
| 本地正常、线上 404 | 路径大小写不一致（Linux 区分大小写） |
| 图片不显示 | 放在 `public/` 且以 `/` 开头引用 |
| 构建失败 | Node 版本 ≥ 18；`npm ci` 后重试 |

---

## 七、相关仓库

| 仓库 | 内容 |
|---|---|
| [CWFLY-WEB](https://github.com/yuanshen-123-ui/CWFLY-WEB) | 网站前后端 |
| [CWFLY-FSD](https://github.com/yuanshen-123-ui/CWFLY-FSD) | FSD 连线服务器 |
| [CWFLY-ATC](https://github.com/yuanshen-123-ui/CWFLY-ATC) | 管制中心（其 `docs/` 为管制资料中心，与本仓库定位不同） |
| [CWFLY-BOT](https://github.com/yuanshen-123-ui/CWFLY-BOT) | QQ 机器人 |

> 本仓库由 CWFLY 主仓库于 2026-10-30 拆分而来，初始提交为当时快照（不含历史）。
