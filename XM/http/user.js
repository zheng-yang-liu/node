var http = require('http');
var server= http.createServer();

// 绑定connection事件，当有客户端连接时执行
server.on('connection', function(socket){
    socket.write("hello")
})

// 绑定request事件，有服务器连接时执行
server.on('request', function(req, res){
    // 重写请求头重定向，跳转到百度
    // req.writeHead(301,{Location:'http://www.baidu.com'});
    // 获取请求头的信息
    console.log(req.headers);
    // 显示http协议版本
    console.log(req.httpVersion);
    res.write("hello");
    // 结束
    res.end();
});

// 绑定close事件,当服务器关闭时执行
server.on('close', function(){
    console.log("我被定时器关闭了");
});

// 启动服务器，当服务器运行时执行
server.listen(3000,'127.0.0.1',()=>{
    console.log("server is listening at port 3000...")
})

// 定时关闭服务器
// setTimeout(() => {
//     server.close(()=>{
//         console.log("服务器已关闭");
//     });
// }, 10000);