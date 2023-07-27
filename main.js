const min = document.querySelector("#minut");
const sec = document.querySelector("#second");

const start = document.querySelector("#start");
const reset = document.querySelector("#reset");

const sign = document.querySelector("#start i");

var timer = 0;
var minut = 0;
var second = 0;

reset.addEventListener("click", () => {
  timer = prompt("Daqidani kiriting");

  if (!isNaN(timer)) {
    min.innerHTML = timer >= 10 ? timer : "0" + timer;
    minut = timer * 1;
    start.removeAttribute("disabled");
  }
});

let currentInterval = null;
let isStarted = false;

start.addEventListener("click", () => {
  if (!isStarted) {
    sign.setAttribute("class", "fa-solid fa-pause");
    start.style.backgroundColor = "rgb(244, 155, 155)";
    start.style.color = "red";
    interval();
  } else {
    start.style.backgroundColor = "#00b84c";
    start.style.color = "#fff";
    sign.setAttribute("class", "fa-solid fa-play");
    clearInterval(currentInterval);
  }
  isStarted = !isStarted;
});

function interval() {
  currentInterval = setInterval(() => {
    if (minut >= 0 && second === 0) {
      minut--;
      second = 59;
    } else if (second > 0) {
      second--;
    }
    if (minut == 0 && second == 0) {
      clearInterval(currentInterval);
      start.style.backgroundColor = "#00b84c";
      start.style.color = "#fff";
      sign.setAttribute("class", "fa-solid fa-play");
      start.setAttribute("disabled", "");
    }
    min.textContent = minut >= 10 ? minut : "0" + minut;
    sec.textContent = second >= 10 ? second : "0" + second;
  }, 1000);
}
