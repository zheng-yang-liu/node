// 删除数据操作



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
var sql = "delete from user where Age<?"
//创建sql语句对象并将其传递给数据库连接池对象 pool.query()。    
pool.query(sql, [60],(err,results)=>{
    if(err) return console.log(err);
    console.log(results);
    if(results.affectedRows > 0){
        console.log("共删除了",results.affectedRows,"条数据");
    }
    pool.end();
});