/*
try{
    可能出错的代码段
}catch(e){
    代码出错后进行执行的代码段
}
*/
/*


function zhuanhuan(str){
    return JSON.parse(str);
}
// 同步代码出处理异常捕获
try{
    var obj=zhuanhuan('foo');
    console.log(obj);
}catch(e){
    console.log('转换错误');
}


*/
// 同步代码处理异常



// 异步代码无法使用try  catch进行异常捕获
function zhuanhuan2(str){
    setTimeout(function(){
        return JSON.parse(str);
    },0)
}
try{
    var obj =zhuanhuan2("foo");
    console.log(obj);
}catch(e){
    console.log("转换错误");
}
