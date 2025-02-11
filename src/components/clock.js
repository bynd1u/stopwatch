let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

let isRunning = false;

function start() {
    console.log('start');
    isRunning = true;
    setInterval(runClock, 10);
}

function reset() {
    isRunning = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    updateDisplay();
}

function stop() {
    isRunning = false;
}

function runClock()
{
    if(isRunning)
    {
    console.log('runClock');
    count++;

    if (count == 100) {
        second++;
        count = 0;
    }

    if (second == 60) {
        minute++;
        second = 0;
    }

    if (minute == 60) {
        hour++;
        minute = 0;
        second = 0;
    }
    updateDisplay();
}
}

function updateDisplay() {
    document.getElementById('hr').innerText = hour.toString().padStart(2, '0');
    document.getElementById('min').innerText = minute.toString().padStart(2, '0');
    document.getElementById('sec').innerText = second.toString().padStart(2, '0');
    document.getElementById('count').innerText = count.toString().padStart(2, '0');
}

export { start, stop, reset, runClock };
