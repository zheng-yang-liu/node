var http = require('http');
var server= http.createServer();

// 绑定request事件，有服务器连接时执行
server.on('request', function(req, res){
    // 编写响应头
    res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
    res.write("欢迎访问我的网站");
    res.write("<p style='color:red;font-size:20px'>这是一个新的项目</p>")
    // 结束发送
    res.end("..........+..........");
});



// 启动服务器，当服务器运行时执行
server.listen(3000,'127.0.0.1',()=>{
    console.log("server is listening at port 3000...")
})

