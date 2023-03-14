import '/src/styles/style.css'
import getWeatherData from "./apiScripts"
import updateWeather from "./domScripts"

// the flow chart : 
// button press -> take input data -> clean it/validate it? In what ways? -> make a url 
//   fetch url.->pull the coordinates -> create URl with Coordinates -> fetch the weather info
// -> pull weather info -> attach weather data to the DOM. -> redraw Dom.


const submitBtn = document.getElementById("submitBtn")
const cityInput = document.getElementById("cityInput")
const unitBtn = document.getElementById("settingsUnitBtn")
const cityBtn = document.getElementById("settingsCityBtn")
const windowBtn = document.getElementById("settingsWindowBtn")

cityInput.value = randoCity()


cityBtn.addEventListener("click", () => cityBtnPress());


function cityBtnPress(){
  const windowForm = document.getElementById("windowForm")
  windowForm.classList.toggle("hidden")
}

function closeCitySearch(){
  const windowForm = document.getElementById("windowForm")
  windowForm.classList.add("hidden")
}



windowBtn.addEventListener("click", () => search());


submitBtn.addEventListener("click", () => search());
  
unitBtn.addEventListener("click", () => {
  unitsToggle();})






async function search(){
  closeCitySearch()
  
  const weatherData = await getWeatherData(unitBtn.value)
  if (weatherData){
    console.log(weatherData)
    updateWeather(weatherData, unitBtn.value)
  }
}



function unitsToggle(){
  const unitBtn = document.getElementById("settingsUnitBtn")
  if (unitBtn.value == "Imperial"){
    unitBtn.value = "Metric";
  } else {
    unitBtn.value = "Imperial";
  }
  search()
}


const randomCity = document.getElementById("randomButton")
randomCity.addEventListener("click", () => {randoCity(); search()} )
function randoCity(){
  const cities = [
    "London",
    "New York",
    "Tokyo",
    "Beijing",
    "Kinshasa",
    "Mexico City",
    "Denver",
    "Cairo",
    "Delhi",
    "Shanghai",
    "Sao Paulo",
    "Mumbai",
    "Dhaka",
    "Karachi",
    "Chongqing",
    "Istanbul",
    "Manila",
    "Lagos",
    "Rio de Janeiro",
    "Los Angeles",
    "Moscow",
    "Lima",
    "Bangkok",
    "Ho Chi Minh City",
    "Santiago", 
    "Toronto",
    "Sydney"
  ]
  
  const index = Math.round((cities.length-1)*Math.random())
  console.log(cities[index])
  cityInput.value = cities[index]
    return cities[index]
  }



  // The Entry POINT
search()
