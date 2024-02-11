var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

const lastModified = new Date(document.lastModified);
document.querySelector('#lastModified').textContent = today;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=29.30&lon=-94.80&appid=414566a386a08cff91c0b2692629a943&units=imperial';
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        displayResults(data); 
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  apiFetch(url);
  
  function displayResults(data) {
      currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    
      const weatherEvents = data.weather.map(event => {
        const iconsrc = `https://openweathermap.org/img/w/${event.icon}.png`;
        const desc = event.description.replace(/\b\w/g, l => l.toUpperCase());
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
    
        return `<p>${desc}</p>`;
      });
    
      captionDesc.innerHTML = weatherEvents.join('');
    }