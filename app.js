var url = "http://localhost:3000/post";

function response(data,status) {
  var response = JSON.parse(data);
    console.log(data);
    
    if (response['action'] == 'changeTheme') {
      document.querySelector("link[href='weather.css']").href = "weather2.css";
    }
}

function getWeather() {
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");
  
    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "e4246ea8349adb4cc4dca1e740ee8e3a";
  
    location.innerHTML = "Locating...";
  
    navigator.geolocation.getCurrentPosition(success, error);
  
    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
  
      let url =
        api +
        "?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey +
        "&units=imperial";
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          let temp = data.main.temp;
          temperature.innerHTML = temp + "° F";
          location.innerHTML =
            data.name + " (" + latitude + "°, " + longitude + "°)";
          description.innerHTML = data.weather[0].main;
        });
    }
  
    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }
  }
  
  getWeather();


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
  /* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}