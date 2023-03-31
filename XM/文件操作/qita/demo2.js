var fs = require('fs');
console.log(1);
fs.writeFile('E:/2022-2023/node/XM/文件操作/b.txt','第四章',function(err){
    if(err){
        console.log('不好意思,文件写入错误');
    }
    console.log(3);
});
console.log(2);