# 飞行计划 API

## 提交飞行计划

```http
POST /api/flightplans
```

**认证要求**：需要 Bearer Token

**请求体**

```json
{
  "callsign": "CCA1234",
  "aircraft": "B738",
  "dep": "ZBAA",
  "arr": "ZSSS",
  "flightType": "IFR"
}
```

**响应示例**

```json
{
  "success": true,
  "data": {
    "id": "fp_001",
    "callsign": "CCA1234",
    "status": "active"
  }
}
```

## 获取飞行计划列表

```http
GET /api/flightplans
```

## 获取单个飞行计划

```http
GET /api/flightplans/:id
```

## FSD 在线状态

```http
GET /api/flightplans/fsd/online
```

返回当前 FSD 网络中的所有在线用户列表。