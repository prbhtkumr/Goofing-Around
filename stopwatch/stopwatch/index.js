const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let milisecs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 108);
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;

    hrs = 0;
    mins = 0;
    secs = 0;
    milisecs = 0;

    timeDisplay.textContent = "00:00:00"
});

const updateTime = () => {
    elapsedTime = Date.now() - startTime;

    milisecs = Math.floor((elapsedTime % 1000));
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000*60)) % 60);
    hrs = Math.floor((elapsedTime / (1000*3600)) % 24);    
   
    milisecs = pad(milisecs)
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    
    timeDisplay.textContent = `${mins}:${secs}:${milisecs}`;
    
    if (hrs > 0) {
        timeDisplay.textContent = `${hrs}:${timeDisplay.textContent}`;
    }
    
    function pad(unit){
        return(("0") + unit).slice(-2);
    } 
}