# 推送事件

- [`disaster` 灾害预警](#disaster-)
- [`temblor` 地震广播](#temblor-)
- [`article` 新闻资讯](#article-)
- [`kaifu` 开服监控](#kaifu-)
- [`fuyao` 扶摇播报 <sup>`vip`</sup>](#fuyao-)
- [`horse` 马驹播报 <sup>`vip`</sup>](#horse-)
- [`firework` 烟花播报 <sup>`vip`</sup>](#firework-)
- [`serendipity` 奇遇播报 <sup>`vip`</sup>](#serendipity-)

### `disaster` 气象灾害

#### 推送数据

###### 数据源: [中国天气网](http://www.weather.com.cn/alarm/alarm_list.shtml)

| 字段名             | 数据类型                 | 说明   |
|-----------------|----------------------|------|
| `title`         | string               | 信号标题 |
| `content`       | string               | 信号内容 |
| `signalPicUrl`  | string               | 信号图例 |
| `defaultPicUrl` | string               | 默认图例 |
| `moreInfo`      | array <sup>`1`</sup> | 更多信息 |
| `issueTime`     | int(10)              | 发布时间 |
| `relieveTime`   | int(10)              | 解除时间 |

###### moreInfo <sup>`1`</sup>

| 字段名        | 数据类型   | 说明  |
|------------|--------|-----|
| `province` | string | 省份  |
| `city`     | string | 城市  |
| `area`     | string | 地区  |
| `type`     | string | 类别  |
| `level`    | string | 等级  |

### `temblor` 地震广播

#### 推送数据

###### 数据源: [中国地震台网](http://www.ceic.ac.cn/speedsearch?time=2)

| 字段名         | 数据类型    | 说明  |
|-------------|---------|-----|
| `depth`     | int     | 深度  |
| `level`     | string  | 震级  |
| `latitude`  | string  | 纬度  |
| `longitude` | string  | 经度  |
| `location`  | string  | 位置  |
| `time`      | int(10) | 时间  |

### `article` 新闻资讯

#### 推送数据

| 字段名     | 数据类型                     | 说明  |
|---------|--------------------------|-----|
| `title` | string                   | 标题  |
| `link`  | string                   | 链接  |
| `type`  | enum('press','announce') | 类别  |
| `time`  | int(10)                  | 时间  |

### `kaifu` 开服监控

#### 推送数据

| 字段名          | 数据类型                       | 说明   |
|--------------|----------------------------|------|
| `gameRegion` | string                     | 游戏大区 |
| `mianServer` | string                     | 主服务器 |
| `status`     | enum('opening','maintain') | 当前状态 |
| `opening`    | int(10)                    | 开放时间 |
| `maintain`   | int(10)                    | 维护时间 |
| `address`    | string                     | 远程地址 |
| `port`       | int                        | 远程端口 |

### `fuyao` 扶摇播报

### `horse` 马驹播报

### `firework` 烟花播报

### `serendipity` 奇遇播报
