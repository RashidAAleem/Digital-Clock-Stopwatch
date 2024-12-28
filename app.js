const updateDateAndTime = () => {
  const now = new Date();
  const dateOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const time = now.toLocaleTimeString();
  // const date = now.toLocaleDateString(); // mm/dd/yyyy
  const date = now.toLocaleDateString(undefined, dateOptions);

  document.getElementById("dateDay").innerHTML = date;
  document.getElementById("content").innerHTML = time;
};
setInterval(updateDateAndTime, 1000);

const stpWtchTime = document.getElementById("display");
const displayStopValue = document.querySelector(".displayTime");
const strtBtn = document.querySelector(".strtBtn");
let intervalId;

let hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0;

const setTime = (hours, minutes, seconds, milliseconds) => {
  const set = (num) => (num < 10 ? `0${num}` : num);
  return `${set(hours)}:${set(minutes)}:${set(seconds)}:${set(milliseconds)}`;
};
let stpWatch = false;
const strtTimer = () => {
  if (!stpWatch) {
    stpWatch = true;
    intervalId = setInterval(() => {
      milliseconds++;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
      }
      // seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      stpWtchTime.innerText = setTime(hours, minutes, seconds, milliseconds);
    }, 10);
  }

  // strtBtn.innerText = "Pause"
  //    console.log(strtTime);
};

strtBtn.addEventListener("click", strtTimer);

const stpTime = () => {
  clearInterval(intervalId);
  stpWatch = false;
};
document.querySelector(".stpBtn").addEventListener("click", stpTime);

const rstTime = () => {
  clearInterval(intervalId);
  stpWatch = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  stpWtchTime.innerText = setTime(hours, minutes, seconds, milliseconds);
};

document.querySelector(".rstBtn").addEventListener("click", rstTime);

const displayTime = () => {
  const displayTime = document.createElement("p");
  displayTime.classList.contains("displayPara");
  displayTime.innerText = `The time is ${setTime(
    hours,
    minutes,
    seconds,
    milliseconds
  )}`;
  displayStopValue.append(displayTime);
};
document.querySelector(".shwBtn").addEventListener("click", displayTime);
const clrDisplayTime = () => {
  displayStopValue.innerHTML = "";
};
document.querySelector(".clrBtn").addEventListener("click", clrDisplayTime);
