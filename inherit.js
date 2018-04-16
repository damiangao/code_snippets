//原型链
function Father() {
  this.fatherName = "A";
}

Father.prototype.getFatherName = function () {
  return this.fatherName;
}

function Son() {
  this.sonName = "B";
}

Son.prototype = new Father();

Son.prototype.getSonName = function () {
  return this.sonName;
}

var person = new Son();
console.log(person.getFatherName()); //A
console.log(person.constructor === Father); //true
console.log(Son.prototype.constructor === Father); //true
console.log(Son.prototype.constructor === Son); //false
console.log(person.__proto__.constructor === Father); //true

//借用构造函数
function Supertype() {
  this.colors = ["red", "blue", "green"];
}

function SubType() {
  //继承SuperType
  Supertype.call(this);
}

//组合继承
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
  alert(this.name);
};

function SubType(name, age) {
  //继承属性
  Supertype.call(this, name);

  this.age = age;
}

//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
  alert(this.age);
}

//原型式继承
var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = Object.create(person);

var yetAnotherPerson = Object.create(person, {
  name: {
    value: "Greg"
  }
});
//寄生组合式继承
function inheritPrototype(subType, superType) {
  var prototype = Object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
  alert(this.name);
};

function SubType(name, age) {
  //继承属性
  Supertype.call(this, name);

  this.age = age;
}

inheritPrototype(SubType, SuperType);