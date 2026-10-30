# QQ 机器人

## 概述

飞控机器人是基于 OneBot 11 协议的 QQ 群机器人，为群成员提供飞行计划查询、气象报文查询、连飞活动等功能的快捷访问入口。

## 技术栈

- **运行环境**：Node.js
- **通信协议**：OneBot 11 协议（反向 WebSocket）
- **依赖库**：ws、csv-parse

## 快速启动

```bash
cd bot
npm install
# 配置 .env 文件后
npm start
```

## 命令列表

| 命令 | 说明 | 示例 |
|------|------|------|
| `/fp <航班号>` | 查询飞行计划 | `/fp CCA1234` |
| `/metar <ICAO>` | 查询 METAR 气象报文 | `/metar ZBAA` |
| `/taf <ICAO>` | 查询 TAF 气象预报 | `/taf ZSSS` |
| `/online` | 查看当前在线用户 | `/online` |
| `/event` | 查看近期连飞活动 | `/event` |
| `/chart <ICAO>` | 查询机场航图 | `/chart ZGGG` |
| `/help` | 显示帮助信息 | `/help` |

## 配置说明

```ini
BOT_WS_URL=ws://localhost:8080
GROUP_WHITELIST=123456,789012
API_BASE=http://localhost:3000/api
RATE_LIMIT=5
```

> 使用限制：仅限白名单群组使用，部分命令有调用频率限制（默认 5 秒/次）。