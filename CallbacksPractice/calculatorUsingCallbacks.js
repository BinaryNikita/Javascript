function calculator(a, b, callback) {
    if(typeof(a) != "number" || typeof(b) != "number"){
        throw new Error("first two parameters must be numbers");
    }

    if (typeof callback !== "function") {
        throw new Error("Callback must be a function");
    }


    return callback(a, b);
}


const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => (y !== 0 ? x / y : "Cannot divide by zero");

console.log(calculator(10, 5, add));         
console.log(calculator(10, 5, subtract));    
console.log(calculator(10, 5, multiply));    
console.log(calculator(10, 5, divide));      
