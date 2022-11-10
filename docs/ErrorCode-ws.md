# ws Service

| code<br/>状态码 | errorCode<br/>错误码 | 代码含义                         | 详细说明          | 断开连接 |
|--------------|-------------------|------------------------------|---------------|:----:|
| 1402         |                   | Dev token to be paid         | dev-token 待付款 |      |
| 1400         |                   | JSON format parsing failed   | JSON 格式解析失败   |      |
| 1404         |                   | API interface does not exist | API 接口不存在     |      |
|              | -9998             | Forced offline               | 被迫离线          |  √   |
|              | -9999             | Other error                  | 其他错误          |  √   |
|              | -10000            | Unknown error                | 未知错误          |      |
|              | -10001            | Illegal request I            | 非法请求 I        |      |
|              | -10002            | Illegal request II           | 非法请求 II       |      |
|              | -10003            | Illegal request III          | 非法请求 III      |      |
|              | -10004            | Interface offline            | 接口下线          |      |
|              | -10005            | Interface maintenance        | 接口维护          |      |
|              | -10006            | Unauthorized call            | 无权限调用         |      |
|              | -10007            | Call restricted              | 调用受限制         |      |
|              | -10008            | Data does not exist          | 数据不存在         |      |
|              | -10010            | ...                          | ...           |      |

##### 注意：

- 订阅推送事件 `code状态码` 为 1200 `msg` 为 [事件名称](Subscribe.md)
- 订阅推送事件以及错误断开连接不会携带或返回 `mark` 字段

###### 除以上 `code状态码` 为 14xx / 1200 的 其余情况无论操作成功与否 `code状态码` 均为 200

### 发起连接

##### 你应当建立心跳检测(ping==><==pong)以及断线重连机制。

- 心跳检测仅限于客户端发送ping，服务端回应pong，应为 string / opcode 。
- GET参数或请求头中的 Dev-Token 为你的 32位 devToken
- Dev-Token 校验优先级：`[get > header]`

``` http request
# HTTP升级为WebSokect(Dev-Token in get)
GET /ws?Dev-Token={{devToken}} HTTP/1.1
Host: data.jx3dev.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13

# HTTP升级为WebSokect(Dev-Token in header)
GET /ws HTTP/1.1
Host: data.jx3dev.com
Dev-Token: {{devToken}}
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

##### 出现以下情况，服务器将直接拒绝连接。

- `dev-token` 未提供
- `dev-token` 已失效
- `dev-token` 对应账户正在接受检查
- `dev-token` 对应账户未获得接入许可

### 调用API接口

##### 目前仅支持通过 JSON 格式与服务器进行数据交互。

###### 这里的 controller|action 参数用于指定要调用的 API，具体参考 [API](APIinterface.md)；params 用于传入参数，你必须提供 ts 参数且与服务器差值应为 ±5 分钟，否则将被视为非法请求；`mark` 参数是可选的，类似于 [JSON RPC](https://www.jsonrpc.org/specification) 的 id 字段，用于唯一标识一次请求，可以是任何类型的数据，服务器将会在调用结果中原样返回。

###### <获取API列表> 调用 [数据接口](APIinterface.md) 的 `index` 接口

``` json
{
    "controller": "api",
    "action": "index",
    "params": {
        "mark": -123456789,
        "ts": 1697984542
    }
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
            "mark": -123456789,
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
            "mark": -123456789,
            "ts": 1697984542
        }
    },
    "msg": "Unknown error"
}
```