let formValue = "Denver"

const keyAPI = "cb0a780723ffc0649a66d5bbfcdbeebb"
const openWeatherLimit = 5
let cityName = "kin"
let londonCity = "London"
let firstCityResponse;
let lat = 50.5;
let lon = -0.127;
let units = "imperial"
let coords={lat:50.5, lon:-0.127}

// limit=${openWeatherLimit}
function CoordinatesUrl (cityName){
  return `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${keyAPI}`;
}

function WeatherUrl (coords, units){
  return `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&APPID=${keyAPI}&units=${units}`;
}

const city = getCoordinates(CoordinatesUrl(formValue))

const weather = getWeather(WeatherUrl(coords, units));


async function getCoordinates (url){
  const response = await fetch(url)
  const cityInfo = await response.json()
  const coordinates  = cityInfo;
  // coordinates.name = cityInfo.name;
  // coordinates.country = cityInfo.sys.country;
  return coordinates
}


//   console.log(response.status)
//     return response.json()
//   })
//   .then((response)=>{
//     const weatherData = response
//     console.log(weatherData)
//     return weatherData
//   })

// }



async function getWeather(url){
  fetch(url)
  .then((response)=>{
    console.log(response.status)
    return response.json()
  })
  .then((response)=>{
    console.log(response)
    return response
  })}











  
// let callWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${keyAPI}&units=imperial`;


// let cityURL = `https://api.openweathermap.org/geo/1.0/direct?q=${londonCity}&limit=${openWeatherLimit}&appid=${keyAPI}`;

// let londonAPIGEO = `https://api.openweathermap.org/geo/1.0/direct?q=${londonCity}&limit=${openWeatherLimit}&appid=${keyAPI}`;


// let example = `https://api.openweathermap.org/data/2.5/weather?lat=51&lon=-.1&APPID=${keyAPI}&units=imperial`;


// let denverAPI = `ttps://api.openweathermap.org/data/2.5/weather?q=Denver&APPID=${keyAPI}&units=imperial`;


