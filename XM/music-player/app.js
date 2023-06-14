var http=require('http');
var config=require('./config');
var router=require('./router');
var render=require('./common/render');
//创建一个服务器，得到一个server实例
const { copyFile } = require('fs');
var server=http.createServer();
server.on('request',function(req,res){
    //首先动态的给Response对象挂载了一个render
    render(res)
    //在进入router模块之前，就已经给res对象加了一个属性方法
    //然后请求和响应被传递到一个路由的模块中
    router(req,res)

});
//监听端口，开启服务
server.listen(config.port,config.host,function(){
    console.log('server is lisstening at port 3000');
    console.log('pleasevisit http://'+config.host+':'+config.port);
})