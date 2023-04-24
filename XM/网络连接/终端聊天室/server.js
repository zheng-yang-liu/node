//服务器

// 引入ner模块
var net = require('net');
// 引入config文件
var config = require('./config');
var broadcast = require('./broadcast.js');
var p2p = require('./p2p.js');
var sig = require('./signup.js');
var server = net.createServer();
var users={};

server.on('connection', function(socket){
    console.log(socket.remoteAddress+'上线了');
    socket.on('data', function(data){
        console.log(data.toString());
        // 解析客户端发送的数据
        data =JSON.parse(data);
        //根据客户端发送的数据类型，在做对应的操作
        switch(data.protocal){
            case 'signup':
                sig.signup(socket,data,users);
                break;
            case 'broadcast':
                broadcast.broadcast(data,users);
                break;
            case 'p2p':
                p2p.p2p(socket,data,users);
                break;
            default:
                break;
        }
    });
    socket.on('error',function(){
        console.log('有客户端异常退出了')
    })
})

// 启动服务器开始监听
server.listen(config.port, config.host,() => {
    console.log('server listening at port ' + config.port);
})
