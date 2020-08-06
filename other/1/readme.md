# 今日面试题

> 2019-07-23
> 第 111 题:编程题，写个程序把 entry 转换成如下对象

```js
const entry = {
  a: {
    b: {
      c: {
        dd: "abcdd",
      },
    },
    d: {
      xx: "adxx",
    },
    e: "ae",
  },
};
```

## 要求转换成如下对象

```js
const output = { "a.b.c.d.d": "abcdd", "a.d.x.x": "adxx", "a.e": "ae" };
```

解析:第 111 题
