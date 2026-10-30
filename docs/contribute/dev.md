# 开发指南

## 环境要求

| 工具 | 版本要求 |
|------|---------|
| Node.js | 18.0 或更高版本 |
| MySQL | 8.0 或更高版本 |
| npm / yarn | npm 9+ 或 yarn 1.22+ |
| Python | 3.10+（运行 fsd-py 时需要） |

## 本地开发环境搭建

```bash
# 1. 安装后端依赖
cd backend && npm install

# 2. 安装前端依赖
cd ../frontend && npm install

# 3. 确保 MySQL 数据库已启动

# 4. 启动后端开发服务器
cd ../backend && npm run dev

# 5. 启动前端开发服务器（新终端）
cd ../frontend && npm run dev
```

## 项目结构

```
backend/              # Node.js 后端
├── src/
│   ├── routes/       # API 路由定义
│   ├── middleware/    # 中间件（认证、权限等）
│   ├── services/     # 业务逻辑层
│   └── config/       # 配置文件
frontend/             # Vue 3 前端
├── src/
│   ├── views/        # 页面组件
│   ├── components/   # 通用组件
│   ├── store/        # 状态管理（Pinia）
│   └── api/          # API 调用层
bot/                  # QQ 机器人（Node.js）
fsd-py/               # Python FSD 服务器
```