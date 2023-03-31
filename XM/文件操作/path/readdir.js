var fs=require("fs")
fs.readdir('E:/', function(err,flies){
    if(err){
        return console.error(err);
    }
    flies.forEach(function(flies){
        console.log(flies)
    });
});