var apiKey = "f833aee54ed09060c636bbfdec7172f5";
var searchKey = "";
$(document).ready(function() {
  $("#submit").click(function(){
  var location = $("#location").val();
  if(!isNaN(location)){
    searchKey = "zip"
    } else {
      searchKey = "q"
    }
    if(location != ""){
      $.ajax({
url:'https://api.openweathermap.org/data/2.5/weather?'+
searchKey + '=' + location + '&units=imperial&appid='+ apiKey, 
dataType:"jsonp",
type:"GET",
success:function(data){
  var result = outputData(data);
  $("#outputData").html(result);
  $("#outputData").val('');
}
      })
    }
})
})
function outputData(data){
  return"<div><h2>Weather in " + data.name +"</h2>" +
  "<img src='http://openweathermap.org./img/w/" + data.weather[0].icon + ".png' width=100px>" + 
  "<h4> Weather: " + data.weather[0].main + "<br>" +
  "Description: " + data.weather[0].description + "<br>" +
  "Tempature: " + data.main.temp + "F <br>" +
  "High Temp: " + data.main.temp_max + "F <br>"+
  "Low Temp: " + data.main.temp_min + "f <br> "
}