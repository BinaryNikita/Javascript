// 4. Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
// output: -[13, 67, 54];

const input = [
  {
    name: 'John',
    age: 13,
  },
  {
    name: 'Mark',
    age: 56,
  },
  {
    name: 'Rachel',
    age: 45,
  },
  {
    name: 'Nate',
    age: 67,
  },
  {
    name: 'Jennifer',
    age: 65,
  },
];

function ageDifference(obj) {
  let age = [];
  for (let a of obj) {
    age.push(a.age);
  }

  age.sort((a, b) => b - a);

  let difference = [];
  difference[0] = age[0];
  difference[1] = age[age.length - 1];
  difference[2] = difference[0] - difference[1];

  console.log(difference);
}

ageDifference(input);
