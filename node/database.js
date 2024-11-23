const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Tech_Solutions',
});

function createUser(query, values) {
  connection.query(query, values, (err, result) => {
    if (err) {
      console.log('Error occured while creating the user: ', err);
    } else {
      console.log('User created succesfully');
    }
  });
}

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

deleteRecord(`DELETE FROM Employees WHERE first_name = 'Pooja'`);

function updateRecord(query) {
  connection.query(query, (err, result) => {
    if (err) {
      console.log('Error while updating record:', err);
    } else {
      console.log(`Updated ${result.affectedRows} record(s) successfully.`);
    }
  });
}

//const sql = connection.format('SELECT * FROM users WHERE name = ?', ['John']);
// console.log(sql); // Output: SELECT * FROM users WHERE name = 'John'


// updateRecord("update Employees set first_name = 'Nikita' where employee_id = 2");
// const sql = 'INSERT INTO employees (first_name, last_name, email, phone_number, job_title, salary, department_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
// const values = ["Nikita", "Vishnoi", "nikita@gmail.com", "9876543210", "Java Developer", 100000, 2];
// createUser(sql, values);
function close(){
  connection.end((err) => {
    if (err) {
      console.log('Error closing the connection:', err);
    } else {
      console.log('Connection closed.');
    }
  });
}

close();

module.exports = connection;

// connection.query(`select * from Employees where employee_id >= 5`, (err, result) => {
//   if(err){
//     console.log(err);
//   }

//   return console.table(result)
// });
