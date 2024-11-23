/* 
10.
You are given an array of objects representing a collection of employees, each with a name, salary, and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000.

input:- const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

output:- [
  { department: 'HR', average: 71666 }
]	
*/


const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
  ];
  

  const result = Object.values(
    employees.reduce((acc, { department, salary }) => {
      if (!acc[department]) acc[department] = { department, total: 0, count: 0 };
      acc[department].total += salary;
      acc[department].count += 1;
      return acc;
    }, {})
  )
    .map(({ department, total, count }) => ({
      department,
      average: Math.round(total / count), 
    }))
    .filter(({ average }) => average > 65000); 
  
  console.log(result);
  