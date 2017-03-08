function makeRequestToOpenWeather(onSuccess, onFailure, cityname) {
	const request = new XMLHttpRequest();
	request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+cityname+'&units=Metric&appid=6b4d3d9e5ae8cc4b5f1585c87b5a160e', true);

	request.onload = function() {
		if (request.status === 200) {
			console.log(request.responseText);
			const data = JSON.parse(request.responseText);
			console.log(data);
			onSuccess(data);
		} 
		else {
			onFailure();
		}
	}
	request.send();
}
function showError() {
	let errorDiv = document.createElement('div');
	document.getElementById("weatherApp").appendChild(errorDiv);
	errorDiv.innerHTML = "Sorry, we could not find this city";
}


function showData(data) {
	document.getElementById("weatherApp-city-name").innerHTML = data.name;
	document.getElementById("weatherApp__temp").innerHTML = data.main.temp_min;	
	console.log('przed loaderem');
	document.querySelector('.loader__wrapper').style.display = 'none';
	console.log('po loaderze');
}

document.getElementById("button").onclick = () => searchWeather(document.getElementById("search").value, showData);

function searchWeather(city, fn) {
	// let weatherDivs = '	<div id="weatherApp-city-name"></div><div id="weatherApp__temp"></div>';
	// document.getElementById("weatherApp").appendChild(weatherDivs);
	// document.getElementById("weatherApp-city-name").innerHTML = "Loading...";
	// document.getElementById("weatherApp__temp").innerHTML = "Loading...";
	document.querySelector('.loader__wrapper').style.display = 'block'
	makeRequestToOpenWeather(fn, showError, city);
}