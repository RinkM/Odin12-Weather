import '/src/style.css'
import getWeatherData from "./apiScripts"
import updateWeather from "./domScripts"

// the flow chart : 
// button press -> take input data -> clean it/validate it? In what ways? -> make a url 
//   fetch url.->pull the coordinates -> create URl with Coordinates -> fetch the weather info
// -> pull weather info -> attach weather data to the DOM. -> redraw Dom.


const submitBtn = document.getElementById("submitBtn")
const cityInput = document.getElementById("cityInput")

cityInput.value = "Tokyo"

search()

async function search(){
  const weatherData = await getWeatherData(unitBtn.value)
  if (weatherData){
    console.log(weatherData)
    updateWeather(weatherData, unitBtn.value)
  }
}


submitBtn.addEventListener("click", () => search());
  
unitBtn.addEventListener("click", () => {
  unitsToggle();})

function unitsToggle(){
  const unitBtn = document.getElementById("unitBtn")
  if (unitBtn.value == "Imperial"){
    unitBtn.textContent = "Metric";
    unitBtn.value = "Metric";
  } else {
    unitBtn.textContent = "Imperial";
    unitBtn.value = "Imperial";
  }
}

