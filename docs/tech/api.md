# 接口文档

## 基础信息

- **Base URL**：`http://localhost:3000/api`
- **认证方式**：Bearer Token (JWT)
- **Content-Type**：`application/json`

## 通用响应格式

```json
{
  "success": true,
  "data": { ... },
  "message": "..."
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

## 认证 API

### 登录

```http
POST /api/auth/login
```

请求体：
```json
{
  "cid": "0000",
  "password": "your_password"
}
```

### 注册

```http
POST /api/auth/register
```

请求体：
```json
{
  "cid": "1234",
  "username": "MyName",
  "password": "MyP@ssw0rd",
  "email": "user@example.com"
}
```

## 用户 API

| 方法 | 路径 | 说明 | 认证 |
|------|------|------|------|
| GET | /api/user/profile | 获取当前用户信息 | 是 |
| PUT | /api/user/profile | 更新当前用户信息 | 是 |

## 飞行计划 API

| 方法 | 路径 | 说明 | 认证 |
|------|------|------|------|
| GET | /api/flightplans | 获取飞行计划列表 | 否 |
| POST | /api/flightplans | 提交飞行计划 | 是 |
| GET | /api/flightplans/:id | 获取单个飞行计划 | 否 |
| GET | /api/flightplans/fsd/online | 获取 FSD 在线状态 | 否 |

## 活动 API

| 方法 | 路径 | 说明 | 认证 |
|------|------|------|------|
| GET | /api/events | 获取活动列表 | 否 |
| GET | /api/events/:id | 获取活动详情 | 否 |
| POST | /api/events/:id/register | 报名活动 | 是 |
| POST | /api/events/:id/checkin | 活动签到 | 是 |