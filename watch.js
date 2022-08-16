function printTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let currentHours = document.querySelector(".hours");
  let currentMin = document.querySelector(".min");
  let currentSec = document.querySelector(".sec");

  currentHours.innerHTML = hours < 10 ? `0${hours}` : hours;
  currentMin.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  currentSec.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let day = today.getDay(); // 요일

  let currentYear = document.querySelector(".year");
  let currentMonth = document.querySelector(".month");
  let currentDate = document.querySelector(".date");
  let currentDay = document.querySelector(".day");

  switch (day) {
    case 0:
      day = "일";
      break;
    case 1:
      day = "월";
      break;
    case 2:
      day = "화";
      break;
    case 3:
      day = "수";
      break;
    case 4:
      day = "목";
      break;
    case 5:
      day = "금";
      break;
    case 6:
      day = "토";
      break;
  }

  currentYear.innerHTML = year;
  currentMonth.innerHTML = month;
  currentDate.innerHTML = date;
  currentDay.innerHTML = day;
}
printTime();
setInterval(() => printTime(), 1000);
