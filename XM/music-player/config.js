var path=require('path');
module.exports={//对外声明一个对象
    port:3000,
    host:'127.0.0.1',
    viewPath:path.join(__dirname,'views'),
    uploadPath:path.join(__dirname,'uploads')

}