var num = 10;
var str = "hello";

console.log(typeof num); // 输出 "number"
console.log(typeof str); // 输出 "string"

num = num.toString();
str = str.toString();

console.log(typeof num); // 输出 "string"
console.log(typeof str); // 输出 "string"


/**
 * 
typeof是JavaScript中的一个运算符，用于获取一个值的数据类型。
在JavaScript中，有六种主要的数据类型，分别是：
原始类型：undefined、null、布尔值、数字和字符串。
对象类型：对象、数组和函数。
使用typeof运算符可以判断一个值的数据类型，返回一个字符串表示该数据类型。以下是一些使用typeof运算符的例子：
console.log(typeof 123); // 输出 "number"
console.log(typeof "hello"); // 输出 "string"
console.log(typeof true); // 输出 "boolean"
console.log(typeof undefined); // 输出 "undefined"
console.log(typeof null); // 输出 "object"
console.log(typeof {}); // 输出 "object"
console.log(typeof []); // 输出 "object"
console.log(typeof function(){}); // 输出 "function"
需要注意的是，typeof运算符对于原始类型的数据可以准确地返回其数据类型，但对于对象类型的数据，
它只能返回"object"，无法区分不同的对象类型。在实际开发中，如果需要判断一个对象的具体类型，
可以使用instanceof运算符或Object.prototype.toString()方法。

 */ 