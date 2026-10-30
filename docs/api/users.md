# 用户 API

## 获取用户信息

```http
GET /api/user/profile
```

**认证要求**：需要 Bearer Token

**响应示例**

```json
{
  "success": true,
  "data": {
    "cid": "1234",
    "username": "MyName",
    "role": "user",
    "fsdLevel": 1,
    "fsdType": "PILOT",
    "email": "user@example.com",
    "qq": "123456789",
    "createdAt": "2026-01-15T08:00:00.000Z"
  }
}
```

## 更新用户信息

```http
PUT /api/user/profile
```

**认证要求**：需要 Bearer Token

**请求体**

```json
{
  "email": "new@example.com",
  "qq": "987654321"
}
```

**响应示例**

```json
{
  "success": true,
  "message": "用户信息已更新"
}
```