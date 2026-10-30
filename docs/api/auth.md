# 认证 API

## 登录

```http
POST /api/auth/login
```

**请求体**

```json
{
  "cid": "0000",
  "password": "your_password"
}
```

**响应示例**

```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "cid": "0000",
      "username": "管理员",
      "role": "admin",
      "fsdLevel": 13,
      "fsdType": "BOTH"
    }
  }
}
```

## 注册

```http
POST /api/auth/register
```

**请求体**

```json
{
  "cid": "1234",
  "username": "MyName",
  "password": "MyP@ssw0rd",
  "email": "user@example.com"
}
```

**响应示例**

```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "cid": "1234",
      "username": "MyName",
      "role": "user",
      "fsdLevel": 1
    }
  }
}
```