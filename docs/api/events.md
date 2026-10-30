# 活动 API

## 获取活动列表

```http
GET /api/events
```

返回所有已发布的活动列表，包含活动标题、日期、起降机场等信息。

## 获取活动详情

```http
GET /api/events/:id
```

返回指定活动的详细信息，包括航路、NOTAM、管制席位设置等。

## 报名活动

```http
POST /api/events/:id/register
```

**认证要求**：需要 Bearer Token

## 活动签到

```http
POST /api/events/:id/checkin
```

**认证要求**：需要 Bearer Token

在活动当天使用，完成签到后即可参与连飞。