function delayedLogger(message, delay, callback) {
    setTimeout(() => {
        console.log(`Logged after ${delay}ms: ${message}`);
        if (callback) callback();
    }, delay);
}


delayedLogger("Hello, world!", 1000, () => {
    console.log("Callback executed after logging.");
});