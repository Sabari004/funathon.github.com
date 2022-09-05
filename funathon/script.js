var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=a1eb575e6a2a88ceb39f43230efe5756')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  tempValue=tempValue-273.15;


  main.innerHTML = nameValue;
  desc.innerHTML = "Appearance of sky : "+descValue;
  temp.innerHTML = "Temperature : "+Math.floor(tempValue)+"°C";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})