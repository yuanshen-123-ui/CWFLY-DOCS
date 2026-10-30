# API 文档

## 基础信息

- **Base URL**：`http://localhost:3000/api`
- **认证方式**：Bearer Token (JWT)
- **Content-Type**：`application/json`

## 通用响应格式

```json
{
  "success": true,
  "data": { ... },
  "message": "请求成功"
}
```

## 错误码说明

| 状态码 | 说明 |
|--------|------|
| 200 | 请求成功 |
| 400 | 请求参数错误或格式有误 |
| 401 | 未登录或 Token 已过期 |
| 403 | 权限不足 |
| 404 | 请求的资源不存在 |
| 409 | 资源冲突（如重复注册） |
| 500 | 服务器内部错误 |
