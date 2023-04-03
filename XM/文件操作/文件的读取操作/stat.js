// 查看文件信息
var fs = require('fs');
fs.stat('./a.txt', function(err, stat) {
    if (err) return console.error(err);
    console.log(stat);
})