var http = require('http');

var server =http.createServer();


//绑定request事件
server.on('request', function(req,res){
     // 编写响应头
    res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
    //获取地址
    var url = req.url;
    //根据获取的的地址来显示对应的内容
    if(url==="/"){
        res.end('Hello world');
    }else if(url==="/login"){
        res.end('hello login');
    }else if(url==="/request"){
        res.end('request');
    }else{
        res.end('404 Not Found');
    }
});

// 启动服务器
server.listen(3000,'127.0.0.1',() => {
    console.log('server listening on port at 3000...');
});
