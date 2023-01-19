
// runs on successful button press. Runs 4 functions with 2 API calls.  then slightly cleans / adds to the weather data and returns the object. 
async function getWeatherData(){
  const urlCity = urlBuilderCityName(cityInput.value)
  const cityLocation = await getCoordinates(urlCity)
  const urlCoordinates = urlBuilderCoords(cityLocation, "imperial")
  const weatherData = await grabWeather(urlCoordinates);
  let fullWeatherData = {
    ...cityLocation,
    ...weatherData
  }
  console.log(fullWeatherData)
  return fullWeatherData
}

function urlBuilderCityName (cityName){
  const keyAPI = "cb0a780723ffc0649a66d5bbfcdbeebb"
  const openWeatherLimit = 5
  return `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${keyAPI}`;
}
function urlBuilderCoords (coords, units){
  if(coords){
    const keyAPI = "cb0a780723ffc0649a66d5bbfcdbeebb"
    const openWeatherLimit = 5
  return `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&APPID=${keyAPI}&units=${units}`;
  }
}

// ?limit=${openWeatherLimit} 
// add the above snippet to return multiple cities.  Allow you to search for them.  Can I do it on button press? as you type...? 

// API call to URL.  returns the coordinates.   
async function getCoordinates (url){
  const errorMsg = document.getElementById("formErrorMsg")
  const response = await fetch(url)
  const cityInfo = await response.json()

  if (cityInfo[0]){
    errorMsg.textContent = ""
    let coords = {
      lat:cityInfo[0].lat,
      lon:cityInfo[0].lon,
      cityName:cityInfo[0].name,
      stateName:cityInfo[0].state,
      country:cityInfo[0].country,
    }
    return coords
  } else {
    errorMsg.textContent = "Not a city. Try again."
  }
}

async function grabWeather(url){
  const response = await fetch(url);
  const forecast = await response.json();
  return forecast;
}

export default getWeatherData