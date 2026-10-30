# 报文解读

## 一、什么是 METAR

METAR（Meteorological Aerodrome Report）是机场例行气象观测报告，通常每小时发布一次（UTC 时间整点前后），反映机场当前天气状况。SPECI 是特殊观测报告，在天气显著变化时发布。

## 二、报文结构

一份完整的 METAR 报文按顺序包含以下部分：

```
METAR ZSSS 081400Z 29005MPS 260V320 9999 BKN016 18/15 Q1019 BECMG TL1540 BKN013=
```

## 三、逐段解读

| 报文部分 | 解读 | 说明 |
|---------|------|------|
| `METAR` | 报文类型 | METAR（例行报告）或 SPECI（特殊报告） |
| `ZSSS` | 机场 ICAO 代码 | 上海浦东国际机场 |
| `081400Z` | 观测日期和时间 | 8 日 14:00 UTC（协调世界时） |
| `29005MPS` | 风向风速 | 风向 290°，风速 5 米/秒 |
| `260V320` | 风向变化范围 | 风向在 260° 至 320° 之间变化 |
| `9999` | 能见度 | 10 公里及以上（9999 表示 ≥ 10 km） |
| `BKN016` | 云层信息 | 多云（BKN），云底高 1600 英尺 |
| `18/15` | 温度/露点 | 温度 18°C，露点 15°C |
| `Q1019` | 修正海压 | 1019 hPa（QNH） |
| `BECMG TL1540 BKN013` | 趋势预报 | 预计到 15:40 变为 BKN013（多云 1300 英尺） |
| `=` | 报文结束 | 报文终止符 |

## 四、常用天气代码

| 代码 | 含义 | 代码 | 含义 |
|------|------|------|------|
| BR | 轻雾（Mist） | FG | 雾（Fog） |
| RA | 雨（Rain） | DZ | 毛毛雨（Drizzle） |
| SN | 雪（Snow） | TS | 雷暴（Thunderstorm） |
| HZ | 霾（Haze） | FU | 烟（Smoke） |
| SA | 沙尘（Sand） | DU | 扬尘（Dust） |
| SQ | 飑（Squall） | SH | 阵雨（Showers） |

## 五、云量代码

| 代码 | 含义 | 说明 |
|------|------|------|
| SKC | Sky Clear | 晴天，无云 |
| FEW | Few | 少云，1–2 个八分量 |
| SCT | Scattered | 疏云，3–4 个八分量 |
| BKN | Broken | 多云，5–7 个八分量 |
| OVC | Overcast | 阴天，8 个八分量 |
| VV | Vertical Visibility | 垂直能见度（有雾/云接地时）|

## 六、趋势预报（TAF）

TAF（Terminal Aerodrome Forecast）是机场天气预报，每 6 小时发布一次。常用变化指示码：

| 代码 | 含义 |
|------|------|
| BECMG | 逐渐变化（预计在指定时间段内） |
| TEMPO | 暂时变化（持续时间 < 1 小时） |
| FM | 从某时间点开始变化 |
| TL | 直到某时间点 |
| AT | 在某时间点 |
| PROB30/40 | 概率 30%/40% |
| NOSIG | 未来两小时无明显变化 |

## 七、练习资源

- [aviationweather.gov](https://aviationweather.gov/data/metar/) — 查询全球机场 96 小时内的 METAR/TAF 报文
- [metar-taf.com](https://metar-taf.com/) — METAR/TAF 带解读翻译
