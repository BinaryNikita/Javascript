function simpleFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) { 
            result.push(array[i]); 
        }
    }
    return result;
}


const numbers = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;

const evenNumbers = simpleFilter(numbers, isEven);
console.log(evenNumbers); 
