//引入MySQL模块
var mysql = require('mysql');
//创建连接池对象，并使用config数据库连接池操作库。
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql6zy13172',
    database:'node'
});

//创建sql变量储存select添加语句
var sql = 'select * from user'
//创建sql语句对象并将其传递给数据库连接池对象 pool.query()。    
pool.query(sql,(err,results)=>{
    if(err) return console.log(err);
    console.log(results); //输出结果集合对象列表。
    results.forEach((results)=>{
        console.log('姓名:',results.Username,'年龄:',results.Age,'地址:',results.Address)
    })
    pool.end(); //释放连接池对象的资源。
})

