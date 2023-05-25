// 修改数据操作


//引入MySQL模块
var mysql = require('mysql');
//创建连接池对象，并使用config数据库连接池操作库。
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql6zy13172',
    database:'node'
});

//创建sql变量储存insert into添加语句
var sql = "update user set Age = ? where Username = ?" 
//创建sql语句对象并将其传递给数据库连接池对象 pool.query()。    
pool.query(sql, [45,'张三'],(err,results)=>{
    if(err) return console.log(err);
    console.log(results);
    if(results.affectedRows > 0){
        console.log("修改数据成功");
        console.log("修改了",results.affectedRows,"条数据");
    }
    pool.end();
    //执行完毕后，将销毁连接池对象。


});
