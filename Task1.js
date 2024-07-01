// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  // Set current time in UTC
  function updateTime() {
    const currentTimeUTC = new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    document.querySelector('[data-testid="currentTimeUTC"]').textContent =
      currentTimeUTC;
  }

  // Set current day of the week
  function updateDay() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = days[new Date().getUTCDay()];
    document.querySelector('[data-testid="currentDay"]').textContent =
      currentDay;
  }
  updateTime();
  updateDay();
  setInterval(updateTime, 1000); // Update time every second
});
