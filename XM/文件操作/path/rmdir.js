var fs = require('fs');
// 读取目录
fs.readdir("E:/2022-2023/node/XM/文件操作/path/path/",function(err,files){
    if(err){
        return console.error(err);
    }
    // 遍历文件夹
    files.forEach(function(flie){
        console.log(flie);
        fs.unlink("E:/2022-2023/node/XM/文件操作/path/path/"+flie,function(err){
            if(err){
                return console.error(err);
            }
            console.log(flie+'文件删除成功');
        });
        
    });
    console.log('开始删除文件夹');
        fs.rmdir("E:/2022-2023/node/XM/文件操作/path/path/",function(err){
            if(err){
                return console.error(err);
            }
            console.log('文件夹删除成功');
        });
})