# Mr.Cai私人库函数

## 根据 UnderScore 编造的模块化函数, 内容包含了函数柯里化，惰函数， 偏函数， 函数防抖， 函数节流等等

## 安装
```
  yarn @kvinc/kvinc-underscore
```

## 引用
```
  import MUnderScore from '@kvinc/kvinc-underscore'
```

## API
函数名 | 函数参数 | 函数说明
:---: | :---: | :---: |
curry | fn, arguments | 函数柯里化: <code>通过函数参数个数进行分割函数， 来进行预先保存变量</code>
partial | fn, arguments | 偏函数: <code>通过函数参数个数进行分割函数， 来进行预先保存变量, 与函数柯里化</code>
compose | fn, fn, fn, ... | 复合函数: <code>将参数传进来的函数进行从后往前调用，并且将函数的值传递给下一个调用的函数</code>
memorize | fn | 函数记忆: <code>将函数执行后的值, 将形参序列化作为一个key, 并且将函数调用额值作为value缓存在内存里</code>
debounce | fn, waitTime, immediate | 函数防抖: <code>fn: 要防抖的函数, waitTime:结束动作后多久触发, immdiate: 是否在一开始就触发一次函数</code>
throttle | fn, waitTime | 函数节流: <code>fn: 要防抖的函数, waitTime: 时隔多久触发</code>