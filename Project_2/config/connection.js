const mysql = require('mysql');
let connection = mysql.createConnection({
	port: 8889,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'project2'
});


connection.connect();

module.exports = connection;

