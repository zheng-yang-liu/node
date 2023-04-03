var fs = require('fs');
fs.readFile('./a.txt', function(err, data) {
    if (err) {
        return console.log('文件读取失败')
    }
    console.log('这是读取到的数据');
    // 将读取到的内容转换成字符串形式进行输出
    console.log(data.toString());
})

