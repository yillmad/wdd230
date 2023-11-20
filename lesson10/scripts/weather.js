const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather';

async function apiFetch() {
    const apiKey = '164e55133784eda8dd008adca3141746'; 
    const latitude = '49.7597';
    const longitude = '6.6476';
    const units = 'imperial';
  
    const apiUrl = `${url}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  apiFetch();
  
  function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconCode = data.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    const desc = data.weather[0].description;
  
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }


function displayResults(data) {
    const temperature = Math.round(data.main.temp);
  
    // Capitalize each word of the weather description
    const capitalizeWords = (str) => {
      return str.replace(/\b\w/g, (char) => char.toUpperCase());
    };
  
    const weatherEvents = data.weather;
    let weatherOutput = '';
  
    weatherEvents.forEach((event) => {
      const iconCode = event.icon;
      const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
      const description = capitalizeWords(event.description);
  
      weatherOutput += `
        <div>
          <img src="${iconSrc}" alt="${description}">
          <p>${temperature}&deg;F - ${description}</p>
        </div>
      `;
    });
  
    currentTemp.innerHTML = weatherOutput;
  }
  