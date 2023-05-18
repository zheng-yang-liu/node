var http = require('http');
var fs= require('fs');
var path = require('path');
var server =http.createServer();

server.on('request', function(req, res){
    //当用访问”/“的时候默认让用户访问index.html
    var url = req.url;
    console.log(url);
    var fullpath = path.join(__dirname, 'static',url);
    if(url==='/'){
        fullpath = path.join(__dirname, 'static/index.html');
        // console.log(fullpath);
    }
    fs.readFile(fullpath,(err,data)=>{
        if(err){
            return res.end(err.message);
        }
        res.end(data);

    });
})



server.listen(3000,'127.0.0.1',()=>{
    console.log("server listening on port at 3000");
});