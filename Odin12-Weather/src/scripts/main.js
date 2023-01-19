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


async function search(){
  const weatherData = await getWeatherData()
  if (weatherData){
    console.log(weatherData)
    updateWeather(weatherData)
  }
}
search()

submitBtn.addEventListener("click", () => search());
  
