var http = require('http');
var server= http.createServer();

// 绑定request事件，有服务器连接时执行
server.on('request', function(req, res){

    // 获取请求头的信息
    console.log(req.headers);
    // 显示http协议版本
    console.log(req.httpVersion);
    // 显示请求方法
    console.log(req.method);
    // 显示状态码
    console.log(req.statusCode);
    // 显示请求地址的url
    console.log(req.url);

    
    res.write("hello");
    // 结束
    res.end();
});



// 启动服务器，当服务器运行时执行
server.listen(3000,'127.0.0.1',()=>{
    console.log("server is listening at port 3000...")
})

