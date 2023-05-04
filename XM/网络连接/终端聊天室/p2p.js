// 点对点消息
exports.p2p = function(socket,data,users){
    var to =data.to;
    var message = data.message;
    // 找到要发给人的socket地址
    var receiver = users[to];
    if(!receiver){
        var send={
            protocal:'p2p',
            code:2001,
            message:'用户不存在',
            from:data.from,
            message:message
        }
        socket.write(new Buffer(JSON.stringify(send)));
        
    }else{
        var send={
            protocal:'p2p',
            code:2000,
            from:data.from,
            message:message
        }
        receiver.write(new Buffer(JSON.stringify(send)));
    }
}
//刘政阳180121144