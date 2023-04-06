// 暂停流
const fs=require('fs');
// 创建一个可读流
const rs=fs.createReadStream('a.txt',{
    highWaterMark:1//最多存储1个字节
});
// readable触发条件达到highWaterMark设定的界限或者读取完毕
rs.on('readable',()=>{
    let data=rs.read();
    while(data){
        console.log(data.toString());
    }
});