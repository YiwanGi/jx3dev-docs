# http Service

| http<br/>状态码 | code<br/>状态码 | errorCode<br/>错误码 | 代码含义                         | 详细说明          |
|--------------|--------------|-------------------|------------------------------|---------------|
| 405          | 405          |                   | Method not supported         | 方法不被支持        |
| 406          | 406          |                   | Type not supported           | 类型不被支持        |
| 401          | 401          |                   | Dev token not provided       | dev-token 未提供 |
| 403          | 403          |                   | Dev token is invalid         | dev-token 已失效 |
| 402          | 402          |                   | Dev token to be paid         | dev-token 待付款 |
| 400          | 400          |                   | JSON format parsing failed   | JSON 格式解析失败   |
| 404          | 404          |                   | API interface does not exist | API 接口不存在     |
|              |              | -7000             | Suspicious human behavior    | 可疑的人类行为       |
|              |              | -7001             | Script request in question   | 存疑的脚本请求       |
|              |              | -8000             | Requests are too frequent    | 请求过于频繁        |
|              |              | -8001             | Request not processed        | 请求未被处理        |
|              |              | -10000            | Unknown error                | 未知错误          |
|              |              | -10001            | Illegal request I            | 非法请求 I        |
|              |              | -10002            | Illegal request II           | 非法请求 II       |
|              |              | -10003            | Illegal request III          | 非法请求 III      |
|              |              | -10004            | Interface maintenance        | 接口维护          |
|              |              | -10005            | Interface offline            | 接口下线          |
|              |              | -10006            | Upstream fault               | 上游故障          |
|              |              | -10007            | Unauthorized call            | 无权限调用         |
|              |              | -10008            | Call is pre restricted       | 调用受限制         |
|              |              | -10009            | Data does not exist          | 数据不存在         |
|              |              | -10010            | ...                          | ...           |

###### 除以上 `code状态码|http状态码` 为 4xx 的 其余情况无论操作成功与否 `code状态码|http状态码` 均为 200

### 调用API接口

##### 请求仅支持 POST 方法，通过 JSON 传递参数；目前服务器仅支持通过 JSON 格式返回数据。

- 请求头中的 Dev-Token 为你的 16位 devToken
- 请求头中的 Content-Type 必须对应的为 application/json
- 你必须提供 ts 参数且与服务器差值应为 ±5 分钟，否则将被视为非法请求。

###### 调用 [数据接口](APIinterface.md) 的 `index` 接口 <获取API列表>

``` http request
POST /api/index HTTP/1.1
Host: data.jx3dev.com
Dev-Token: {{devToken}}
Content-Type: application/json

{
    "ts": 1697984542
}
```

### 请求成功示例

``` json
{
    "code": 200,
    "result": {
        "data": {
            "controller": "api",
            "interface": [...]
        },
        "extra": {
            "ts": 1697984542
        }
    },
    "msg": "ok"
}
```

### 请求失败示例

``` json
{
    "code": 200,
    "result": {
        "errorCode": -10000,
        "errorExtra": {
            "ts": 1697984542
        }
    },
    "msg": "Unknown error"
}
```
