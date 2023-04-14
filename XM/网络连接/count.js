var net = require('net');

var serve=net.createServer();
var count = 0;
// 所有连接断开后触发close事件
serve.on('close', function(){
    console.log('服务器已关闭');
});
serve.on('connection', function(Socket){
    count++;
    console.log('当前连接人数'+count);
    console.log('有客户端连接上了');
    Socket.write('服务器的IP地址是'+Socket.remoteAddress+'\n');
    Socket.write('远程主机端口号'+Socket.remotePort+'\n');
});

// 使用listen(开启服务时)时触发listening事件
// serve.on('listening', function(){
//     console.log('服务开启成功，等待连接');
// });
serve.listen(3000,'127.0.0.1',()=>{
    console.log('服务开启成功，等待连接')
});
// 使用telnet 127.0.0.1 3000 命令来连接服务器