const mysql = require("mysql");
const { dbConfig } = require("../utils/config");
//数据库连接实例
var poolConnect = mysql.createPool(dbConfig);

//获取
exports.getData = function (sql,callback) {
	poolConnect.getConnection(function (errdata, connection) {
		connection.query(sql, function (err, rows) {
			if (err) {
				console.log(err);
			}
			callback(err, rows);
			connection.release();
		});
	});
}

