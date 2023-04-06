var fs =require("fs");
var  rs =fs.createReadStream('a.txt',{
    flags:'a+',
    highWaterMark:20,
    encoding:'utf8',
    start:2,
    end:9

});
rs.on('data',(data)=>{
    console.log(data.toString());
});