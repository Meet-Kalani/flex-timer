const countHour = document.querySelector('.count-hour');
const countMinute = document.querySelector('.count-minute');
const countSecond = document.querySelector('.count-second');
const startStopBtn = document.querySelector('.start-stop-btn');
const resetBtn = document.querySelector('.reset-btn');
let second = 0;
let minute = 0;
let hour = 0;
let resetTime;
minute = prependZero(minute);
hour = prependZero(hour);

startStopBtn.addEventListener('click', toggleTimer);
resetBtn.addEventListener('click', resetTimer);

function toggleTimer() {
    if (startStopBtn.textContent === "Start") {
        startStopBtn.textContent = "Stop";
        resetTime = setInterval(changeTime, 1);
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
    countSecond.textContent = countMinute.textContent = countHour.textContent = "00";
    minute = prependZero(minute);
    hour = prependZero(hour);
    startStopBtn.textContent = "Start";
}

function changeTime() {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
        if (minute < 10) {
            minute = prependZero(minute);
        }
    }

    if (minute == 60) {
        second = 0;
        minute = 0;
        hour++;
        minute = prependZero(minute);
        hour = prependZero(hour);
    }

    if (second < 10) {
        second = prependZero(second);
    }
    countSecond.textContent = second;
    countMinute.textContent = minute;
    countHour.textContent = hour;

    if(hour == 24){
        resetTimer();
    }
}

// for prepending 0 when there is only one digit in count i.e. 1, 2, .... => 01, 02, .....
function prependZero(n) {
    return "0" + n;
}