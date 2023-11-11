const apiKey = "164e55133784eda8dd008adca3141746";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Arequipa&units=metric";
const weatherStatus = document.querySelector(".weather-status");

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".degree").innerHTML = Math.round(data.main.temp) + " °C";

  if (data.weather[0].main == "Clouds") {
    weatherStatus.innerHTML = "Cloudy";
  } else if (data.weather[0].main == "Clear") {
    weatherStatus.innerHTML = "Clear";
  } else if (data.weather[0].main == "Rain") {
    weatherStatus.innerHTML = "Rainy";
  } else if (data.weather[0].main == "Drizzle") {
    weatherStatus.innerHTML = "Drizzly";
  } else if (data.weather[0].main == "Mist") {
    weatherStatus.innerHTML = "Misty";
  }
}

checkWeather();
