document.addEventListener("DOMContentLoaded", function() {
    var countdownElement = document.getElementById("countdown");
  
    function updateCountdown() {
      var targetDate = new Date("June 02, 2025 00:00:00").getTime();
      var now = new Date().getTime();
      var remainingTime = targetDate - now;
  
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
  
      if (remainingTime <= 0) {
        clearInterval(interval);
        countdownElement.innerText = "Countdown expired";
      }
    }
  
    // Initial call to update the countdown
    updateCountdown();
  
    // Update the countdown every second
    var interval = setInterval(updateCountdown, 1000);
  });  
