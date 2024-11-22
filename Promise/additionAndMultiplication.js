/* 
The first .then adds 2 to a number.
The second .then multiplies the result by 3.
The final .then logs the result.
*/


function chainOperations(number) {
    return Promise.resolve(number)
    .then(result => result + 2)
    .then(result => result * 3)
    .then(result => console.log("Final result:" , result));
    
}
chainOperations(2);
