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
- [`get_career_equip` 获取职业配装 <sup>`plan`</sup>](#get_career_equip)
- [`get_career_elevate` 获取职业小药](#get_career_elevate)
- [`get_random_saohua` 获取随机骚话](#get_random_saohua)
- [`get_exam_answer` 获取科举答案](#get_exam_answer)
- [`get_garden_flower` 获取家园花价](#get_garden_flower)
- [`get_market_prices` 获取集市物价 <sup>`plan`</sup>](#get_market_prices)
- [`get_school_tactics` 获取门派阵法](#get_school_tactics)
- [`get_jjc_ranking_list` 获取JJC排行 <sup>`vip`</sup>](#get_jjc_ranking_list)
- [`get_jjc_statistics_list` 获取JJC统计 <sup>`vip`</sup>](#get_jjc_statistics_list)
- [`get_seniority_ranking_list` 获取资历排行 <sup>`vip`</sup>](#get_seniority_ranking_list)
- [`get_game_role_info` 获取角色信息 <sup>`vip`</sup>](#get_game_role_info)
- [`get_game_role_equip` 获取角色装备 <sup>`vip`</sup>](#get_game_role_equip)
- [`get_game_role_combat` 获取角色战绩 <sup>`vip`</sup>](#get_game_role_combat)
- [`get_game_role_dungoen` 获取角色团本记录 <sup>`vip`</sup>](#get_game_role_dungoen)
- [`get_game_role_achieve` 获取角色成就数据 <sup>`vip`</sup>](#get_game_role_achieve)
- [`get_game_role_serendipity` 获取角色奇遇数据 <sup>`vip`</sup>](#get_game_role_serendipity)
- [`get_game_world_serendipity` 获取世界奇遇数据 <sup>`vip`</sup>](#get_game_world_serendipity)

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

###### 参见 [`get_ornament_data` 获取装饰数据](#get_ornament_data) 响应数据 `list` 字段，相比增加以下数据。

| 字段名          | 数据类型   | 说明   |
|--------------|--------|------|
| `produceMap` | string | 产出地图 |

### `get_career_macro`

##### 获取职业宏数据

#### 参数

| 字段名      | 数据类型   | 默认值 | 说明              | 必须  |
|----------|--------|-----|-----------------|:---:|
| `xingfa` | string | -   | 心法名称(严格.不含治疗心法) |  √  |

#### 响应数据

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `list`  | array[] <sup>`1`</sup> | 列表  |
| `count` | int                    | 计数  |

###### list <sup>`1`</sup>

| 字段名         | 数据类型                 | 说明    |
|-------------|----------------------|-------|
| `school`    | string               | 门派名称  |
| `xingfa`    | string               | 心法名称  |
| `macroInfo` | array <sup>`2`</sup> | 宏命令信息 |

###### macroInfo <sup>`2`</sup>

| 字段名        | 数据类型                 | 说明   |
|------------|----------------------|------|
| `text`     | string               | 宏内容  |
| `qixue`    | array <sup>`3`</sup> | 配套奇穴 |
| `edition`  | string               | 赛季版本 |
| `explain`  | string               | 额外说明 |

###### qixue <sup>`3`</sup>

| 字段名   | 数据类型                 | 说明   |
|-------|----------------------|------|
| `txt` | string               | 奇穴文本 |
| `box` | array <sup>`4`</sup> | 附加信息 |

###### box <sup>`4`</sup>

###### 附加信息参见 [JX3BOX 奇穴模拟器](https://www.jx3box.com/app/talent/)

| 字段名        | 数据类型   | 说明   |
|------------|--------|------|
| `version`  | string | 数据版本 |
| `sequence` | string | 数据序列 |

### `get_career_elevate`

##### 获取职业小药

#### 参数

| 字段名      | 数据类型   | 默认值 | 说明                 | 必须  |
|----------|--------|-----|--------------------|:---:|
| `xingfa` | string | -   | 心法名称(严格.不含坦克和治疗心法) |     |

#### 响应数据

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `list`  | array[] <sup>`1`</sup> | 列表  |
| `count` | int                    | 计数  |

###### list <sup>`1`</sup>

| 字段名           | 数据类型                 | 说明   |
|---------------|----------------------|------|
| `school`      | string               | 门派名称 |
| `xingfa`      | string               | 心法名称 |
| `elevateInfo` | array <sup>`2`</sup> | 小药信息 |

###### elevateInfo <sup>`2`</sup>

| 字段名             | 数据类型   | 说明   |
|-----------------|--------|------|
| `enhanceFood`   | string | 增强食品 |
| `enhanceDrug`   | string | 增强药品 |
| `auxiliaryFood` | string | 辅助食品 |
| `auxiliaryDrug` | string | 辅助药品 |

### `get_random_saohua`

##### 获取随机骚话

#### 参数

| 字段名     | 数据类型 | 默认值     | 说明   | 必须  |
|---------|------|---------|------|:---:|
| `short` | bool | `false` | 较为简短 |     |

#### 响应数据

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `list`  | array[] <sup>`1`</sup> | 列表  |
| `count` | int                    | 计数  |

### `get_exam_answer`

##### 获取科举答案

#### 参数

| 字段名       | 数据类型        | 默认值  | 说明                  | 必须  |
|-----------|-------------|------|---------------------|:---:|
| `keyword` | string      | -    | 题目关键字(支持拼音首字母,空格占位) |  √  |
| `limit`   | int(10-200) | `10` | 答案数量                |     |

#### 响应数据

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `list`  | array[] <sup>`1`</sup> | 列表  |
| `count` | int                    | 计数  |

###### list <sup>`1`</sup>

| 字段名        | 数据类型   | 说明    |
|------------|--------|-------|
| `pinyin`   | string | 题目拼音  |
| `question` | string | 科举题目  |
| `answer`   | string | 科举答案  |

### `get_garden_flower`

##### 获取家园花价

#### 参数

| 字段名       | 数据类型   | 默认值     | 说明   | 必须  |
|-----------|--------|---------|------|:---:|
| `server`  | string | -       | 服务器  |  √  |
| `flower`  | string | -       | 花种名称 |     |
| `mapName` | string | -       | 地图名称 |     |

#### 响应数据

| 字段名      | 数据类型                 | 说明   |
|----------|----------------------|------|
| `school` | string               | 门派名称 |
| `xingfa` | string               | 心法名称 |

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

### `get_game_role_info`

##### 获取角色信息

#### 参数

| 字段名         | 数据类型   | 默认值     | 说明     | 必须  |
|-------------|--------|---------|--------|:---:|
| `server`    | string | -       | 服务器    |  √  |
| `roleName`  | string | -       | 角色昵称   | ?√  |
| `roleId`    | int    | -       | 角色数字ID | ?√  |
| `getStatus` | bool   | `false` | 获取设置状态 |     |

:::warning
`roleName` 与 `roleId` 至少传入一个。优先级：`[roleId > roleName]`  
若使用 `roleName` 获取不到数据，请使用 `roleId` 获取数据。
:::

#### 响应数据

| 字段名             | 数据类型              | 说明     |
|-----------------|-------------------|--------|
| `gameRegion`    | string            | 游戏大区   |
| `mianServer`    | string            | 主服务器   |
| `roleName`      | string            | 角色昵称   |
| `roleId`        | int               | 角色数字ID |
| `globalRoleId ` | int               | 全服唯一ID |
| `school`        | string            | 门派名称   |
| `shape`         | string            | 角色体型   |
| `camp`          | string            | 所属阵营   |
| `bindApp`       | bool              | 绑定推栏   |
| `setStatus`     | enum(-2,-1,0,1,2) | 设置状态   |

###### setStatus 字段返回值说明

| 值    | 说明     |
|------|--------|
| `-2` | 未绑定推栏  |
| `-1` | 所有人可见  |
| `0`  | 未获取状态  |
| `1`  | 互关好友可见 |
| `2`  | 仅自己可见  |

### `get_game_role_equip`

##### 获取角色装备

#### 参数

| 字段名         | 数据类型   | 默认值     | 说明     | 必须  |
|-------------|--------|---------|--------|:---:|
| `server`    | string | -       | 服务器    |  √  |
| `roleName`  | string | -       | 角色昵称   |  √  |
| `getStatus` | bool   | `false` | 获取设置状态 |     |

#### 响应数据

###### 参见 [`get_game_role_info` 获取角色信息](#get_game_role_info) 响应数据，相比增加以下数据。

| 字段名         | 数据类型                   | 说明   |
|-------------|------------------------|------|
| `level`     | int                    | 角色等级 |
| `xingfa`    | string                 | 心法名称 |
| `equipList` | array[] <sup>`1`</sup> | 装备列表 |
| `qixueList` | array[] <sup>`2`</sup> | 奇穴列表 |
| `panelData` | array <sup>`3`</sup>   | 面板数据 |

###### equipList <sup>`1`</sup>

:::danger
太懒了,字段太多不想写)___   请参考返回的JSON.
:::

###### qixueList <sup>`2`</sup>

| 字段名    | 数据类型   | 说明  |
|--------|--------|-----|
| `name` | string | 名称  |
| `desc` | string | 描述  |
| `icon` | string | 图例  |
| `seat` | int    | 位置  |

###### panelData <sup>`3`</sup>

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `score` | string                 | 装分  |
| `other` | array[] <sup>`4`</sup> | 其他  |

###### other <sup>`4`</sup>

| 字段名       | 数据类型      | 说明  |
|-----------|-----------|-----|
| `name`    | string    | 名称  |
| `percent` | bool      | 百分比 |
| `value`   | int,float | 值   |

### `get_game_role_combat`

##### 获取角色战绩

#### 参数

| 字段名         | 数据类型                    | 默认值     | 说明     | 必须  |
|-------------|-------------------------|---------|--------|:---:|
| `server`    | string                  | -       | 服务器    |  √  |
| `roleName`  | string                  | -       | 角色昵称   |  √  |
| `pvpType`   | enum('2v2','3v3','5v5') | -       | 比赛模式   |     |
| `getStatus` | bool                    | `false` | 获取设置状态 |     |

#### 响应数据

###### 参见 [`get_game_role_info` 获取角色信息](#get_game_role_info) 响应数据，相比增加以下数据。

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `list`  | array[] <sup>`1`</sup> | 列表  |
| `count` | int                    | 计数  |

###### list <sup>`1`</sup>

| 字段名           | 数据类型                   | 说明  |
|---------------|------------------------|-----|
| `type`        | string                 | 模式  |
| `performance` | array <sup>`2`</sup>   | 统计  |
| `history`     | array[] <sup>`3`</sup> | 历史  |
| `season`      | array[] <sup>`4`</sup> | 走势  |

###### performance <sup>`2`</sup>

| 字段名          | 数据类型   | 说明      |
|--------------|--------|---------|
| `pvpInt`     | int    | 模式      |
| `mmr`        | int    | 评分      |
| `grade`      | int    | 段位      |
| `ranking`    | string | 排名(百分比) |
| `winCount`   | int    | 胜利场次    |
| `mvpCount`   | int    | 最佳场次    |
| `totalCount` | int    | 总的场次    |

###### history <sup>`3`</sup>

| 字段名         | 数据类型    | 说明   |
|-------------|---------|------|
| `pvpInt`    | int     | 模式   |
| `kungfu`    | string  | 心法名称 |
| `swimMmr`   | int     | 浮动评分 |
| `totalMmr`  | int     | 总的评分 |
| `avgGrade`  | int     | 平均段位 |
| `startTime` | int(10) | 开始时间 |
| `endTime`   | int(10) | 结束时间 |
| `isMvp`     | bool    | 是否最佳 |
| `isWon`     | bool    | 是否胜利 |

###### season <sup>`4`</sup>

| 字段名         | 数据类型      | 说明   |
|-------------|-----------|------|
| `pvpInt`    | int       | 模式   |
| `matchDate` | int(10)   | 匹配日期 |
| `mmr`       | int       | 评分   |
| `winRate`   | int,float | 胜率比  |

### `get_game_role_dungoen`

##### 获取角色团本记录

#### 参数

| 字段名        | 数据类型   | 默认值 | 说明     | 必须  |
|------------|--------|-----|--------|:---:|
| `server`   | string | -   | 服务器    |  √  |
| `roleName` | string | -   | 角色昵称   |  √  |

#### 响应数据

###### 参见 [`get_game_role_info` 获取角色信息](#get_game_role_info) 响应数据，相比增加以下数据。

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `list`  | array[] <sup>`1`</sup> | 列表  |
| `count` | int                    | 计数  |

###### list <sup>`1`</sup>

| 字段名            | 数据类型                   | 说明     |
|----------------|------------------------|--------|
| `mapName`      | string                 | 副本地图   |
| `mapType`      | string                 | 副本模式   |
| `bossCount`    | int                    | BOSS总数 |
| `bossFinished` | int                    | 击败数量   |
| `bossProgress` | array[] <sup>`2`</sup> | 通关进度   |

###### bossProgress <sup>`2`</sup>

| 字段名          | 数据类型   | 说明     |
|--------------|--------|--------|
| `name`       | string | BOSS昵称 |
| `progressId` | int    | BOSS关卡 |
| `isFinished` | bool   | 是否击败   |

### `get_game_role_achieve`

##### 获取角色成就数据

#### 参数

| 字段名          | 数据类型   | 默认值     | 说明   | 必须  |
|--------------|--------|---------|------|:---:|
| `server`     | string | -       | 服务器  |  √  |
| `roleName`   | string | -       | 角色昵称 |  √  |
| `smallClass` | string | -       | 成就系列 |  √  |
| `isScholars` | bool   | `false` | 五甲成就 |     |

#### 响应数据

###### 参见 [`get_game_role_info` 获取角色信息](#get_game_role_info) 响应数据，相比增加以下数据。

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `list`  | array[] <sup>`1`</sup> | 列表  |
| `count` | int                    | 计数  |

###### list <sup>`1`</sup>

:::danger
太懒了,字段太多不想写)___   请参考返回的JSON.
:::

### `get_game_role_serendipity`

##### 获取角色奇遇数据

#### 参数

| 字段名              | 数据类型   | 默认值     | 说明   | 必须  |
|------------------|--------|---------|------|:---:|
| `server`         | string | -       | 服务器  |  √  |
| `roleName`       | string | -       | 角色昵称 |  √  |
| `allSerendipity` | bool   | `false` | 所有奇遇 |     |

#### 响应数据

###### 参见 [`get_game_role_info` 获取角色信息](#get_game_role_info) 响应数据，相比增加以下数据。

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `list`  | array[] <sup>`1`</sup> | 列表  |
| `count` | int                    | 计数  |

###### list <sup>`1`</sup>

| 字段名           | 数据类型    | 说明   |
|---------------|---------|------|
| `gameRegion`  | string  | 游戏大区 |
| `mianServer`  | string  | 主服务器 |
| `serendipity` | string  | 奇遇名称 |
| `triggerTime` | int(10) | 触发时间 |
| `yellow`      | bool    | 黄字   |
| `sparse`      | bool    | 绝世   |
| `rare`        | bool    | 珍奇   |

### `get_game_world_serendipity`

##### 获取世界奇遇数据

#### 参数

| 字段名           | 数据类型        | 默认值  | 说明          | 必须  |
|---------------|-------------|------|-------------|:---:|
| `server`      | string      | -    | 服务器         |  √  |
| `serendipity` | string      | -    | 奇遇名称(严格.黄字) |     |
| `recordLimit` | int(20-50)  | `20` | 奇遇记录数量      |     |
| `collectDays` | int(90-180) | `90` | 奇遇统计天数      |     |

#### 响应数据

| 字段名     | 数据类型                   | 说明  |
|---------|------------------------|-----|
| `list`  | array[] <sup>`1`</sup> | 列表  |
| `count` | int                    | 计数  |

###### list <sup>`1`</sup>

| 字段名           | 数据类型                      | 说明     |
|---------------|---------------------------|--------|
| `gameRegion`  | string                    | 游戏大区   |
| `mianServer`  | string                    | 主服务器   |
| `serendipity` | string                    | 奇遇名称   |
| `recordList`  | array[:50] <sup>`2`</sup> | 奇遇记录   |
| `days7Count`  | int                       | 7天统计数  |
| `days30Count` | int                       | 30天统计数 |
| `collectInfo` | array <sup>`3`</sup>      | 统计信息   |
| `yellow`      | bool                      | 黄字     |
| `sparse`      | bool                      | 绝世     |
| `rare`        | bool                      | 珍奇     |

###### recordList <sup>`2`</sup>

| 字段名           | 数据类型    | 说明   |
|---------------|---------|------|
| `roleName`    | string  | 角色昵称 |
| `triggerTime` | int(10) | 触发时间 |

###### collectInfo <sup>`3`</sup>

| 字段名     | 数据类型     | 说明   |
|---------|----------|------|
| `days`  | int      | 统计天数 |
| `count` | int      | 统计数  |
| `am`    | string[] | 节点值  |
| `pm`    | string[] | 节点值  |
