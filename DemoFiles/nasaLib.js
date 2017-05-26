function getDistance (asteroid){
	return asteroid.close_approach_data[0].miss_distance.miles;
}
					
function getName (asteroid){
	return asteroid.name;
}
					
function printAsteroidDetails(array){
	var table = document.createElement("table");
	var tableHeader = document.createElement("thead");
	var tableBody = document.createElement("tbody");
	
	var nameHead = document.createElement("th");
	nameHead.textContent = "Name ";
	var distHead = document.createElement("th");
	distHead.textContent = "Distance ";
	tableHeader.appendChild(nameHead);
	tableHeader.appendChild(distHead);
	
	var rows = array.length;
	for(var j = 0; j < rows; j++){
		var newRow = document.createElement("tr");
		var nameCell = document.createElement("td");
		nameCell.textContent = getName(array[j]);
		var distCell = document.createElement("td");
		distCell.textContent = getDistance(array[j]) + " miles";
		newRow.appendChild(nameCell);
		newRow.appendChild(distCell);
		tableBody.appendChild(newRow);
	}
						
	table.appendChild(tableHeader);
	table.appendChild(tableBody);
	document.body.appendChild(table);
}
					
function getAsteroidArray (response, date){
	var asterArray = [];
	for (var i = 0; i < response.near_earth_objects[date].length; i++){
		var asteroid = (response.near_earth_objects[date][i]);
		asterArray.push(asteroid);
	}
		return asterArray;
}