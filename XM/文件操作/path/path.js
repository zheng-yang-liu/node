var path =require('path');
var str = "E:/a/b/c.txt"

// 获取文件名
console.log(path.basename(str));

// 获取文件目录
console.log(path.dirname(str));

// 获取文件拓展名
console.log(path.extname(str));

// 判断是否为绝对路径
console.log(path.isAbsolute(str));

// 拼接路径字符串
console.log(path.join("E:/a","b","foo.txt"));

// 将非标准路径转换成标准路径r
var newpath = path.join("E:/a","b","foo.txt");
console.log(path.normalize(newpath));

//获取文件路径的分隔符
console.log(path.sep);