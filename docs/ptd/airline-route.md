# 班机航路查询

## 一、什么是班机航路

班机航路（Airline Route）是指航空公司在特定航线上实际飞行的标准航路。了解标准航路可以帮助飞行员在提交飞行计划时更准确地填写航路信息。

## 二、查询工具

### 在线航路查询

| 工具 | 网址 | 说明 |
|------|------|------|
| SimBrief | [simbrief.com](https://www.simbrief.com/) | 综合飞行计划生成器，自动计算航路、燃油、备降场 |
| FlightAware | [flightaware.com](https://flightaware.com/) | 实时航班追踪与航路查询 |
| FlightRadar24 | [flightradar24.com](https://www.flightradar24.com/) | 全球航班实时位置与航路 |
| AIP SINISWIFT | [aips.siniswift.com](https://aips.siniswift.com/) | 中国民航航路查询 |
| EuroFPL | [eurofpl.eu](https://www.eurofpl.eu/) | 欧洲航路规划工具 |

### ICAO 机型代码查询

- [ICAO 8643 机型数据库](https://www.icao.int/publications/doc8643/pages/search.aspx) — 查询 ICAO 标准机型代码

## 三、查询方法

### 使用 SimBrief 查询航路

1. 访问 [SimBrief.com](https://www.simbrief.com/) 并登录（免费注册）。
2. 点击「New Flight」创建新飞行计划。
3. 输入起降机场 ICAO 代码、机型、巡航高度等信息。
4. 系统将自动生成推荐航路，包含航路点和航路段。
5. 可将生成的航路信息导入 CWFLY 平台。

### 查询历史航班航路

1. 访问 FlightAware 或 FlightRadar24。
2. 搜索特定航班号（如 CCA1234）。
3. 查看历史航班的实际航路轨迹。
4. 记录常用的航路点序列作为参考。

## 四、航路格式说明

飞行计划中的航路通常采用以下格式：

```
ZBAA SID BOTPU W47 LADIX W36 HCH W200 TF W174 ZSSS STAR
```

其中：
- **SID** — 标准仪表离场程序
- **W47、W36** — 航路段编号
- **BOTPU、LADIX** — 航路点名称
- **STAR** — 标准仪表进场程序
