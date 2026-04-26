document.addEventListener("DOMContentLoaded", function () {
  var countdownElement = document.getElementById("countdown");
  var interval;

  function updateCountdown() {
    var targetDate = new Date("2026-08-21T00:00:00").getTime();
    var now = new Date().getTime();
    var remainingTime = targetDate - now;

    if (remainingTime <= 0) {
      clearInterval(interval);
      countdownElement.innerText = "Countdown expired";
      return;
    }

    var months = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor((remainingTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }

  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});
