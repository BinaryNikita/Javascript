

let promise1 = Promise.resolve("First promise");
let promise2 = Promise.resolve("Second promise");
let promise3 = Promise.resolve("Third promise");

// Promise.all([promise1, promise2, promise3])
// .then(result => {
//     console.log("All promise resolved");
// }).catch(err => {
//     console.log("Rejected");
// });

Promise.allSettled([promise1, promise2, promise3])
.then(result => {
    console.log("All settled");
}).catch(err => {
    console.log("Not settled");
})





