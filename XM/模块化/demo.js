//加载模块
var myModule = require('./info');
console.log(myModule);
//输出模块中的变量
console.log("name:"+myModule.name);
console.log("age:"+myModule.age);
console.log("type:"+myModule.type);
//调用模块中的函数
myModule.sayHello();
console.log('当前文件名',__filename);
console.log('当前文件夹',__dirname);
// 延时执行函数(setTimeout)只执行一次
var k=setTimeout(myModule.sayHello,5000);
clearTimeout(k);