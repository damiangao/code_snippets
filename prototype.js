function Person(name, sex) {
  this.name = name;
  this.sex = sex;
}

var person = new Person("Damian", "male");

console.log(Person.prototype.__proto__ === Object.prototype); //true
console.log(Person.prototype === person.__proto__); //true