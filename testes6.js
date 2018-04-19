// function testFunc(first = 0, second = 1, third = function () {
//   return 2;
// }) {
//   console.log(first + second + third());
// }

// testFunc(); //3
// testFunc(1); //4
// testFunc(undefined, 3, function () {
//   return 2;
// }); //5

// function testFunc(first, second = "b") {
//   console.log(arguments.length);
//   console.log(first === arguments[0]);
//   console.log(second === arguments[1]);
//   first = "c";
//   second = "d";
//   console.log(first === arguments[0]);
//   console.log(second === arguments[1]);
// }

// testFunc("a");
// let value = 0;

// function getValue() {
//   return value++;
// }

// function add(first, second = getValue()) {
//   return first + second;
// }

// console.log(add(1, 1));
// console.log(add(1));
// console.log(add(1));

// function testFunc(first, second = first + 1) {
//   return first + second;
// }

// console.log(testFunc(1, 1));
// console.log(testFunc(1));

// function pick(first, ...keys) {
//   let result = first;

//   for (let i = 0, len = keys.length; i < len; i++) {
//     result += keys[i];
//   }

//   return result;
// }

// console.log(pick(1, 2, 3, 4));


// function add(...keys) {
//   let result = 0;
//   for (let i = 0, len = keys.length; i < len; i++) {
//     result += keys[i];
//   }
//   return result;
// }

// console.log(add(1, 2, 3, 4));

// let arr = [1, 2, 3, 4];
// console.log(add(...arr));

// let arr2 = [2, 3, 4];
// console.log(add(1, ...arr2));

// let arr3 = [1, 2, 3];
// console.log(add(...arr3, 4));


// let person = {
//   name: "Damian",
//   getName: () => this.name,
//   isThisEqualToWindow: () => {
//     console.log(this === window);
//   }

// }

// console.log(person.getName()); //undefine
// person.isThisEqualToWindow(); //true

// let PageHandler = {
//   id: "123456",
//   init: function () {
//     document.addEventListener("click", event => this.doSomething(event.type), false);
//   },
//   doSomething: function (type) {
//     console.log("Handling " + type + " for " + this.id);

//   }
// };

// PageHandler.init();

function outer(arg) {

  return () => arguments[0];
}
var func = outer(1);
console.log(func());