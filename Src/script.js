let localTime = document.querySelector(".localTime");
let form = document.querySelector("form");
let cityInput = document.querySelector("select");
let cityName = document.querySelector(".cityName");
let day = document.querySelector(".day");
let time = document.querySelector(".time");
setInterval(function () {
  localTime.innerHTML = `${moment().format("hh:mm:ss A")}`;
  day.innerHTML = `${moment().format("ddd, D MMMM YYYY")}`;
}, 1000);

setInterval(function getTime() {
  let cityTime = moment().tz(`${cityInput.value}`).format(`hh:mm:ss A`);
  time.innerHTML = cityTime;
  cityName.innerHTML = cityInput.options[cityInput.selectedIndex].text; // Display the city name instead of the timezone
  let date = moment().tz(`${cityInput.value}`).format("ddd, D MMMM YYYY");
  day.innerHTML = date;
}, 1000);

function getCity(event) {
  event.preventDefault();
  getTime();
}

form.addEventListener("change", getCity);
