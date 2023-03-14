var count=1;
var sayHello= function(){
    if(count>=5){
        // clearInterval结束setInterval函数
        clearInterval(k)
    }
    
    console.log("处于连接状态");
    count++
}
// 3秒后执行sayHello函数count次
var k= setInterval(sayHello,3000);

// 3秒后执行sayHello函数一次
// var k=setTimeout(sayHello,3000)
// 取消setInterval函数的执行
// clearTimeout(k)