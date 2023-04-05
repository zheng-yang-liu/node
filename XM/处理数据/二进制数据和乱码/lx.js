var fs = require('fs');
var data=fs.readFileSync('./a.txt');
console.log(data.toString());
// 利用readFile将a.txt中的内容赋值给变量data
// readFileSync和readFile的区别
/*
fs.readFileSync() 方法返回一个字符串或一个 Buffer，
而 fs.readFile() 方法需要传递一个回调函数，该函数在文件读取完成后被调用，
并将文件内容作为第二个参数传递给该函数。
*/