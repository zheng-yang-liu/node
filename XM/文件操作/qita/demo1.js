var fs = require('fs');
try{
    console.log('文件写入成功');
    fs.writeFileSync('E:/2022-2023/node/XM/文件操作/a.txt','node.js操作');
}catch(e){
    console.log('文件写入失败');
}