# 视图接口

### controller：`view`

###### 温馨提示：若您的vip会员已经到期，将无法继续使用本页接口。

:::warning
本页所有 API 都支持提交 `style` 参数，该参数是可选的(默认值为 `1`)，用于指定视图风格，若值为 `0` 则表示使用随机风格；响应数据统一返回 `base64` 字段，为base64编码后的图像数据。
:::

#### ws/http 通用

- [`get_official_notice` 获取官方公告](#get_official_notice)

### `get_official_notice`

##### 获取官方公告

:::tip
该 API 无需参数。
:::

#### 风格展示

|  style  | image                                                                                                              |
|:-------:|--------------------------------------------------------------------------------------------------------------------|
|    1    | <img src="https://www.w3school.com.cn/i/eg_tulip.jpg" alt="Smiley face" loading="lazy" width="100%" height="100%"> |
