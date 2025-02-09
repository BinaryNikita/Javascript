let promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 2000)
});

let promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 5000)
});

promise2.then(result => {
    console.log(result);
     promise1.then(result => {
            console.log(result);

    }).catch((err) => {
        console.log(err);
    })
}).catch((err) => {
    console.log(err);
});