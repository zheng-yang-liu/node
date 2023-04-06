// 流动模式
var fs = require('fs');
var chak='';
var rs = fs.createReadStream('a.txt');

// 转换rs的字符编码
rs.setEncoding('utf8');
// 每读取一次，将读取到的操作赋值给chak
rs.on('data',(text) => {
    chak+=text;
});
//读取结束后，输出chak结果
rs.on('end',() =>{
    console.log('chak的:'+chak);
});
// 输出错误信息
rs.on('error',(err) =>{
    console.log(err.stack);
});
// console.log('程序运行结束');