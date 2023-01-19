


let formValue = "New York"
const practiceUrl = "https://api.openweathermap.org/data/2.5/weather?lat=50.5&lon=-0.127&APPID=cb0a780723ffc0649a66d5bbfcdbeebb&units=imperial"

const keyAPI = "cb0a780723ffc0649a66d5bbfcdbeebb"
const openWeatherLimit = 5
let cityName = "Paris"
let londonCity = "London"
let firstCityResponse;
let lat = 50.5;
let lon = -0.127;
let units = "imperial"
let coords={lat:50.5, lon:-0.127}
const submitBtn = document.getElementById("submitBtn")
const cityInput = document.getElementById("cityInput")
cityInput.value = "Tokyo"


async function onSubmit(){
  const weatherData = await getWeatherData()
  if (weatherData){
    console.log(weatherData)
    updateWeather(weatherData)
  }
}
onSubmit()

submitBtn.addEventListener("click", () => onSubmit());
  
  // !why does enter on the form refresh the page?! (FIX - Need to get the onsubmit thing...)

// button press -> take input data -> clean it/validate it? In what ways? -> make a url 
//   fetch url.->pull the coordinates -> create URl with Coordinates -> fetch the weather info
// -> pull weather info -> attach weather data to the DOM. -> redraw Dom.

// Errors to fix : when no city is returned...  form validation.




async function getWeatherData(){
  const urlCity = urlBuilderCityName(cityInput.value)
  const cityLocation = await getCoordinates(urlCity)
  const urlCoordinates = urlBuilderCoords(cityLocation, units)
  const weatherData = await grabWeather(urlCoordinates);
  let fullWeatherData = {
    ...cityLocation,
    ...weatherData
  }
  console.log(fullWeatherData)
  return fullWeatherData
}

function urlBuilderCityName (cityName){
  return `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${keyAPI}`;
}

function urlBuilderCoords (coords, units){
  if(coords){
  return `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&APPID=${keyAPI}&units=${units}`;
  }
}














// limit=${openWeatherLimit}
function coordinatesUrl (cityName){
  return `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${keyAPI}`;
}

function weatherUrl (coords, units){
  return `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&APPID=${keyAPI}&units=${units}`;
}

const city = getCoordinates(coordinatesUrl(formValue))

const weather = getWeather(weatherUrl(coords, units));

const grabtWeather = grabWeather(weatherUrl(coords, units));


const weatherPromise = new Promise(function(resolve, reject){

  if (fetch(practiceUrl)){
    resolve("success")
  }
  else {
    reject("Failure!")
  }
})
weatherPromise.then(function(result){
  console.log(result)
}
  
)

// get coordinates returns the coordings.   how do I pass them---make a new url for the weather?  


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

async function getWeather(url){
  fetch(url)
  .then((response)=>{
    console.log(response.status)
    return response.json()
  })
  .then((response)=>{
    return response
  })}

async function grabWeather(url){
  const response = await fetch(url);
  const forecast = await response.json();
  return forecast;
}

function capitalize(string){
  let newString = "";
  const array = string.split(" ");
  array.forEach((word)=>{
    let upperWord = word.at(0).toUpperCase()+word.slice(1);
    newString = newString + upperWord + " "})

  return newString.trim()
}




function updateGrid1 (data){
  console.log("data", data.main.temp)
  const currentDate = document.getElementById("currentDate")
  const date = new Date(data.dt*1000)
  currentDate.textContent = date.toDateString()

  const currentTemp = document.getElementById("currentTemp")
  const hiLo = document.getElementById("hiLo")
  hiLo.textContent = `${Math.round(data.main.temp_max)}F / ${Math.round(data.main.temp_min)}F`

  currentTemp.textContent = `${Math.round(data.main.temp)}F`;
}

function updateGrid2 (data){
  const grid2 = document.getElementById("grid2");
  
  const city = document.getElementById("city");
  const locations = cityNameInformation(data)
  city.textContent = locations;

  const weatherIcon = document.getElementById("weatherIcon");
  console.log(data)
  weatherIcon.src = getWeatherIcon(data);

  const weatherDescription = document.getElementById("weatherDescription");
  let description = data.weather[0].description
  weatherDescription.textContent = capitalize(description)
  
}


function updateGrid3 (data){
}



function updateWeather(data){
  updateGrid1(data)
  updateGrid2(data)
  updateGrid3(data)
}

function getWeatherIcon(data) {
  if (data.wind.speed > 20){
    return "/src/assets/icons/windyDay.png"
  } else if (data.weather[0].main == "Clouds"){
      if (data.weather[0].id == 804){
      return "/src/assets/icons/smiles/cloudy.png"
    } else {
      return "/src/assets/icons/smiles/partlycloudy.png"
    }
  } else if (data.weather[0].main == "Snow"){
    return "/src/assets/icons/smiles/snowman.png"
  } else if (data.weather[0].main == "Rain"){
    return "/src/assets/icons/smiles/umbrellaRain.png"
  } else if (data.weather[0].main == "Drizzle"){
    return "/src/assets/icons/smiles/umbrellaRainClosed.png"
  } else if (data.weather[0].main == "Thunderstorm"){
    return "/src/assets/icons/smiles/stormy.png"
  } else if (data.weather[0].main == "Clear"){
    return "/src/assets/icons/smiles/sunnyDay.png"
  }
}


function cityNameInformation(data){
  let location;
  if (data.stateName){
    location = `${data.cityName}, ${data.stateName},  ${data.sys.country}`
  } else {
    location = `${data.cityName}, ${data.stateName},  ${data.sys.country}`
  }
  return location
}









// function getWeatherIcon(data) {
//   if (data.wind.speed > 20){
//     return "icons/smiles/windyDay.png"
//   } else if (data.weather[0].main == "Clouds"){
//       if (data.weather[0].id == 804){
//       return "icons/cloudyWatercolor.png"
//     } else {
//       return "icons/partlyCloudyWatercolor.png"
//     }
//   } else if (data.weather[0].main == "Snow"){
//     return "icons/snowyDay.png"
//   } else if (data.weather[0].main == "Rain"){
//     return "icons/rainyDay.png"
//   } else if (data.weather[0].main == "Drizzle"){
//     return "icons/rainyWatercolor.png"
//   } else if (data.weather[0].main == "Thunderstorm"){
//     return "icons/stormyDay.png"
//   } else if (data.weather[0].main == "Clear"){
//     return "icons/sunnyDay.png"
//   }
// }

