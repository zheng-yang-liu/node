
var count=1;
var sayHello= function(){
    if(count>=5){
        // clearInterval结束setInterval函数
        clearInterval(k)
    }
    
    console.log("处于连接状态");
    count++
}
// setInterval延时执行N此函数
var k=setInterval(sayHello,3000)
    