
const weatherImages = [
  {
    source:"/src/assets/Photos/clearSky.jpg",
    weatherType:"Clear",
  },
  {
    source:"/src/assets/Photos/Fog Monster.jpg",
    weatherType:"Fog",
  },
  {
    source:"/src/assets/Photos/Foggy Lake.jpg",
    weatherType:"",
  },
  {
    source:"/src/assets/Photos/foggyForestpath.jpg",
    weatherType:"Drizzle",
  },
  {
    source:"/src/assets/Photos/hazeyFog.jpg",
    weatherType:"",
  },
  {
    source:"/src/assets/Photos/kiteFly.jpg",
    weatherType:"",
  },
  {
    source:"/src/assets/Photos/lighteningStorm.jpg",
    weatherType:"Thunderstorm",
  },
  {
    source:"/src/assets/Photos/OvercastMtns.jpg",
    weatherType:"",
  },
  {
    source:"/src/assets/Photos/overcastMtns2.jpg",
    weatherType:"",
  },
  {
    source:"/src/assets/Photos/partlyCloudy.jpg",
    weatherType:"Clouds",
  },
  {
    source:"/src/assets/Photos/sandstorm.jpg",
    weatherType:"Sand",
  },
  {
    source:"/src/assets/Photos/smokeFireman.jpg",
    weatherType:"Smoke",
  },
  {
    source:"/src/assets/Photos/SnowyCabin.jpg",
    weatherType:"Snow",
  },
  {
    source:"/src/assets/Photos/windyTree.jpg",
    weatherType:"Wind",
  },
  {
    source:"/src/assets/Photos/rainyCity.jpg",
    weatherType:"Rain",
  },
]








function unitLetter(units){
  if (units =="Metric"){
    return "C"
  } else 
  return "F"
}

function updateGrid1 (data, units){
  const currentDate = document.getElementById("currentDate")
  const date = new Date(data.dt*1000)
  currentDate.textContent = date.toDateString()

  const currentTemp = document.getElementById("currentTemp")
  const hiLo = document.getElementById("hiLo")
  hiLo.textContent = `${Math.round(data.main.temp_max)+ unitLetter(units)} / ${Math.round(data.main.temp_min)+ unitLetter(units)}`

  currentTemp.textContent = `${Math.round(data.main.temp)+ unitLetter(units)}`;
}

function updateGrid2 (data){
  const grid2 = document.getElementById("grid2");
  
  const city = document.getElementById("city");
  const locations = cityNameInformation(data)
  city.textContent = locations;
  
  const outsideWindow = document.getElementById("outsideWindow");
  outsideWindow.src = getWindowPictureUrl(data);
  getWindowPictureUrl(data)


  const weatherIcon = document.getElementById("weatherIcon");
  weatherIcon.src = getWeatherIcon(data);

  const weatherDescription = document.getElementById("weatherDescription");
  let description = data.weather[0].description
  weatherDescription.textContent = capitalize(description)
  
}


function updateGrid3 (data){
}


function updateWeather(data, units){
  updateGrid1(data, units)
  updateGrid2(data, units)
  windowBlurRemove()
  updateGrid3(data)
}


function getWindowPictureUrl(data){
  const weatherPic = weatherImages.find(element => element.weatherType == data.weather[0].main)
  console.log("weatherPicture ", weatherPic)
  console.log("weatherPicture ", data.weather[0].main)
  return weatherPic.source
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



function capitalize(string){
  let newString = "";
  const array = string.split(" ");
  array.forEach((word)=>{
    let upperWord = word.at(0).toUpperCase()+word.slice(1);
    newString = newString + upperWord + " "})

  return newString.trim()
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





function windowBlurRemove (){
  const image = document.getElementById("outsideWindow")
  image.classList.remove("blur")
}








export default updateWeather

