# 机器人配置

## 环境变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `BOT_WS_URL` | OneBot 反向 WebSocket 地址 | `ws://localhost:8080` |
| `GROUP_WHITELIST` | 白名单群号列表（逗号分隔） | 空（全部允许） |
| `API_BASE` | 后端 API 基础地址 | `http://localhost:3000/api` |
| `RATE_LIMIT` | 单用户调用频率限制（秒） | `5` |

## OneBot 配置示例

需在 OneBot 客户端（如 go-cqhttp）中配置反向 WebSocket：

```yaml
# go-cqhttp config.yml
universal: ws://your-server:8080/onebot
```