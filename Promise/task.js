const roomCleaning = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve("Room cleaned......")
        }, 1000);
    });
}
const garbageRemoving = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve("garbage removed......")
        }, 1000);
    });
}

Promise.all()