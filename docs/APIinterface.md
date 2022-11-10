# 数据接口

### controller：`api`

###### 温馨提示：若您未开通vip会员，使用http服务时，将会受到调用限速。

#### ws 限定

- [`push_subscribe` 推送订阅](#push_subscribe)
- [`push_unsubscribe` 取消订阅](#push_unsubscribe)
- [`get_push_list` 获取订阅列表](#get_push_list)
- [`get_view_api` 调用视图接口 <sup>`vip`</sup>](#get_view_api)

#### http 限定

- [`get_ws_connected` 获取ws连接信息 <sup>`user`</sup>](#get_ws_connected)

#### ws/http 通用

- [`get_connected` 获取连接信息 <sup>`user`</sup>](#get_connected)
- [`get_article_list` 获取文章列表](#get_article_list)
- [`get_article_detail` 获取文章内容](#get_article_detail)
- [`get_server_status` 获取服务器状态](#get_server_status)
- [`get_task_activities` 获取任务活动](#get_task_activities)
- [`get_gold_proportion` 获取金价比例](#get_gold_proportion)
- [`get_sand_screenshot` 获取沙盘截图](#get_sand_screenshot)
- [`get_ornament_data` 获取装饰数据](#get_ornament_data)
- [`get_spectrum_data` 获取器物谱数据](#get_spectrum_data)
- [`get_career_macro` 获取职业宏命令](#get_career_macro)
- [`get_career_equip` 获取职业配装](#get_career_equip)
- [`get_exam_answer` 获取科举答案](#get_exam_answer)
- [`get_garden_flower` 获取家园花价 <sup>`dev` `view`</sup>](#get_garden_flower)
- [`get_market_prices` 获取集市物价 <sup>`dev` `view`</sup>](#get_market_prices)
- [`get_faction_tactics` 获取门派阵法](#get_faction_tactics)
- [`get_jjc_ranking_list` 获取JJC排行 <sup>`vip` `view`</sup>](#get_jjc_ranking_list)
- [`get_jjc_statistics_list` 获取JJC统计 <sup>`vip` `view`</sup>](#get_jjc_statistics_list)
- [`get_seniority_ranking_list` 获取资历排行 <sup>`vip` `view`</sup>](#get_seniority_ranking_list)

### `push_subscribe`

##### 推送订阅

#### 参数

| 字段名      | 数据类型   | 默认值 | 说明    | 必须  |
|----------|--------|-----|-------|:---:|
| `event`  | string | -   | 事件名称  |  √  |
| `custom` | ?array | -   | 自定义数据 |  ?  |

###### `event` 详见 [推送事件](Subscribe.md)

#### 响应数据

| 字段名       | 数据类型         | 说明                                                   |
|-----------|--------------|------------------------------------------------------|
| `status`  | enum(-1,0,1) | 状态<font color="gray">(-1:无效的操作,0:订阅失败,1:订阅成功)</font> |
| `receipt` | ?array       | 回执数据                                                 |

### `push_unsubscribe`

##### 取消订阅

#### 参数

| 字段名      | 数据类型   | 默认值 | 说明    | 必须  |
|----------|--------|-----|-------|:---:|
| `event`  | string | -   | 事件名称  |  √  |
| `custom` | ?array | -   | 自定义数据 |  ?  |

###### `event` 详见 [推送事件](Subscribe.md)

#### 响应数据

| 字段名       | 数据类型         | 说明                                                   |
|-----------|--------------|------------------------------------------------------|
| `status`  | enum(-1,0,1) | 状态<font color="gray">(-1:无效的操作,0:取消失败,1:取消成功)</font> |
| `receipt` | ?array       | 回执数据                                                 |

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
| `custom` | ?array | 自定义数据 |

### `get_view_api`

##### 调用视图接口

#### 参数

| 字段名        | 数据类型   | 默认值 | 说明       | 必须  |
|------------|--------|-----|----------|:---:|
| viewAction | string | -   | 要调用的 API |  √  |
| viewParams | ?array | -   | 要传入的 参数  |  ?  |

###### `viewAction` 和 `viewParams` 详见 [视图接口](Template.md)

:::tip
响应参数详见 [视图接口](Template.md)
:::

### `get_ws_connected`

##### 获取ws连接信息

### `get_connected`

##### 获取连接信息

### `get_article_list`

##### 获取文章列表

#### 参数

| 字段名    | 数据类型                               | 默认值       | 说明  | 必须  |
|--------|------------------------------------|-----------|-----|:---:|
| `type` | enum('allnews','press','announce') | `allnews` | 类别  |     |

#### 响应数据

| 字段名    | 数据类型                      | 说明  |
|--------|---------------------------|-----|
| `list` | array[:16] <sup>`1`</sup> | 列表  |

###### list <sup>`1`</sup>

| 字段名     | 数据类型   | 说明        |
|---------|--------|-----------|
| `date`  | string | 日期(XX/XX) |
| `class` | string | 分类        |
| `title` | string | 标题        |
| `link`  | string | 链接        |

### `get_article_detail`

##### 获取文章内容

#### 参数

| 字段名    | 数据类型   | 默认值 | 说明  | 必须  |
|--------|--------|-----|-----|:---:|
| `link` | string | -   | 链接  |  √  |

#### 响应数据

| 字段名     | 数据类型   | 说明  |
|---------|--------|-----|
| `title` | string | 标题  |
| `time`  | string | 时间  |
| `con`   | string | 正文  |
