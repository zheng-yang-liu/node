// 通过回调函数来接受异步代码执行的处理结果
function zhuanhuan(str,callback){
    setTimeout(function(){
        try{
            var obj=JSON.parse(str);
            callback(null,obj);
        }catch(e){
            callback(e,null)
        }
    },0)
}
//测试
var json='{"a":12,"b":13,"name":"blue"}';
zhuanhuan(json,function(err,result){
    if(err){
        return console.log('转换错误');
    }
    console.log('转化成功'+ result);
})