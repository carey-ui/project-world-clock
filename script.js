function updateTime() {
  let losAngelesElement = document.querySelector("#city-one");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTimeZone = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTimeZone.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesTimeZone.format("h:mm:ss [<small>]A[</small>]")}`;
  }
  let sydneyElement = document.querySelector("#city-two");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTimeZone = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTimeZone.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = `${sydneyTimeZone.format("h:mm:ss [<small>]A[</small>]")}`;
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city" id="city-one">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}<small>${cityTime.format("A")}</small></div>
        </div> <a href="/">All Cities</a>`;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
