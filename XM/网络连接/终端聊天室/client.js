// 客户端


// 引入ner模块
var net = require('net');
// 引入config文件
var config = require('./config');


// 用户注册陈成功后给该属性赋值
var username;
client.on('connect', function(){
    console.log('请输入用户名');
    process.stdin.on('data',(data)=>{
        data = data.toString().trim();
        console.log("这是data聊天数据"+data);
        if(!username){
            var send ={
                protocal: 'signup',
                username:data
            }
            client.write(JSON.stringify(send));
            return;
        }


        // 判断是广播消息还是点对点消息
        const regex = /(.{1,18}):(.+)/; // 定义正则表达式
        
        const matches = regex.exec(data); // 进行匹配操作并获取匹配结果
        console.log(matches)
        if(matches){
            
            var to = matches[1];//其中第一个元素是整个匹配的子字符串，
            var message = matches[2];//第二个元素是第一个分组捕获的文本
            var send={
                protocal:'p2p',
                from:username,
                to:to,
                message:message
            }
            client.write(JSON.stringify(send));

        }else{
            var send ={
                protocal:'broadcast',
                from:username,
                message:data
            }
            client.write(JSON.stringify(send));
        }


    });
});



client.on('data', function(data){
    // 将JSON字符串转换成对象形式
    data = JSON.parse(data);
    switch(data.protocal){
        case 'signup':
            var code = data.code;
            switch(code){
                case 1000:
                    username = data.username;
                    console.log(data.message);
                    break;
                case 1001:
                    console.log(data.message);
                    break;
                default :
                    break;
            }
            break;//调试成功



        case 'broadcast':
            console.log(data.message);
            break;


        case 'p2p':
            var code =data.code;
            switch(code){
                case 2000:
                    var from =data.from;
                    var message = data.message;
                    message = from +'说:'+message;
                    console.log(message);
                    break;
                case 2001:
                    console.log(data.message);
                    break;
                default:
                    break;
            }
            break;


        default:
            break;
    }
})
