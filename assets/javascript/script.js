const countHour = document.querySelector('.count-hour');
const countMinute = document.querySelector('.count-minute');
const countSecond = document.querySelector('.count-second');
const startStopBtn = document.querySelector('.start-stop-btn');
const resetBtn = document.querySelector('.reset-btn');
let second = 0;
let minute = 0;
let hour = 0;
let resetTime;

startStopBtn.addEventListener('click', toggleTimer);
resetBtn.addEventListener('click', resetTimer);

function toggleTimer() {
    if (startStopBtn.textContent === "Start") {
        startStopBtn.textContent = "Stop";
        resetTime = setInterval(changeTime, 1000);
    } else {
        startStopBtn.textContent = "Start";
        clearInterval(resetTime);
    }
}

function resetTimer() {
    clearInterval(resetTime);
    second = 0;
    minute = 0;
    hour = 0;
    countSecond.textContent = "00";
    countMinute.textContent = "00";
    countHour.textContent = "00";
    startStopBtn.textContent = "Start";
}

function changeTime() {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
    }

    if (minute == 60) {
        minute = 0;
        hour++;
    }

    countSecond.textContent = second.toLocaleString('en-US', {minimumIntegerDigits: 2});
    countMinute.textContent = minute.toLocaleString('en-US', {minimumIntegerDigits: 2});
    countHour.textContent = hour.toLocaleString('en-US', {minimumIntegerDigits: 2});

    if (hour == 24) {
        resetTimer();
    }
}
