var fs=require("fs");
var data="\n这是追加的数据";
fs.appendFile('./a.txt',data,function(err){
    if(err){
        return console.error(err);
    }
    console.log('文件追加成功')
})