var fs = require('fs');
fs.mkdir('E:/2022-2023/node/XM/文件操作/path/path',function(err){
    if(err){
        return console.error(err);
    }
    console.log('目标文件创建成功')
});