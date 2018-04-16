//工厂模式
//缺点：没创建一个对象就要创建一个sayName
function createPerson(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    alert(this.name);
  };
  return o;
}
//构造函数模式
//缺点：同上
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    alert(this.name);
  };
}
//原型模式
//缺点：对象操作会改变原型的值
function Person() {}

Person.prototype.name = "Damian";
Person.prototype.age = 21;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
  alert(this.name);
}
//或者
function Person() {}

Person.prototype = {
  constructor: Person,
  name: "Damian",
  age: 21,
  job: "Student",
  sayName: function () {
    alert(this.name);
  }
}

//组合使用构造函数模式和原型模式
//优点：解决了上面的问题
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ["AFeng,YC,WY"];
}
Person.prototype = {
  constructor: Person,
  sayName = function () {
    alert(this.name);
  }
}