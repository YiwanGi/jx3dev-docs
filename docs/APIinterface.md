# 数据接口

### controller：`api`

###### 温馨提示：若您的vip会员已经到期，使用http服务时，将会受到调用限速。

#### ws 限定

- [`push_subscribe` 推送订阅](#push_subscribe)
- [`push_unsubscribe` 取消订阅](#push_unsubscribe)
- [`get_push_list` 获取订阅列表](#get_push_list)

#### ws/http 通用

- [`get_article_list` 获取文章列表](#get_article_list)
- [`get_article_detail` 获取文章内容](#get_article_detail)
- [`get_server_search` 获取服务器信息](#get_server_search)
- [`get_server_status` 获取服务器状态](#get_server_status)
- [`get_task_activities` 获取任务活动](#get_task_activities)
- [`get_gold_proportion` 获取金价比例](#get_gold_proportion)
- [`get_sand_screenshot` 获取沙盘截图](#get_sand_screenshot)
- [`get_ornament_data` 获取装饰数据](#get_ornament_data)
- [`get_spectrum_data` 获取器物谱数据](#get_spectrum_data)
- [`get_career_macro` 获取职业宏命令](#get_career_macro)
- [`get_career_equip` 获取职业配装](#get_career_equip)
- [`get_exam_answer` 获取科举答案](#get_exam_answer)
- [`get_garden_flower` 获取家园花价 <sup>`dev`</sup>](#get_garden_flower)
- [`get_market_prices` 获取集市物价 <sup>`dev`</sup>](#get_market_prices)
- [`get_school_tactics` 获取门派阵法](#get_school_tactics)
- [`get_jjc_ranking_list` 获取JJC排行 <sup>`vip`</sup>](#get_jjc_ranking_list)
- [`get_jjc_statistics_list` 获取JJC统计 <sup>`vip`</sup>](#get_jjc_statistics_list)
- [`get_seniority_ranking_list` 获取资历排行 <sup>`vip`</sup>](#get_seniority_ranking_list)

### `push_subscribe`

##### 推送订阅

#### 参数

| 字段名      | 数据类型   | 默认值 | 说明    | 必须  |
|----------|--------|-----|-------|:---:|
| `event`  | string | -   | 事件名称  |  √  |

###### `event` 详见 [推送事件](Subscribe.md)

#### 响应数据

| 字段名      | 数据类型                      | 说明  |
|----------|---------------------------|-----|
| `status` | enum('success','failure') | 状态  |

### `push_unsubscribe`

##### 取消订阅

#### 参数

| 字段名      | 数据类型   | 默认值 | 说明    | 必须  |
|----------|--------|-----|-------|:---:|
| `event`  | string | -   | 事件名称  |  √  |

###### `event` 详见 [推送事件](Subscribe.md)

#### 响应数据

| 字段名      | 数据类型                      | 说明  |
|----------|---------------------------|-----|
| `status` | enum('success','failure') | 状态  |

### `get_push_list`

##### 获取订阅列表

:::tip
该 API 无需参数。
:::

#### 响应数据

| 字段名    | 数据类型                   | 说明   |
|--------|------------------------|------|
| `push` | bool                   | 推送闸门 |
| `list` | array[] <sup>`1`</sup> | 订阅列表 |

###### list <sup>`1`</sup>

| 字段名      | 数据类型   | 说明    |
|----------|--------|-------|
| `event`  | string | 事件名称  |
| `enable` | bool   | 开启订阅  |

### `get_article_list`

##### 获取文章列表

#### 参数

| 字段名    | 数据类型                               | 默认值       | 说明  | 必须  |
|--------|------------------------------------|-----------|-----|:---:|
| `type` | enum('allnews','press','announce') | `allnews` | 类别  |     |

#### 响应数据

| 字段名     | 数据类型                      | 说明  |
|---------|---------------------------|-----|
| `list`  | array[:20] <sup>`1`</sup> | 列表  |
| `count` | int                       | 计数  |

###### list <sup>`1`</sup>

| 字段名     | 数据类型                     | 说明  |
|---------|--------------------------|-----|
| `title` | string                   | 标题  |
| `link`  | string                   | 链接  |
| `type`  | enum('press','announce') | 类别  |
| `time`  | int(10)                  | 时间  |

### `get_article_detail`

##### 获取文章内容

#### 参数

| 字段名    | 数据类型   | 默认值 | 说明  | 必须  |
|--------|--------|-----|-----|:---:|
| `link` | string | -   | 链接  |  √  |

###### `link` 字段支持以下格式值

| 示例值                                                | 可变内容       |
|----------------------------------------------------|------------|
| `https://jx3.xoyo.com/show-2458-5432-1.html`       | `5432`,`1` | 
| `https://jx3.xoyo.com/announce/gg.html?id=1329184` | `1329184`  | 

#### 响应数据

| 字段名     | 数据类型   | 说明  |
|---------|--------|-----|
| `title` | string | 标题  |
| `date`  | string | 日期  |
| `con`   | string | 正文  |

### `get_server_search`

##### 获取服务器信息

#### 参数

| 字段名      | 数据类型   | 默认值 | 说明  | 必须  |
|----------|--------|-----|-----|:---:|
| `server` | string | -   | 服务器 |  √  |

#### 响应数据

| 字段名           | 数据类型                                            | 说明   |
|---------------|-------------------------------------------------|------|
| `gameRegion`  | string                                          | 游戏大区 |
| `mianServer`  | string                                          | 主服务器 |
| `subordinate` | string[]                                        | 从服务器 |
| `serverType`  | enum('mianServer','abbreviation','subordinate') | 归属类别 |
| `remoteInfo`  | array <sup>`1`</sup>                            | 远程信息 |

###### remoteInfo <sup>`1`</sup>

| 字段名       | 数据类型   | 说明   |
|-----------|--------|------|
| `address` | string | 远程地址 |
| `port`    | int    | 远程端口 |

### `get_server_status`

##### 获取服务器状态

#### 参数

| 字段名      | 数据类型   | 默认值 | 说明  | 必须  |
|----------|--------|-----|-----|:---:|
| `server` | string | -   | 服务器 |     |

#### 响应数据

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `list`  | array[] <sup>`1`</sup> | 列表  |
| `count` | int                    | 计数  |

###### list <sup>`1`</sup>

| 字段名          | 数据类型                       | 说明   |
|--------------|----------------------------|------|
| `gameRegion` | string                     | 游戏大区 |
| `mianServer` | string                     | 主服务器 |
| `status`     | enum('opening','maintain') | 当前状态 |
| `opening`    | int(10)                    | 开放时间 |
| `maintain`   | int(10)                    | 维护时间 |
| `address`    | string                     | 远程地址 |
| `port`       | int                        | 远程端口 |

### `get_task_activities`

##### 获取任务活动

#### 参数

| 字段名        | 数据类型      | 默认值 | 说明    | 必须  |
|------------|-----------|-----|-------|:---:|
| `server`   | string    | -   | 服务器   |     |
| `forecast` | int(0-50) | `0` | 预测数据量 |     |

#### 响应数据

| 字段名                | 数据类型                      | 说明   |
|--------------------|---------------------------|------|
| `date`             | string                    | 日期   |
| `week`             | string                    | 星期   |
| `daZhan`           | string                    | 大战   |
| `chiYuan`          | string                    | 驰援   |
| `kuangChe`         | string                    | 矿车   |
| `zhanChang`        | string                    | 战场   |
| `menPaiGongXian`   | string                    | 门派贡献 |
| `jiaYuanShengWang` | string[]                  | 家园声望 |
| `wuLinTongJian`    | ?array <sup>`1`</sup>     | 武林通鉴 |
| `meiRenTuXiang`    | ?array[] <sup>`2`</sup>   | 美人图像 |
| `forecast`         | array[:50] <sup>`↺`</sup> | 预测数据 |

###### wuLinTongJian <sup>`1`</sup>

###### 每周一 `07:15` 左右更新数据，无数据时返回 `null` 。

| 字段名             | 数据类型                      | 说明   |
|-----------------|---------------------------|------|
| `miJing`        | string                    | 秘境   |
| `tuanDuiMiJing` | string                    | 团队秘境 |
| `gongGongRenWu` | string                    | 公共任务 |

###### meiRenTuXiang <sup>`2`</sup>

###### 美人图像数据仅在每周三、五、六、日存在，其余时间返回 `null` 。

| 字段名          | 数据类型     | 说明    |
|--------------|----------|-------|
| `portrait`   | string   | 画像名称  |
| `serverList` | string[] | 服务器列表 |

### `get_gold_proportion`

##### 获取金价比例

#### 参数

| 字段名       | 数据类型   | 默认值     | 说明   | 必须  |
|-----------|--------|---------|------|:---:|
| `server`  | string | -       | 服务器  |     |
| `history` | bool   | `false` | 金价历史 |     |

#### 响应数据

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `list`  | array[] <sup>`1`</sup> | 列表  |
| `count` | int                    | 计数  |

###### list <sup>`1`</sup>

| 字段名           | 数据类型                      | 说明   |
|---------------|---------------------------|------|
| `gameRegion`  | string                    | 游戏大区 |
| `mianServer`  | string                    | 主服务器 |
| `recordTime`  | int(10)                   | 记录时间 |
| `refreshTime` | int(10)                   | 刷新时间 |
| `proportion`  | array <sup>`2`</sup>      | 金价数据 |
| `history`     | array[:10] <sup>`↺`</sup> | 金价历史 |

###### proportion <sup>`2`</sup>

| 字段名     | 数据类型   | 说明                                                                   |
|---------|--------|----------------------------------------------------------------------|
| `wblou` | string | [万宝楼 官方交易平台 <sup>`推荐`</sup>](https://jx3.seasunwbl.com/buyer?t=coin) |
| `tieba` | string | [贴吧 玩家交流社区][贴吧 玩家交流社区]                                               |
| `p5173` | string | [5173 游戏交易平台][5173 游戏交易平台]                                           |
| `p7881` | string | [7881 游戏交易平台][7881 游戏交易平台]                                           |
| `dd373` | string | [DD373 游戏交易平台][DD373 游戏交易平台]                                         |
| `uu898` | string | [UU898 游戏交易平台][UU898 游戏交易平台]                                         |

[贴吧 玩家交流社区]: https://tieba.baidu.com/f?ie=utf-8&kw=%E5%89%91%E7%BD%913&fr=search

[5173 游戏交易平台]: http://s.5173.com/jxqy-0-0-0-0-kb0ewi-0-0-0-a-a-a-a-a-0-0-0-0.shtml

[7881 游戏交易平台]: https://search.7881.com/G12-0-0-0-0.html

[DD373 游戏交易平台]: https://www.dd373.com/s-8v8pc2-0-0-0-0-0-cwmaee-0-0-0-0-0-1-0-0-0.html

[UU898 游戏交易平台]: https://www.uu898.com/newTrade-150-c-3/

### `get_sand_screenshot`

##### 获取沙盘截图

###### 感谢 [剑网3沙盘网](https://www.j3sp.com/) 提供数据支撑。

#### 参数

| 字段名       | 数据类型   | 默认值     | 说明   | 必须  |
|-----------|--------|---------|------|:---:|
| `server`  | string | -       | 服务器  |     |
| `history` | bool   | `false` | 沙盘历史 |     |

#### 响应数据

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `list`  | array[] <sup>`1`</sup> | 列表  |
| `count` | int                    | 计数  |

###### list <sup>`1`</sup>

| 字段名          | 数据类型                      | 说明   |
|--------------|---------------------------|------|
| `gameRegion` | string                    | 游戏大区 |
| `mianServer` | string                    | 主服务器 |
| `sandImage`  | string                    | 沙盘图片 |
| `sandTime`   | int(10)                   | 截图时间 |
| `history`    | array[:10] <sup>`↺`</sup> | 沙盘历史 |

### `get_ornament_data`

##### 获取装饰数据

#### 参数

| 字段名         | 数据类型   | 默认值     | 说明   | 必须  |
|-------------|--------|---------|------|:---:|
| `stuffName` | string | -       | 物件名称 |  √  |
| `strict`    | bool   | `false` | 严格匹配 |     |

#### 响应数据

| 字段名     | 数据类型                       | 说明  |
|---------|----------------------------|-----|
| `list`  | array[:200] <sup>`1`</sup> | 列表  |
| `count` | int                        | 计数  |

###### list <sup>`1`</sup>

| 字段名                | 数据类型   | 说明     |
|--------------------|--------|--------|
| `id`               | int    | 编号     |
| `name`             | string | 名称     |
| `type`             | int    | 类别     |
| `quality`          | int    | 品质     |
| `architecture`     | int    | 价格     |
| `tip`              | string | 说明     |
| `imagePath`        | string | 图例链接   |
| `source`           | string | 获取方式   |
| `levelLimit`       | int    | 需要家园等级 |
| `qualityLevel`     | int    | 品质等级   |
| `viewScore`        | int    | 观赏评分   |
| `hardScore`        | int    | 坚固评分   |
| `practicalScore`   | int    | 实用评分   |
| `geomanticScore`   | int    | 风水评分   |
| `interestingScore` | int    | 趣味评分   |

### `get_spectrum_data`

##### 获取器物谱数据

#### 参数

| 字段名       | 数据类型   | 默认值     | 说明   | 必须  |
|-----------|--------|---------|------|:---:|
| `mapName` | string | -       | 地图名称 |     |
| `strict`  | bool   | `false` | 严格匹配 |     |

#### 响应数据

| 字段名     | 数据类型                       | 说明  |
|---------|----------------------------|-----|
| `list`  | array[:200] <sup>`1`</sup> | 列表  |
| `count` | int                        | 计数  |

###### list <sup>`1`</sup>

###### 参见 [`get_sand_screenshot` 获取装饰数据](#get_ornament_data) `list` 字段，相比增加以下字段数据。

| 字段名          | 数据类型   | 说明   |
|--------------|--------|------|
| `produceMap` | string | 产出地图 |

### `get_school_tactics`

##### 获取门派阵法

#### 参数

| 字段名      | 数据类型   | 默认值     | 说明       | 必须  |
|----------|--------|---------|----------|:---:|
| `xingfa` | string | -       | 心法名称(严格) |  √  |

#### 响应数据

| 字段名      | 数据类型                 | 说明   |
|----------|----------------------|------|
| `school` | string               | 门派名称 |
| `xingfa` | string               | 心法名称 |
| `zfInfo` | array <sup>`1`</sup> | 阵法信息 |

###### zfInfo <sup>`1`</sup>

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `name`  | string                 | 名称  |
| `icon`  | string                 | 图例  |
| `descs` | array[] <sup>`2`</sup> | 数据  |

###### descs <sup>`2`</sup>

| 字段名     | 数据类型   | 说明  |
|---------|--------|-----|
| `desc`  | string | 描述  |
| `level` | int    | 等级  |
| `name`  | string | 名称  |

### `get_jjc_ranking_list`

##### 获取JJC排行

#### 参数

| 字段名          | 数据类型                    | 默认值    | 说明  | 必须  |
|--------------|-------------------------|--------|-----|:---:|
| `pvpType`    | enum('2v2','3v3','5v5') | `3v3`  | 模式  |     |
| `timeScope`  | enum('week','month')    | `week` | 范围  |     |
| `cycleScope` | enum('this','last')     | `this` | 周期  |     |

#### 响应数据

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `list`  | array[] <sup>`1`</sup> | 列表  |
| `count` | int                    | 计数  |

###### list <sup>`1`</sup>

| 字段名          | 数据类型   | 说明     |
|--------------|--------|--------|
| `gameRegion` | string | 游戏大区   |
| `mianServer` | string | 主服务器   |
| `roleName`   | string | 角色昵称   |
| `roleId`     | int    | 角色数字ID |
| `school`     | string | 门派名称   |
| `score`      | int    | 评分     |
| `winRate`    | string | 胜率     |
| `rankNum`    | int    | 当前排名   |
| `upNum`      | int    | 上浮排名   |

### `get_jjc_statistics_list`

##### 获取JJC统计

#### 参数

| 字段名          | 数据类型                    | 默认值    | 说明  | 必须  |
|--------------|-------------------------|--------|-----|:---:|
| `pvpType`    | enum('2v2','3v3','5v5') | `3v3`  | 模式  |     |
| `timeScope`  | enum('week','month')    | `week` | 范围  |     |

#### 响应数据

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `list`  | array[] <sup>`1`</sup> | 列表  |
| `count` | int                    | 计数  |

###### list <sup>`1`</sup>

| 字段名       | 数据类型   | 说明      |
|-----------|--------|---------|
| `school`  | string | 门派名称    |
| `lastNum` | int    | 上个周期统计值 |
| `thisNum` | int    | 当前周期统计值 |

### `get_seniority_ranking_list`

##### 获取资历排行

#### 参数

| 字段名      | 数据类型        | 默认值  | 说明       | 必须  |
|----------|-------------|------|----------|:---:|
| `server` | string      | -    | 服务器      |     |
| `school` | string      | -    | 门派名称(宽松) |     |
| `size`   | int(50-200) | `50` | 数据大小     |     |

#### 响应数据

| 字段名     | 数据类型                       | 说明  |
|---------|----------------------------|-----|
| `list`  | array[:200] <sup>`1`</sup> | 列表  |
| `count` | int                        | 计数  |

###### list <sup>`1`</sup>

| 字段名          | 数据类型   | 说明     |
|--------------|--------|--------|
| `gameRegion` | string | 游戏大区   |
| `mianServer` | string | 主服务器   |
| `roleName`   | string | 角色昵称   |
| `roleId`     | int    | 角色数字ID |
| `school`     | string | 门派名称   |
| `value`      | int    | 资历点值   |
