# 航图识读

## 一、航图基础要素

### 升降带

升降带（Strip）是机场内用于航空器起飞和降落的指定区域，在航图中以明确边界标示。

### 频率

航图中标注的各管制席位无线电频率，包括：
- 塔台频率（TWR）
- 地面频率（GND）
- 放行频率（DEL）
- 进近频率（APP）
- 区域频率（CTR）

### 航图信息

每张航图的标题栏包含：
- **航图编号** — 唯一标识
- **发行日期** — 确认航图版本有效性
- **与上期航图相比的更改部分** — 关注变更内容

### 特殊图例

| 图例 | 含义 |
|------|------|
| HS | Hard Stand（硬质停机位） |
| HP | Holding Point（等待点） |

## 二、进近导航

### ILS（仪表着陆系统）

- **盲降频率** — ILS 系统的无线电频率
- **航道** — ILS 航道方向（以磁方位表示）

### VOR 导航

- **飞跃（Fly Over）** — 航空器飞越导航台时转弯

### RNAV 导航

- **飞跃（Fly Over）** — 飞越航路点时转弯
- **旁切（Fly By）** — 在到达航路点前提前转弯，不飞越该点

## 三、高度相关概念

| 缩写 | 全称 | 说明 |
|------|------|------|
| TA | Transition Altitude | 过渡高度，以平均海平面为基准 |
| TL | Transition Level | 过渡高度层，以标准气压 1013 hPa 为基准 |
| TH | Transition Height | 过渡高，以机场标高为基准 |
| DA | Decision Altitude | 决断高度，以平均海平面为基准 |
| DH | Decision Height | 决断高，以跑道入口标高为基准 |

> DA 与 DH 的区别：DA 以海平面为基准，DH 以跑道入口标高为基准。精密进近中如 ILS 使用 DH，非精密进近如 VOR/DME 使用 MDA（最低下降高度）。

## 四、进近航段

进近程序由以下五大航段组成：

1. **进场段（Arrival）** — 从航路到起始进近定位点
2. **起始进近段（Initial Approach）** — 从 IAF 到 IF
3. **中间进近段（Intermediate Approach）** — 从 IF 到 FAF
4. **最后进近段（Final Approach）** — 从 FAF 到跑道
5. **复飞段（Missed Approach）** — 中止进近后的复飞程序

### 关键定位点

- **IAF（Initial Approach Fix）** — 起始进近定位点
- **IF（Intermediate Fix）** — 中间进近定位点（有时与 IAF 重合）
- **FAF（Final Approach Fix）** — 最后进近定位点

## 五、空域标注

| 缩写 | 全称 | 说明 |
|------|------|------|
| MVA | Minimum Vectoring Altitude | 最低雷达引导高度 |
| MSA | Minimum Safe Altitude | 最低安全高度，以导航台为中心 25 海里半径 |
| SID | Standard Instrument Departure | 标准仪表离场 |
| STAR | Standard Terminal Arrival Route | 标准仪表进场 |

## 六、注意事项

- 航图中部分要素**不按比例绘制**，仅供参考位置关系。
- **复飞航段**须仔细阅读，明确复飞程序和高度要求。
- 航图定期更新，务必使用最新版本。
