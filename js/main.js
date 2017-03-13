function makeRequest(onSuccess, onFailure, url) {
	const request = new XMLHttpRequest();
	request.open('GET', url, true);

	request.onload = function() {
		if (request.status === 200) {
			console.log(request.responseText);
			const data = request.responseText ; 
			// JSON.parse(request.responseText);
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
// document.getElementById("lol-button").onclick = () => getSummonerID(document.getElementById("regions").value, document.getElementById("searchLoL").value);

function searchWeather(city, fn) {
	const site_url_weather = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=Metric&appid=6b4d3d9e5ae8cc4b5f1585c87b5a160e';
	document.querySelector('.loader__wrapper').style.display = 'block';
	makeRequest(fn, showError, site_url_weather);
}

function getSummonerID(region, name) {
	// const site_url_lol = 'https://'+region+'.api.pvp.net/api/lol/'+region+'/v1.4/summoner/by-name/'+name+'?api_key=RGAPI-91320e30-0c54-42a3-84bd-bdb8c61e3b4b'
	const site_url_lol = "proxy.php";
	makeRequest(ShowLolData, LolDataErr, site_url_lol);
}



//  LOL SECTION

document.getElementById("lol-button").onclick = () => getData(ShowLolData, LolDataErr);


function getData(success, err) {
	$.ajax({
	  type: 'Get',
	  url: 'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/xarieli?api_key=RGAPI-91320e30-0c54-42a3-84bd-bdb8c61e3b4b',
	  // jsonpCallback: ShowLolData(data),
	  dataType: 'jsonp',
	  success: function (data) {
	  	console.log(data);
	  },
	  error: err
	});
}

function ShowLolData(data) {
	document.getElementById("lol-name").innerHTML = data.id;
}

function LolDataErr () {
	console.log('ERROR LOL DATA FETCHING');
}

