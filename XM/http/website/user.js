var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer();


server.on('request',(req,res)=>{
    //获取路径
    var url = req.url;
    //判断url显示对应的页面
    if(url==='/'){
        let htmlpath=path.join(__dirname,'static/index.html');
        fs.readFile(htmlpath,'utf-8',(err,data)=>{
            if (err){
                console.log(err);
            }
            res.end(data);
        });
    }else if(url==='/login'){
        let htmlpath=path.join(__dirname,'static/login.html');
        fs.readFile(htmlpath,'utf-8',(err,data)=>{
            if (err){
                console.log(err);
            }
            res.end(data);
        });

    }else if(url==='/register'){
        let htmlpath=path.join(__dirname,'static/register.html');
        fs.readFile(htmlpath,'utf-8',(err,data)=>{
            if (err){
                console.log(err);
            }
            res.end(data);
        });

    }else if(url==='/login.html'){
        let htmlpath=path.join(__dirname,'static/login.html');
        fs.readFile(htmlpath,'utf-8',(err,data)=>{
            if (err){
                console.log(err);
            }
            res.end(data);
        });

    }else if(url==='/register.html'){
        let htmlpath=path.join(__dirname,'static/register.html');
        fs.readFile(htmlpath,'utf-8',(err,data)=>{
            if (err){
                console.log(err);
            }
            res.end(data);
        });

    }else if(url==='/css/main.css'){
        let csspath = path.join(__dirname,'static/css/main.css');
        fs.readFile(csspath,'utf-8',(err,data)=>{
            if (err){
                console.log(err);
            }
            res.end(data);
        })
    }else if(url==='/images/1.jpg'){
        let imgpath = path.join(__dirname,'static/images/1.jpg');
        // 不需要用utf-8来读取
        fs.readFile(imgpath,(err,data)=>{
            if (err){
                console.log(err);
            }
            res.end(data);
        })
    }else {
        let notpath = path.join(__dirname,'static/404.html');
        fs.readFile(notpath,'utf-8',(err,data)=>{
            if (err){
                console.log(err);
            }
            res.end(data);
        })
    }
})



server.listen(3000,'127.0.0.1',()=>{
    console.log('server listening on port at 3000');
})