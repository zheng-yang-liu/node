var fs = require('fs');
var rs =fs.createReadStream('input.txt');
var ws= fs.createWriteStream('output.txt');
// 设置可读流的字符编码
rs.setEncoding('utf8');

rs.on('data', function(data){
    ws.write(data);
})
rs.on('error', function(err){
    console.log(err.stack);
})
rs.on('end', function(){
    ws.end();
})

ws.on('error', function(err){
    console.log(err.stack);
})