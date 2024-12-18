const promise1 = new Promise((resolve, reject) => { 
    resolve('Promise 1 resolved') }); 

const promise2 = new Promise((resolve, reject) => { 
    
    reject("promise 2 resolved")
}); 

const promise3 = new Promise((resolve, reject) => {
    reject("promise 3 rejected");
}); 

Promise.race([promise2, promise1, promise3]) .then((value) => { console.log(value); }) .catch((error) => { console.error(error); });