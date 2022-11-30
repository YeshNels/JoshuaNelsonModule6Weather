var searchbtn = document.getElementById('citysearch')
var searchval = document.getElementById('cityname')
var weatherAPI = "b7e8d3a80e5e67f5ecd82ef0bc763cfd"


searchbtn.addEventListener("click", function() {
    console.log(searchval.value)
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchval.value + "&appid=" + weatherAPI;
    axios.get(queryURL)
    .then((response) => {console.log(response.data);
    axios.get("https://api.openweathermap.org/data/3.0/onecall?lat="+response.data.coord.lat+"&lon="+response.data.coord.lon+"&exclude=hourly,daily&appid="+weatherAPI)
    .then(res => {
        console.log(res.data)
        document.getElementById('current').innerHTML=`
        <h2>${response.data.name}`
    })})
});