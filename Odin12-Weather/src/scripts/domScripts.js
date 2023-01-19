


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

export default updateWeather

