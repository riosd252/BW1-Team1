let totalSeconds = 60;

function updateTimer() {
  if (totalSeconds <= 0) {
    clearInterval(timerId);
    document.getElementById("time").textContent = "00";
    return;
  }

  const seconds = String(totalSeconds).padStart(2, "0");
  document.getElementById("time").textContent = seconds;

  totalSeconds--;
}

const timerId = setInterval(updateTimer, 1000);
updateTimer(60);
