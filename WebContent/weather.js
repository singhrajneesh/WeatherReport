var word = null;
// This function is used to get data from using API
function getData() {
	var xmlHttp = new XMLHttpRequest();
	word = document.getElementById("data").value;
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + word
			+ "&appid=4f51cc3581658734467f957800c7625d";
	xmlHttp.open("GET", url, true);
	xmlHttp.send();
	xmlHttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var myArr = JSON.parse(this.responseText);
		var Obj = "Maximum Temperature " + myArr.main.temp_max + "F"
				+ '<br>' + " Minimum Temperature " + myArr.main.temp_min
				+ "F" + '<br>' + " Current Temperature " + myArr.main.temp
				+ "F" + '<br>' + " Humidity " + myArr.main.humidity + "%";
		document.getElementById("show").innerHTML = Obj;

		}
	};
}

//This function is used to get send data to servlet
function Servlet() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var myArr = JSON.parse(this.responseText);
		}
	};
	var cityname = "city=" + word;
	xmlhttp.open('GET', "http://localhost:8083/WeatherReport/Weather?"
			+ cityname, true);
	alert(word+" is added in your favourites list");

	xmlhttp.send();
	}

//This function will give the real time data of particular city
function getprevious(city) {	
	var xmlHttp = new XMLHttpRequest();
	word = city;
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + word
			+ "&appid=4f51cc3581658734467f957800c7625d";
	xmlHttp.open("GET", url, true);
	xmlHttp.send();
	xmlHttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var myArr = JSON.parse(this.responseText);
		var Obj = "Maximum Temperature " + myArr.main.temp_max + "F"
				+ '<br>' + " Minimum Temperature " + myArr.main.temp_min
				+ "F" + '<br>' + " Current Temperature " + myArr.main.temp
				+ "F" + '<br>' + " Humidity " + myArr.main.humidity + "%";			
		var showfav=document.getElementById("temp");
		showfav.insertAdjacentHTML('afterend','<div class="container">'+'<div class="col-lg-6 float-left">'+'<div class="card mt-4">'+
		'<div class="card-header" id=\'' + "title" + '\'></div>'+
		'<div class="card-body">'+
		'<p class="card-text" id=\'' + "auth" + '\' ></p>'+
		'</div>'+'</div>'+'</div>'+'</div>');
		document.getElementById("title").innerHTML =city;
		document.getElementById("auth").innerHTML = Obj;
		}
	};
}

//This function will receive the list of favourites
function ShowFavourite() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {			
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var myArr=JSON.parse(this.responseText);
		citynames = myArr.city;
		$('#show').empty();
		for (var i = 0; i < citynames.length; i++) {
		getprevious(citynames[i]);
		}		
		}
	};
	xmlhttp.open('GET', "http://localhost:8083/WeatherReport/ShowFavourite",
	true);
	xmlhttp.send();
}

