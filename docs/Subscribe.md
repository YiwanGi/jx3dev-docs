# 推送事件

- [`disaster` 气象灾害](#disaster)
- [`temblor` 地震广播](#temblor)
- [`article` 新闻资讯](#article)
- [`kaifu` 开服监控](#kaifu)
- [`fuyao` 扶摇播报 <sup>`vip` `dev`</sup>](#fuyao)
- [`horse` 马驹播报 <sup>`vip` `dev`</sup>](#horse)
- [`firework` 烟花播报 <sup>`vip` `dev`</sup>](#firework)
- [`serendipity` 奇遇播报 <sup>`vip` `dev`</sup>](#serendipity)
- [`systemMsg` 系统消息 <sup>`vip` `dev`</sup>](#systemMsg)
- [`playerMsg` 玩家消息 <sup>`vip` `dev`</sup>](#playerMsg)

### `disaster`

##### 气象灾害

:::tip
该 Event 无需自定义数据且无回执数据。
:::

#### 推送数据

###### 数据取自 [中国天气网](http://www.weather.com.cn/)

| 字段名    | 数据类型   | 说明         |
|--------|--------|------------|
| `pic`  | string | 图例(base64) |
| `txt`  | string | 内容         |
| `time` | string | 时间         |

### `temblor`

##### 地震广播

:::tip
该 Event 无需自定义数据且无回执数据。
:::

#### 推送数据

###### 数据取自 [中国地震台网](http://news.ceic.ac.cn/)

| 字段名         | 数据类型   | 说明         |
|-------------|--------|------------|
| `depth`     | int    | 深度         |
| `level`     | string | 震级         |
| `latitude`  | string | 纬度         |
| `longitude` | string | 经度         |
| `location`  | string | 位置         |
| `time`      | string | 时间         |
| `map`       | string | 地图(base64) |
| `did`       | string | DID        |

### `article`

##### 新闻资讯

:::tip
该 Event 无需自定义数据且无回执数据。
:::

#### 推送数据

| 字段名     | 数据类型   | 说明        |
|---------|--------|-----------|
| `date`  | string | 日期(XX/XX) |
| `class` | string | 分类        |
| `title` | string | 标题        |
| `link`  | string | 链接        |

### `kaifu`

##### 开服监控

#### 自定义数据

| 字段名      | 数据类型     | 默认值 | 说明  | 必须  |
|----------|----------|-----|-----|:---:|
| `server` | string[] | -   | 服务器 |  √  |

#### 回执数据

| 字段名      | 数据类型     | 说明  |
|----------|----------|-----|
| `server` | string[] | 服务器 |

#### 推送数据

| 字段名        | 数据类型                       | 说明   |
|------------|----------------------------|------|
| `region`   | string                     | 游戏大区 |
| `server`   | string                     | 主服务器 |
| `status`   | enum('opening','maintain') | 当前状态 |
| `opening`  | int                        | 开服时间 |
| `maintain` | int                        | 维护时间 |
