# 飞控机器人

## 概述

飞控机器人是基于 OneBot 11 协议的 QQ 群机器人，为群成员提供飞行计划查询、气象报文查询、连飞活动等功能的快捷访问入口。

## 技术栈

- **运行环境**：Node.js
- **通信协议**：OneBot 11 协议（反向 WebSocket）
- **依赖库**：ws、csv-parse

## 启动方式

```bash
cd bot
npm install
# 配置 .env 文件后
npm start
```

## 配置

创建 `.env` 文件并填写以下内容：

```ini
BOT_WS_URL=ws://localhost:8080
GROUP_WHITELIST=123456,789012
API_BASE=http://localhost:3000/api
RATE_LIMIT=5
```