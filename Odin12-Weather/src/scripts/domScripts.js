

// All weather Types
// Thunderstorm
// Rain
// Drizzle
// Snow
// Mist
// Smoke
// Haze
// Fog
// Sand
// Dust
// Ash
// Squall
// Tornado
// Clear 1234
// Clouds

const weatherImages = [
  {
    source:"/images/WeatherPhotos/clearSky.jpg",
    weatherType:"Clear",
  },
  {
    source:"/images/WeatherPhotos/FogMonster.jpg",
    weatherType:"Fog",
  },
  {
    source:"/images/WeatherPhotos/FogMonster.jpg",
    weatherType:"Mist",
  },
  {
    source:"/images/WeatherPhotos/drizzle.jpg",
    weatherType:"Drizzle",
  },
  {
    source:"/images/WeatherPhotos/foggyLake.jpg",
    weatherType:"Haze",
  },  
  {
    source:"/images/WeatherPhotos/smokeyCity2.jpg",
    weatherType:"Dust",
  },
  {
    source:"/images/WeatherPhotos/tornado.jpg",
    weatherType:"Tornado",
  },
  {
    source:"/images/WeatherPhotos/redSmoke.jpg",
    weatherType:"Ash",
  },
  {
    source:"/images/WeatherPhotos/squall.jpg",
    weatherType:"Squall",
  },
  {
    source:"/images/WeatherPhotos/4bolt.jpg",
    weatherType:"Thunderstorm",
  },

  {
    source:"/images/WeatherPhotos/overcastMtns2Small.png",
    weatherType:"",
  },
  {
    source:"/images/WeatherPhotos/partlyCloudySmall.png",
    weatherType:"Clouds",
  },
  {
    source:"/images/WeatherPhotos/sandstorm.jpg",
    weatherType:"Sand",
  },
  {
    source:"/images/WeatherPhotos/snowLandscape.jpg",
    weatherType:"Snow",
  },
  {
    source:"/images/WeatherPhotos/windyTree.jpg",
    weatherType:"Wind",
  },
  {
    source:"/images/WeatherPhotos/cityRain.jpg",
    weatherType:"Rain",
  },
  {
    source:"/images/WeatherPhotos/smokeyCity.jpg",
    weatherType:"Smoke",
  },

]




function preloadImages(urls, allImagesLoadedCallback){
  var loadedCounter = 0;
var toBeLoadedNumber = urls.length;
urls.forEach(function(url){
  preloadImage(url, function(){
      loadedCounter++;
          console.log('Number of loaded images: ' + loadedCounter);
    if(loadedCounter == toBeLoadedNumber){
      allImagesLoadedCallback();
    }
  });
});
function preloadImage(url, anImageLoadedCallback){
    var img = new Image();
    img.onload = anImageLoadedCallback;
    img.src = url;
}
}










var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

function preload_image(im_url) {
  let img = new Image();
  img.src = im_url;

}

// const photoBtn = document.getElementById("photoTest")
// photoBtn.addEventListener("click", ()=>photoScroll())
let photoIndex = 0
function photoScroll(){
  photoIndex++
  const outsideWindow = document.getElementById("outsideWindow")
  if (photoIndex == weatherImages.length)
    {photoIndex = 0}
  outsideWindow.src = weatherImages[photoIndex].source
  console.log(weatherImages[photoIndex].weatherType)

}

const windowFrames = [
  "/images/WindowFrames/transparentWindowCrop.png",
  "/images/WindowFrames/greenCircleWindow.png",
  "/images/WindowFrames/brickWindow.png",
  "/images/WindowFrames/triforceWindow.png",
  // "/images/WindowFrames/victoriaWindow.png",
  // "/images/WindowFrames/yellowBars.png"
]


// Let's call it:
preloadImages(windowFrames, function(){
  console.log('All images were loaded');
});


let index = 0

function changeWindow(){
  index++
  const windowFrameImg = document.getElementById("windowFrameImg")
  if (index == windowFrames.length)
    {index = 0}
  windowFrameImg.src = windowFrames[index]

}

const windowFrame = document.getElementById("settingsWindowBtn")

windowFrame.addEventListener("click", () => changeWindow())





function unitLetter(units){
  if (units =="Metric"){
    return "C"
  } else 
  return "F"
}

function updateGrid1 (data, units){
  const date = new Date(data.dt*1000)
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
    location = `${data.cityName}, ${data.country}`
  } else {
    location = `${data.cityName}, ${data.country}`
  }
  return location
}





function windowBlurRemove (){
  // const grid = document.getElementById("grid1")
  const image = document.getElementById("outsideWindow")
  image.classList.remove("blur")
  // grid.classList.remove("blur")
  

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

