//single param, return single expression 单个参数，返回单一表达式
let reflect = value => value;
//is equal to 相当于
let reflect = function (value) {
  return value;
}
/****************************************************************************/

//multiple params, return single expression 多参数，返回单一表达式
let sum = (num1, num2) => num1 + num2;
/****************************************************************************/

//no param, return single expression 无参数，返回单一表达式
let getName = () => "Damian";
/****************************************************************************/

//multiple expressions 多表达式函数体
let sum = (num1, num2) => {
  return num1 + num2;
}
/****************************************************************************/

//return JSON 返回对象字面量，或JSON
let getTempItem = id => ({
  id: id,
  name: "Temp"
});
/****************************************************************************/

//IIFE 立即调用函数表达式
let person = ((name) => {
  return {
    getName: () => name
  }
})("Damian");

console.log(person.getName());