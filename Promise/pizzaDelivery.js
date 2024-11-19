const pizzaPromise = new Promise((resolve, reject) => {
    let pizzaAvailble = false;
    if(pizzaAvailble){
       resolve("Pizza delivered");
    } else {
        reject("Sorry, no pizza today. 😢");
    }
});

pizzaPromise.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});