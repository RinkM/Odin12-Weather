// "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={f51057ef9381bb2453462ec951945aeb}"
// "https://api.openweathermap.org/data/2.5/weather?lat={39n}&lon={}&appid={f51057ef9381bb2453462ec951945aeb}"
// keep me a secret....
// name meteo
// f51057ef9381bb2453462ec951945aeb
// https://openweathermap.org/current#one
// Denver // 39.7392° N, 104.9903° W
// let weatherAPI = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cb0a780723ffc0649a66d5bbfcdbeebb"




// fetch(denverAPI)



// 'https://api.giphy.com/v1/gifs/translate?api_key=PKBlpNSDvOf0DDCyTKmkkVjXhnzlDoHy&s=cats'


// fetch(weatherAPI)
//   .then(function(response) {
//     if (response.status == 200)
//         console.log("Success", response)
    // Successful response :)
//   })
//   .catch(function(err) {
    // Error :(
//       console.log("error", err)
//   });




 // if not an empty string
  if (cityName) {
    // remove whitespace for the api call

    return cityName
      .replace(/(\s+$|^\s+)/g, '') // remove whitespace from begining and end of string
      .replace(/(,\s+)/g, ',') // remove any white space that follows a comma
      .replace(/(\s+,)/g, ',') // remove any white space that preceeds a comma
      .replace(/\s+/g, '+'); // replace any remaining white space with +, so it works in api call
  }
  return '';
}