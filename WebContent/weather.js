function getData(){
	var xmlHttp = new XMLHttpRequest();
	var word=document.getElementById("data").value;
	var url ="http://api.openweathermap.org/data/2.5/weather?q="+word+"&appid=4f51cc3581658734467f957800c7625d";
	xmlHttp.open("GET",url, true);
	xmlHttp.send();
	xmlHttp.onreadystatechange = function() {
	   if(this.readyState == 4 && this.status == 200){
	       var myArr= JSON.parse(this.responseText);
/*	       var dataObj= JSON.stringify(myArr);
	       document.write(dataObj);*/	       
	       var Obj="Maximum Temperature "+myArr.main.temp_max+"F"+'<br>'+" Minimum Temperature "+myArr.main.temp_min+"F"+'<br>'+
		      " Current Temperature "+myArr.main.temp+"F"+'<br>'+" Humidity "+myArr.main.humidity+"%";
	      document.getElementById("show").innerHTML=Obj;
	      //Json();
	      /*
	      function Json(){
	    		var Cityname=word;
	    		var html= JSON.stringify(Cityname);
	    		document.write(html);
	    		}*/
	      callServletWithAjax();
	      function callServletWithAjax(){
	    		var xmlhttp = new XMLHttpRequest();
	    		
	    		xmlhttp.onreadystatechange = function(){
	    			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
	    				document.getElementById("show").innerHTML = xmlhttp.responseText;
	    			}
	    		};
	    		
	    		var cityname = data;
	    		xmlhttp.open('GET',cityname, true);
	    		xmlhttp.send();
	    	}
	      
	       }
	   };
}