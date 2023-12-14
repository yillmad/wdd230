const weather = document.querySelector('#weather');
const apiKey = '164e55133784eda8dd008adca3141746'; 
const latitude = '-16.4089091607169';
const longitude = '-71.53849665694538';
const units = 'metric';
const url = 'https://api.openweathermap.org/data/2.5/';
const windChill = document.querySelector(".wind-chill");


const weather_url = `${url}weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
const forecast_url = `${url}forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

async function apiFetch() {
    try {
        const response = await fetch(weather_url);
        const forecast_response = await fetch(forecast_url);
        if (response.ok && forecast_response.ok) {
            const data = await response.json();
            const forecast = await forecast_response.json();

            // console.log('Weather Data:', data);
            // console.log('Forecast Data:', forecast);

            displayResults(data,forecast);
            calculateWindChill(data);
            displayMaxTemperature(data)
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data,forecast) {
    //Create Table with current weather
    let tableCurr = document.createElement('table');
    let tableHeadCurr = document.createElement('thead');
    let tableBodyCurr = document.createElement('tbody');
    let tableRowCurr = document.createElement('tr');
    let tableHeadDataCurr = document.createElement('th');
    tableHeadDataCurr.textContent = 'Current Weather';
    tableHeadDataCurr.setAttribute('colspan', '3');
    tableHeadCurr.appendChild(tableHeadDataCurr);
    tableCurr.appendChild(tableHeadCurr);

    //Create 3 columns for current weather
    var tableDataCurr = document.createElement('td');
    var icon = document.createElement('img');
    var iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    var desc = data.weather[0].description;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);
    tableDataCurr.appendChild(icon);
    tableRowCurr.appendChild(tableDataCurr);

    tableDataCurr = document.createElement('td');
    tableDataCurr.innerHTML = `${data.main.temp}&deg;C`;
    tableRowCurr.appendChild(tableDataCurr);

    tableDataCurr = document.createElement('td');
    tableDataCurr.innerHTML = `${data.weather[0].description}`;
    tableRowCurr.appendChild(tableDataCurr);

    
    tableBodyCurr.appendChild(tableRowCurr);
    tableCurr.appendChild(tableBodyCurr);



    //Create Table with 3 day forecast
    let table = document.createElement('table');
    let tableHead = document.createElement('thead');
    let tableBody = document.createElement('tbody');
    let tableRow = document.createElement('tr');
    let tableHeadData = document.createElement('th');
    tableHeadData.textContent = '3 Day Forecast';
    tableHeadData.setAttribute('colspan', '3');
    tableHead.appendChild(tableHeadData);
    table.appendChild(tableHead);

    for (let i = 0; i < 3; i++) {
        let tableData = document.createElement('td');
        let icon = document.createElement('img');
        let iconsrc = `https://openweathermap.org/img/w/${forecast.list[i].weather[0].icon}.png`;
        let desc = forecast.list[i].weather[0].description;
        icon.setAttribute('src', iconsrc);
        icon.setAttribute('alt', desc);
        tableData.appendChild(icon);
        tableData.innerHTML += `<br>${forecast.list[i].main.temp}&deg;C`;
        tableRow.appendChild(tableData);
    }
    tableBody.appendChild(tableRow);
    table.appendChild(tableBody);
    table.setAttribute('id', 'forecast');
    tableCurr.setAttribute('id', 'current-weather');
    tableDataCurr.setAttribute('class','weather-description');

    weather.appendChild(tableCurr);
    weather.appendChild(table);

}

function calculateWindChill(data) {
    if (data.main.temp <= 50 && data.wind.speed >= 3) {
      const windChillCalculation = 35.74 + 0.6215 * data.main.temp - 35.75 * Math.pow(data.wind.speed, 0.16) + 0.4275 * data.main.temp * Math.pow(data.wind.speed, 0.16);
      windChill.innerHTML = Math.round(windChillCalculation) + "°C";
    } else {
      windChill.innerHTML = "N/A";
    }
  }


// Max temperature code 

function displayMaxTemperature(data) {
    const maxTemp = Math.round(data.main.temp_max);
    const temperatureMessage = document.getElementById('temp-max');
    temperatureMessage.textContent = `Today's highest temperature is: ${maxTemp}°C`;

    const closeButton = document.getElementById('close-btn');
    closeButton.addEventListener('click', () => {
        const temperatureMessageDiv = document.getElementById('temperature-message');
        temperatureMessageDiv.style.display = 'none';
    });
}

