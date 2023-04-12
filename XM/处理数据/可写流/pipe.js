var fs = require('fs');

var path1='./input.txt';
var path2='./out.txt';

var rs=fs.createReadStream(path1);
var ws=fs.createWriteStream(path2);

if(rs.pipe(ws)){
    console.log('文件复制成功');
}else{
    console.log('文件复制失败');
}