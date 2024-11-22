const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Tech_Solutions'
});

connection.query(`select * from Employees`, (err, result) => {
  if(err){
    console.log(err);
  }

  return console.table(result)
});

module.exports = connection;
