    var fs = require('fs');

    function listDir(directory) {
    // 获取指定文件夹下的文件和文件夹列表
    var files = fs.readdirSync(directory);

    // 将文件和文件夹列表存储到dir.txt文件中
    fs.writeFileSync('dir.txt', files.join('\n'));
    }
    
    module.exports = listDir;
// 编写模块list.js,调用该模功能传入指定的文件夹,模块会将该文件夹下的子文件和文件夹的列表存储到一个dir.txt的文件中