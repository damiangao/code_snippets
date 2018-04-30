// 模块模式
var Person = (function () {
  var name = "Damian";

  function getName() {
    return name;
  }

  return {
    getName: getName
  }
})();

console.log(Person.getName()); //Damian

// 工厂模式

function create(name) {
  var obj = new Object();
  obj.name = name;
  return obj;
}

var obj = create("Damian");
console.log(obj.name); //Damian`

// 单例模式

var Singleton = function (name) {
  this.name = name;
};

Singleton.prototype.getName = function () {
  console.log(this.name);
}

Singleton.getInstance = (function () {
  var instance = null;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }

    return instance;
  }
})();

var a = Singleton('sven1');
var b = Singleton('sven2');
console.log(a === b);

// 发布订阅模式
var salesOffices = {}; //定义售楼处

salesOffices.clientList = {}; //缓存列表，存放订阅者的回调函数

salesOffices.listen = function (key, fn) {
  if (!this.clientList[key]) { //如果没有订阅过此类消息，就给改类消息一个缓存列表
    this.clientList[key] = [];
  }
  this.clientList[key].push(fn); //将响应函数添加进此类消息
};
salesOffices.trigger = function () { //发布消息
  var key = Array.prototype.shift.call(arguments); //取出消息类型
  fns = this.clientList[key]; //取出对应函数集合

  if (!fns || fns.length === 0) {
    return false;
  }

  for (var i = 0, fn; fn = fns[i++];) {
    fn.apply(this, arguments); //除去消息类型后的消息参数
  }
};
//测试
salesOffices.listen('88', function (price) {
  console.log('price=' + price);
});

salesOffices.listen('110', function (price) {
  console.log('price=' + price);
});

salesOffices.trigger('88', 2000000);
salesOffices.trigger('110', 3000000);



// 继承
function SuperType(name) {
  this.name = name;
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
}

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

function inherit(SubType, SuperType) {
  var prototype = new Object(SuperType.prototype);
  prototype.constructor = SubType;
  SubType.prototype = prototype;
}

inherit(SubType, SuperType);

var person = new SubType('Damian', 21);
person.sayName();