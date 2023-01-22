
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
    weatherType:"Mist",
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
    source:"/src/assets/Photos/lighteningField.jpg",
    weatherType:"Thunderstorm",
  },
  {
    source:"/src/assets/Photos/OvercastMtns.jpg",
    weatherType:"",
  },
  {
    source:"/src/assets/Photos/overcastMtns2Small.png",
    weatherType:"",
  },
  {
    source:"/src/assets/Photos/partlyCloudySmall.png",
    weatherType:"Clouds",
  },
  {
    source:"/src/assets/Photos/sandstorm.jpg",
    weatherType:"Sand",
  },
  {
    source:"/src/assets/Photos/snowLandscape.jpg",
    weatherType:"Snow",
  },
  {
    source:"/src/assets/Photos/windyTree.jpg",
    weatherType:"Wind",
  },
  {
    source:"/src/assets/Photos/cityRain.jpg",
    weatherType:"Rain",
  },
  {
    source:"/src/assets/Photos/smokeyCity.jpg",
    weatherType:"Smoke",
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
  



  const weatherIcon = document.getElementById("weatherIcon");
  weatherIcon.src = getWeatherIcon(data);

  const weatherDescription = document.getElementById("weatherDescription");
  let description = data.weather[0].description
  weatherDescription.textContent = capitalize(description)
  
}


function updateWindow (data){
  const outsideWindow = document.getElementById("outsideWindow");
  outsideWindow.src = getWindowPictureUrl(data);
  movePhoto()
}


function updateWeather(data, units){
  updateGrid1(data, units)
  updateGrid2(data, units)
  updateWindow(data)
  windowBlurRemove()
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
  }else if (data.weather[0].main == "Mist"){
    return "/src/assets/icons/smiles/umbrellaRain.png"
  } else if (data.weather[0].main == "Fog" || 
  data.weather[0].main == "Smoke" ){
    return "/src/assets/icons/smiles/cloudy.png"
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
  const grid = document.getElementById("grid1")
  const image = document.getElementById("outsideWindow")
  image.classList.remove("blur")
  grid.classList.remove("blur")
  

}

function movePhoto (){
  const outsideWindow = document.getElementById("outsideWindow");
  if (outsideWindow.naturalHeight > 490){
    outsideWindow.style.left = "120px";
    outsideWindow.style.top = "200px";
  } else {
    outsideWindow.style.removeProperty("left");
    outsideWindow.style.removeProperty("top");
}
}

function windowResize(){
  const windowFrame = document.getElementById("windowFrameImg")
  windowFrame.height
  windowFrame.width

}






export default updateWeather

