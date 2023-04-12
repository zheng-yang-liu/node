// 引入fs
var fs = require('fs');


// 创建copyfile文件夹
fs.mkdir('./copyfile',(err)=>{
    if(err){
        return console.error(err);
    }
    console.log('copyfile文件创建成功')
})
// 创建可读流
var a= fs.createReadStream('./a/a.txt');
var b= fs.createReadStream('./a/b.mp');
var c= fs.createReadStream('./a/c.ini');
// 设置编码
a.setEncoding('utf8');
b.setEncoding('utf8');
c.setEncoding('utf8');

// 创建可写流
var a1=fs.createWriteStream('./copyfile/a.txt');
var b1=fs.createWriteStream('./copyfile/b.mp');
var c1=fs.createWriteStream('./copyfile/c.ini');

// 进行写的操作
a.on('data',function(data){
    a1.write(data);
});
a.on('error', function(err){
    console.log(err.stack);
});
a.on('end', function(){
    a1.end();
});
a1.on('error', function(err){
    console.log(err.stack);
});


b.on('data',function(data){
    b1.write(data);
});
b.on('error', function(err){
    console.log(err.stack);
});
b.on('end', function(){
    b1.end();
});
b1.on('error', function(err){
    console.log(err.stack);
});




c.on('data',function(data){
    c1.write(data);
});
c.on('error', function(err){
    console.log(err.stack);
});
c.on('end', function(){
    c1.end();
});
c1.on('error', function(err){
    console.log(err.stack);
});