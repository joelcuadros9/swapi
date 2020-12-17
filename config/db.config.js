const mysql = require('mysql');

var db = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Base de datos conectada!");
});

module.exports = db;