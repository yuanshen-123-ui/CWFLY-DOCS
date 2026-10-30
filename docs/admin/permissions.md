# 权限系统

## 统一权限字段

平台统一使用 `fsdLevel` 作为权限控制字段。`rating` 已合并至 `fsdLevel`，不再单独使用。

## 权限节点矩阵

| 权限节点 | 功能说明 | 最低 FSD Level 要求 |
|---------|---------|-------------------|
| STAFF | 职员管理与公告发布 | 9（I1） |
| CONTENT | 活动与论坛内容管理 | 9（I1） |
| FLIGHTPLAN | 飞行计划管理 | 9（I1） |
| TICKET | 工单处理 | 9（I1） |
| CONTROLLER | 管制员管理与评级 | 10（I2） |
| NOTIFICATION | 通知推送与培训管理 | 10（I2） |
| LOG | 日志查看与审计 | 10（I2） |
| ONLINE | 在线用户管理 | 10（I2） |
| USER | 用户账号管理 | 12（SUP） |
| PERMISSION | 权限配置 | 12（SUP） |
| CONFIG | 系统配置 | 12（SUP） |