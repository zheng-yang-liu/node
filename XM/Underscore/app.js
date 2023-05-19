var http = require('http');
var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var server = http.createServer();
server.on('request',(req,res)=>{
    var url = req.url;
    if(url==="/"){
        fs.readFile(path.join(__dirname,'index.html'), 'utf8', function(err,data) {
            if(err) {
                return res.end(err);
            }
            var compiled = _.template(data);
            var htmlStr = compiled({
                title:'HELLo WORD',
                arr:[
                    {name:'jack'},
                    {name:'rose'},
                    {name:'mike'}
                ]
            });
            res.end(htmlStr);
        });
    }
})
server.listen(3000,()=>{
    console.log("server listening on port in 3000");
});
