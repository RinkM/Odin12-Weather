


const container = document.getElementById("weatherContainer")
const grid1 = document.getElementById("grid1")
const currentDate = document.getElementById("currentDate")
const currentTemp = document.getElementById("currentTemp")
const hiLo = document.getElementById("hiLo")
const grid2 = document.getElementById("grid2")
const city = document.getElementById("city")
const weatherIcon = document.getElementById("weatherIcon")
const weatherDescription = document.getElementById("weatherDescription")
const grid4 = document.getElementById("grid4")
const grid5 = document.getElementById("grid5")
const hourlyExpand = document.getElementById("hourlyExpand")
const dayExpand = document.getElementById("dayExpand")

hourlyExpand.addEventListener("click", function expandHourlyForcast(){

})
dayExpand.addEventListener("click", function expandDailyForcast(){
  
})

let londonAPI = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cb0a780723ffc0649a66d5bbfcdbeebb&units=imperial"

let denverAPI = "https://api.openweathermap.org/data/2.5/weather?q=Denver&APPID=cb0a780723ffc0649a66d5bbfcdbeebb&units=imperial"

let searchTerm = "dog"

let giphyAPI = `https://api.giphy.com/v1/gifs/translate?api_key=PKBlpNSDvOf0DDCyTKmkkVjXhnzlDoHy&s=${searchTerm}`

const img = document.querySelector("img")
let giphy;

function imageRefresh(){
fetch(giphyAPI, {mode: "cors"})
  .then(function(response){
    console.log("first", response)
    return response.json()
  })
  .then(function(response){
    console.log(response);
    img.src = response.data.images.original.url
  })}

imageRefresh()
  const button = document.getElementById('refreshButton')
  button.addEventListener("click", imageRefresh)

// const london = await fetch(londonAPI)
// const data = await london.json()




fetch(denverAPI, {
  mode: "cors"
  }
  )
  .then((theWeather)=>{
  console.log("Weather", theWeather),
  theWeather.json()
})
  .then((theWeather)=> console.log("theweathertheWeather", theWeather))







