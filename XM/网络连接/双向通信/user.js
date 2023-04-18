// 引入net模块
var net =require("net");
//创建服务器
var server = net.createServer();

// 连接上来之后触发connection事件
server.on('connection', function(socket){
    // 监听socket中的data数据时触发此事件,来获取接收到的数据
    socket.on('data', function(data){
        // 显示ip
        console.log("ip:"+socket.remoteAddress);
        // 显示端口号
        console.log("port:"+socket.remotePort);
        console.log(data.toString());
        // 向客户端发送数据
        // const eat = Buffer.from('我吃的小豆包', 'utf-8');
        socket.write('我吃的小豆包');
    });
});

// 创建listen监听
server.listen(3000,'192.168.43.125',()=>{
    console.log('server listening at port 3000')
})