var searchbtn = document.getElementById('citysearch')
var searchval = document.getElementById('cityname')
var weatherAPI = "b7e8d3a80e5e67f5ecd82ef0bc763cfd"


searchbtn.addEventListener("click", function() {
    console.log(searchval.value)
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchval.value + "&units=metric&appid=" + weatherAPI;
    axios.get(queryURL)
    .then((response) => {console.log(response.data);
    axios.get("https://api.openweathermap.org/data/3.0/onecall?lat="+response.data.city.coord.lat+"&lon="+response.data.city.coord.lon+"&exclude=hourly,minutely&units=metric&appid="+weatherAPI)
    .then(res => {
        console.log(res.data)
        if (res.data.current.uvi<2) {
            uvi="green"
        }
        else if (res.data.current.uvi<5) {
            uvi="orange"
        }
        else {
            uvi="red"
        }
        document.getElementById('current').innerHTML=`
        <h2>Current forecast for ${response.data.city.name}</h2>
        <p>${response.data.list[0].dt_txt}</p>
        <img src="http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png">
        <p>Temp is ${response.data.list[0].main.temp}C</p>
        <p>Humidity is ${response.data.list[0].main.humidity}%</p>
        <p>Wind speed is ${response.data.list[0].wind.speed}m/s</p>
        <p class="${uvi}">UV index is ${res.data.current.uvi}</p>`
        document.getElementById('future').innerHTML=`
        <h2>Five-day forecast for ${response.data.city.name}</h2>
        <p>${response.data.list[8].dt_txt}</p>
        <img src="http://openweathermap.org/img/wn/${response.data.list[8].weather[0].icon}@2x.png">
        <p>Temp is ${response.data.list[8].main.temp}C</p>
        <p>Humidity is ${response.data.list[8].main.humidity}%</p>
        <p>Wind speed is ${response.data.list[8].wind.speed}m/s</p>
        <p>${response.data.list[16].dt_txt}</p>
        <img src="http://openweathermap.org/img/wn/${response.data.list[16].weather[0].icon}@2x.png">
        <p>Temp is ${response.data.list[16].main.temp}C</p>
        <p>Humidity is ${response.data.list[16].main.humidity}%</p>
        <p>Wind speed is ${response.data.list[16].wind.speed}m/s</p>
        <p>${response.data.list[24].dt_txt}</p>
        <img src="http://openweathermap.org/img/wn/${response.data.list[24].weather[0].icon}@2x.png">
        <p>Temp is ${response.data.list[24].main.temp}C</p>
        <p>Humidity is ${response.data.list[24].main.humidity}%</p>
        <p>Wind speed is ${response.data.list[24].wind.speed}m/s</p>
        <p>${response.data.list[32].dt_txt}</p>
        <img src="http://openweathermap.org/img/wn/${response.data.list[32].weather[0].icon}@2x.png">
        <p>Temp is ${response.data.list[32].main.temp}C</p>
        <p>Humidity is ${response.data.list[32].main.humidity}%</p>
        <p>Wind speed is ${response.data.list[32].wind.speed}m/s</p>
        <p>${response.data.list[39].dt_txt}</p>
        <img src="http://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png">
        <p>Temp is ${response.data.list[39].main.temp}C</p>
        <p>Humidity is ${response.data.list[39].main.humidity}%</p>
        <p>Wind speed is ${response.data.list[39].wind.speed}m/s</p>`
    })})
});