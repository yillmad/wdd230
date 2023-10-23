const apiKey = "164e55133784eda8dd008adca3141746";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Arequipa&units=metric";
const weatherIcon = document.querySelector(".weather-icon");
const weatherStatus = document.querySelector(".weather-status");
const windChill = document.querySelector(".wind-chill");

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".degree").innerHTML = Math.round(data.main.temp) + " °C";
  document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/weather-icon-clouds.png";
    weatherStatus.innerHTML = "It's cloudy";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/weather-icon-clear.png";
    weatherStatus.innerHTML = "It's clear";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/weather-icon-rain.png";
    weatherStatus.innerHTML = "It's rainy";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/weather-icon-drizzle.png";
    weatherStatus.innerHTML = "It's drizzly";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/weather-icon-mist.png";
    weatherStatus.innerHTML = "It's misty";
  }

  calculateWindChill(data);
}

function calculateWindChill(data) {
  if (data.main.temp <= 50 && data.wind.speed >= 3) {
    const windChillCalculation = 35.74 + 0.6215 * data.main.temp - 35.75 * Math.pow(data.wind.speed, 0.16) + 0.4275 * data.main.temp * Math.pow(data.wind.speed, 0.16);
    windChill.innerHTML = Math.round(windChillCalculation) + "°C";
  } else {
    windChill.innerHTML = "N/A";
  }
}

checkWeather();
