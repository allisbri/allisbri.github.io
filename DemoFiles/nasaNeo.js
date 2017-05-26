var request = new XMLHttpRequest();
var apiKey = '68IUxnML4KjIPtKhCuD3ZZR1ZnUqkmWJEtIFuxYW';

document.addEventListener('DOMContentLoaded', bindButtons);
function bindButtons() {
	document.getElementById('dateSubmit').addEventListener('click', function (event) {
		var date = document.getElementById('date').value;
		var request = new XMLHttpRequest();
		var url = 'https://api.nasa.gov/neo/rest/v1/feed?' + 'start_date=' + date + '&end_date=' + date + '&api_key=' + apiKey;
		request.open('GET', url, true);
		request.addEventListener('load', function () {
			if (request.status >= 200 && request.status < 400) {
				dataIn = JSON.parse(request.responseText);

				var array  = getAsteroidArray(dataIn, date);
				printAsteroidDetails(array);
			} 
			else {
				console.log('Error. The data could not be retrieved.');
			}
		});
		request.send(null);
		event.preventDefault();
	});
}


