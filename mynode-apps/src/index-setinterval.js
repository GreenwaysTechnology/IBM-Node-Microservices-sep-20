const { log } = console;
let intervalId;
const tick = callback => {
    intervalId = setInterval(callback, 1000, Math.random());
}
const stopTimer = () => clearInterval(intervalId);
setTimeout(stopTimer, 10000);
tick(log);