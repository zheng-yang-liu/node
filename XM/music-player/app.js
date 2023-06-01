// 入口文件
var http = require('http');
var config = require('./config');
var router = require('./router');
var renderer = require('./common/render');
var server = http.createServer();
console.log(config.viewsPath)
server.on('request', function (req, res) {
    renderer(res);
    router(req, res);

});

// listen 监听
server.listen(config.port, config.host, function () {
    console.log("server listening at port " + config.port);
    console.log(" please visit http://localhost",config.host);
 })