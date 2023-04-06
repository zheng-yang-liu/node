var buf1= new Buffer('你好');
var buf2= new Buffer('再见');
// Buffer.concat缓冲区拼接
var buf3=Buffer.concat([buf1, buf2]);
console.log(buf3.toString())