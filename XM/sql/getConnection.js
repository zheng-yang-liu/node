//  取出连接池里的连接

//引入MySQL模块
var mysql = require("mysql");
//创建连接池对象，并使用config数据库连接池操作库。
var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "mysql6zy13172",
    database: "node",
});

pool.getConnection(function (err, connection) {
    if (err) {
        console.log("连接失败");
    } else {
        console.log("连接成功");
        connection.query('select * from user', (error, data) => {
            if (error) {
                console.error(error);
            } else {
                console.log(data);
                //循环输出
                data.forEach(rss => {
                    console.log("姓名",rss.Username,"年龄",rss.Age,"地址",rss.Address);
                });
            } 
            connection.release(); //释放连接对象。 
        });
    }
    
    pool.end(); //回收连接池对象。


});
