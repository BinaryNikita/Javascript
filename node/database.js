const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Tech_Solutions',
});

function displayResult(query) {
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.table(results);
  });
}



function deleteRecord(query) {
  connection.query(query, (err, result) => {
    if (err) {
      console.log('Error while deleting record:', err);
    } else {
      console.log(`Deleted ${result.affectedRows} record(s) successfully.`);
    }
  });
}

deleteRecord(`DELETE FROM Employees WHERE employee_id = 2`);

function updateRecord(query){

  connection.query(query, (err, result) => {
    if(err){
      console.log('Error while updating record:', err);
    } else {
      console.log(`Updated ${result.affectedRows} record(s) successfully.`);

    }
  })
}

updateRecord("update Employees set first_name = 'Nikita' where employee_id = 2");
');

module.exports = connection;

// connection.query(`select * from Employees where employee_id >= 5`, (err, result) => {
//   if(err){
//     console.log(err);
//   }

//   return console.table(result)
// });
