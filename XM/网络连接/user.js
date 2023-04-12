var net = require('net');

var serve=net.createServer();

// 所有连接断开后触发close事件
serve.on('close', function(){
    console.log('服务器已关闭');
});
serve.on('connection', function(){
    console.log('有客户端连接上了');
    var property="";
    var obj=serve.address();
    console.log('服务器的IP地址是'+obj.address);
    console.log('服务器的端口是'+obj.port);
    console.log('使用的协议是'+obj.family);
    serve.close();
});

// 使用listen(开启服务时)时触发listening事件
serve.on('listening', function(){
    console.log('服务开启成功，等待连接');
});
serve.listen(3000,'127.0.0.1');
// 使用telnet 127.0.0.1 3000 命令来连接服务器