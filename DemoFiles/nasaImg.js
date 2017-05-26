var request = new XMLHttpRequest();
var apiKey = '68IUxnML4KjIPtKhCuD3ZZR1ZnUqkmWJEtIFuxYW';
var url = 'https://api.nasa.gov/planetary/apod?api_key=';
request.open("GET", url + apiKey, true);
request.addEventListener('load', function(){
	if (request.status >= 200 && request.status < 400){
		var dataIn = JSON.parse(request.responseText);
		document.getElementById('imgOfTheDay').src = dataIn.hdurl;
		document.getElementById('imgOfTheDay').style.width = "800px";
		document.getElementById('imgTitle').textContent = dataIn.title;
		document.getElementById('imgDescript').textContent = dataIn.explanation;
		//console.log(dataIn);
	}
	else {
		document.getElementById('imgTitle') = 'Image could not be displayed';
	}
});
request.send(null);