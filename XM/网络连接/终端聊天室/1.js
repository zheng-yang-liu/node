
// /^(.{1,18}) : (.+)$/
const regex = /(.{1,18}):(.+)/; // 定义正则表达式
const data = "name:tom"; // 定义匹配的数据
const matches = regex.exec(data); // 进行匹配操作并获取匹配结果
// console.log(matches)
// 判断是否匹配成功
if (matches) {
    console.log("匹配成功：");
    console.log(matches[0]); // 输出匹配的完整字符串
    console.log(matches[1]); // 输出匹配的属性名
    console.log(matches[2]); // 输出匹配的属性值
} else {
    console.log("匹配失败！");
}
//实现求1到100之间的偶数和的js代码