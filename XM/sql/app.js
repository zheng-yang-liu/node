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
var sql = 'insert into user (Username, Age, Address) values (?,?,?)';
//创建sql语句对象并将其传递给数据库连接池对象 pool.query()。    
pool.query(sql, [ '武则天', 23, '石家庄'], function (error, results) {
    //执行操作时发生的错误
    if(error) return console.log(error);    
    //执行操作成功时返回成功的记录数
    if(results.affectedRows === 1) {
        console.log('成功插入一条数据!');  
    }  
    // 关闭连接池对象 pool。
    pool.end();
});
