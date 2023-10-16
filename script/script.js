let totalSeconds = 60;

function updateTimer() {
  if (totalSeconds <= 0) {
    clearInterval(timerId);
    document.getElementById("time").textContent = "00";
    return;
  }

  const seconds = String(totalSeconds).padStart(0, "0");
  document.getElementById("time").textContent = seconds;

  const dashOffset = (totalSeconds / 60) * 565.48;

  document.querySelector(".doughnut").style = dashOffset;

  totalSeconds--;
}

const timerId = setInterval(updateTimer, 1000);
updateTimer(60);

// const secs = 10;
// const seconds = secs * 1000;
// const timerSet = seconds;
// const startTime = Date.now();
// const timerToCount = startTime + timerSet;

// const timeLoop = setInterval(countDownDnt);
// function countDownDnt() {
//   const currentTime = Date.now();
//   const remainingTime = timerToCount - currentTime;
//   const dntAngle = (remainingTime / timerSet) * 360;

//   if (dntAngle > 180) {
//     semicircles[2].style.display = "none";
//     semicircles[0].style.transform = "rotate(180deg)";
//     semicircles[1].style.transform = "rotate(${angle}deg";
//   } else {
//     semicircles[2].style.display = "block";
//     semicircles[0].style.transform = `rotate(${angle}deg`;
//     semicircles[1].style.transform = `rotate(${angle}deg`;
//   }

//   if (remainingTime < 0) {
//     clearInterval(timeLoop);
//   }
// }
