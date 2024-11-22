let arr = [1, 2, 900, 4], binaryArray = [], binary;
for(let num of arr){
    binary = "";
while(num > 0){
    binary = (num%2) + binary;
    num = Math.floor(num/2);
}
binaryArray.push(binary);
}

console.log(binaryArray);


//Using method
let array = [1, 2, 3, 4];
let binaryArr = array.map(num => num.toString(2));

console.log(binaryArr); 