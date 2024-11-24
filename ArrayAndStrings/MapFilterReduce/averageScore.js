/* 

8. You are given an array of objects representing a group of students, each with a name and an array of test scores. Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects containing only the students who have an average score above 90.
const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] }
];

output:-
[ 
  { name: 'David', average: 100 }
]   
  
*/

const students = [
  { name: 'Alice', scores: [90, 85, 92] },
  { name: 'Bob', scores: [75, 80, 85] },
  { name: 'Charlie', scores: [90, 95, 85] },
  { name: 'David', scores: [100, 100, 100] },
];

const topStudents = students
  .filter((student) => {
    const average =
      student.scores.reduce((sum, score) => sum + score, 0) /
      student.scores.length;
    return average > 90;
  })
  .map((student) => ({
    name: student.name,
    average:
      student.scores.reduce((sum, score) => sum + score, 0) /
      student.scores.length,
  }));

console.log(topStudents);