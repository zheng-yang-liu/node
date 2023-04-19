// 引入net模块
var net =require("net");
//创建服务器
var server = net.createServer();
var users=[];
// 连接上来之后触发connection事件
server.on('connection', function(socket){
    // 监听socket中的data数据时触发此事件,来获取接收到的数据
    users.push(socket);
    console.log('客户端'+socket.remoteAddress+'连接上了');
    socket.on('data', function(data){
        data =data.toString().trim();
        // forEach便利数组
        users.forEach((client)=>{
            if(client != socket){
                client.write(client.remoteAddress+':'+data);
            }
        });
    });
    socket.on('error', function(){
        console.log('客户端异常退出');
    })
});

// 创建listen监听
server.listen(3000,'127.0.0.1',()=>{
    console.log('server listening at port 3000')
})