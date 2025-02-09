let arr = [1, 2, 3, 4, 5];
let newArr = arr.map(el => el*2);
console.log(newArr);

let even = arr.filter(el => el%2==0);
console.log(even);

let sum = arr.reduce((el, acc) => el+acc, 0);
console.log(sum);

let fruit = ["apple", "banana", "apple", "orange", "banana", "banana"] ;

let occurence = fruit.reduce((acc, curr) =>{
    if(!acc[curr]){
        acc[curr] = 1;
    }else{
        acc[curr]++;
    }
    return acc;
} , {});

console.log(occurence);

let people =  [  
  { id: 1, name: "Alice" },  
  { id: 2, name: "Bob" },  
  { id: 3, name: "Charlie" }  
]  
let names = people.map(el => el.name);
console.log(names);