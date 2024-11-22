function createCountDown(seconds){
    let timeleft = seconds;

    return function startTimer(){
        const intervalId = setInterval(() => {
            if(timeleft > 0){
                console.log(`Timeleft: ${timeleft} seconds`)
                timeleft--;
            } else {
                console.log("Countdown finished");
                clearInterval(intervalId);
            }
        }, 1000);
    };
}


const startTimer = createCountDown(10);
startTimer();
