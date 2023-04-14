var net = require('net');

var serve=net.createServer();

// 所有连接断开后触发close事件
serve.on('close', function(){
    console.log('服务器已关闭');
});
serve.on('connection', function(Socket){
    console.log('有客户端连接上了');
    console.log('服务器的IP地址是'+Socket.remoteAddress+'连接了当前服务器');
    console.log('缓冲区大小'+Socket.bufferSize);
    console.log('远程主机端口号'+Socket.remotePort);

    console.log('接收的字节数'+Socket.bytesRead);
    Socket.write('HelloWord\n\r');
    console.log('发送的字节数'+Socket.bytesWritten);
    Socket.setTimeout(10000,()=>{
        Socket.write('The server connection is timeout')
    })
});

// 使用listen(开启服务时)时触发listening事件
serve.on('listening', function(){
    console.log('服务开启成功，等待连接');
});
serve.listen(3000,'127.0.0.1');
// 使用telnet 127.0.0.1 3000 命令来连接服务器