var net = require('net');
var client =net.createConnection({
    host:'192.168.43.20',
    port:3000
});
client.on('connect',() => {
    console.log('客户端与服务器连接成功');
    process.stdin.on('data',(data)=>{
        data=data.toString().trim();
        client.write(data);
    })
});
client.on('data',(data) => {
    console.log(data.toString());
})