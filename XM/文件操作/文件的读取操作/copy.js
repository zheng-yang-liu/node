// 封装一个复制模块
// 先写一个文件读取操作
// 再写一个文件写入操作然后封装次模块
var fs=require("fs");
// src：原文件路径（被复制的文件）
// goOut：输出的文件路径
function copy(src, goOut,callback){
    // 进行文件读取操作
    fs.readFile(src,function(err,data){
        if(err){
            return console.error(err);
        }
        // 文件写入操作
        fs.writeFile(goOut,data.toString(),function(err){
            if(err){
                return console.error(err);
            }
            callback(null);
        });
    });
}
module.exports = copy;