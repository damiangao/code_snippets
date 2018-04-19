//手搓一个迭代器(iterator)
// function createIterator(items) {
//   var i = 0;
//   return {
//     next: function () {
//       var done = (i >= items.length);
//       var value = !done ? items[i++] : undefined;

//       return {
//         done: done,
//         value: value
//       };
//     }
//   };
// }

//generator

// function* createIterator(items) {
//   for (let i = 0; i < items.length; i++) {
//     yield items[i];
//   }
// }
//let createIterator = function *(items){} 也可以

// let iterator = createIterator([1, 2, 3]);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }

//创建可迭代对象
let collection = {
  items: [],
  * [Symbol.iterator]() {
    for (let item of this.items) {
      yield item;
    }
  }
};

collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for (const x of collection) {
  console.log(x);
}