//get the current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

//place current year on page based on element class
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

//last modified page recorded on page 
const lastModified = new Date(document.lastModified);
document.querySelector('#lastModified').textContent = today;

//make an element have a class based on what day it is, 0 is monday 6 is sunday
function bannerMaker() {
  var date = new Date(); 
  var element = document.getElementById("banner");
  element.classList.add("day" + date.getDay());
}
//activate the function

//attach variables to parts of html page ids to see where on page to populate
const currentTemp = document.querySelector('#current-temp');
const forcastTemp = document.querySelector('#forcast');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
//apis for the weather forcast and current weather
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=29.30&lon=-94.80&appid=414566a386a08cff91c0b2692629a943&units=imperial';
const weatherForcast = 'https://api.openweathermap.org/data/2.5/forecast?lat=29.30&lon=94.80&cnt=3&appid=241fe8e53ef22c16a2d5eb0155bed395&units=imperial';
//get data from json
async function apiFetch() {
    try {
      const response = await fetch(weatherUrl);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); used only for troubleshooting
        displayResults(data); 
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  //call for json current weather
  
  //display current weather and icon
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
//weather forcasting
//function for forcast data from json
    async function apiFetch2() {
      try {
        const response = await fetch(weatherForcast);
        if (response.ok) {
          const list = await response.json();
          //console.log(data);
          displayForcast(list); 
        } else {
          throw Error(await response.text());
        }
      } catch (error) {
        console.log(error);
      }
    }
    //Weather forcasting!!!
    //calling the forcasted information
    
    
//display forcasted weather
    function displayForcast(list) {
      forcastTemp.innerHTML = `${list.main.temp.toFixed(0)}&deg;F`;
    }
    apiFetch(weatherUrl);
    bannerMaker();
    apiFetch2(weatherForcast);