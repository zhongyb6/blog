# apply，call与bind简单实现

我们知道，JavaScript中的this是最让人捉摸不定的，时而指向东，时而指向西。关于this指向问题，可以查看另一篇文章['this' is a question](https://juejin.im/post/5b2df8226fb9a00e35683984)。本文主要讲的是怎么简单实现apply、call、bind这三个方法。


## 原理

apply、call与bind方法都能够改变调用函数的this指向，那它到底是如果做到的呢？

### 对象方法的this指向

对于一个对象，它的方法在调用过程中显然this指向的是对象本身。

```js
const Person = {
    name: '鬼掠凹',
    getName () {
        console.log(this.name);
    }
}
console.log(Person.getName()); // 鬼掠凹
```

借助对象的这个特性，就可以来实现上面三个方法了。我们可以将他们挂载到需要指向的目标对象上，成为目标对象的一个方法，然后执行该目标对象的方法，就能实现调用函数this指向的改变了。需要注意的是挂载时要避免污染对象的原有方法或者是被其他操作污染，所以可以使用symbol来作为key值。


## apply

```js
// apply的第二个参数args是一个数组
Function.prototype.myApply = function (ctx = window, args = []) {
    const key = Symbol();
    ctx[key] = this;
    const result = ctx[key](...args);
    delete ctx[key];
    return result;
}

var name = '鬼掠凹';

function getName() {
    console.log(this.name);
}

getName() // 鬼掠凹

const Person = {
    name: '鬼掠凹1'    
}

getName.myApply(Person); // 鬼掠凹1

```

## call

```js
// call的第二个参数是一个参数列表
Function.prototype.myCall = function (ctx = window, ...args) {
    const key = Symbol();
    ctx[key] = this;
    const result = ctx[key](...args);
    delete ctx[key];
    return result;
}

var name = '鬼掠凹';

function getName() {
    console.log(this.name);
}

getName() // 鬼掠凹

const Person = {
    name: '鬼掠凹1'    
}

getName.myCall(Person); // 鬼掠凹1

```

## bind

```js
// 返回一个函数，需要注意如果这个函数被new后的返回
Function.prototype.myBind = function(ctx, ...args) {
    const fn = this;
    return function newFn (...newFnArgs) {
        if (this instanceof newFn) {
            return new fn(...args, ...newFnArgs);
        } else {
            return fn.apply(ctx, [...args, ...newFnArgs]);
        }
    }
}

var name = '鬼掠凹';

function getName() {
    console.log(this.name);
}

getName() // 鬼掠凹

const Person = {
    name: '鬼掠凹1'    
}

let fn = getName.myBind(Person);

fn(); // 鬼掠凹1

```
