//向外开放变量name
exports.name='nihao';
// exports不可以被重新定义而module.exports可以被重新定义
//向外开放变量age type
module.exports.abg='10';
module.exports.type='edu';
//向外开放函数sayHello
module.exports.sayHello= function(){
console.log("Hello");
}
