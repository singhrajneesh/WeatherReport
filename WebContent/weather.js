var word = null;
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
	xmlhttp.send();
}

function ShowFavourite() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var myArr=JSON.parse(this.responseText);
			citynames = myArr.city;
			$('#show').empty();
			$('#show').append("<ul>");
			for (var i = 1; i < citynames.length; i++) {
				$('#show').append("<li>"+citynames[i]+"</li>")
			}
			$('#show').append("</ul>");
		}
	};
	xmlhttp.open('GET', "http://localhost:8083/WeatherReport/ShowFavourite",
			true);
	xmlhttp.send();
}
