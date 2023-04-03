var copy=require('./copy');
copy('./a.txt','./b.txt',function(err){
    if(err) return console.log('文件复制失败！');
    console.log('文件复制成功！');
})  