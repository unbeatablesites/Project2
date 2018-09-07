const connection = require("./connection");

const orm = {
	selectAll: function(cb) {
		connection.query("SELECT * FROM Jobs", function(err, data){
			if (err) cb(err, null);
				cb(null, data);
		});
	}
	,
	insertOne: function(newJob, cb) {
		const sqlQuery = `INSERT INTO Jobs(title) VALUES('${newJob}')`;
		connection.query(sqlQuery, function(err, data){
			if (err) cb(err, null);
				cb(null, data);
		});
	}

};

module.exports = orm;

