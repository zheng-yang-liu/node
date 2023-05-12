var net = require('net');
var client =net.createConnection({
    host:'127.0.0.1',
    port:3000
});
client.on('connect',() => {
    console.log('客户端与服务器连接成功');
    process.stdin.on('data',(data)=>{
        client.write(data.trim());
    })
});
client.on('data',(data) => {
    console.log(data.toString());
})



