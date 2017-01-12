function main() {
	var userName = getUserName();
	var phoneNumber = getPhoneNumber(userName);
	var location = getLocation(phoneNumber);
	var images = getImages();
	// setInterval is like setTimeout, except it repeats its code instead of 
	// executing it just once. Use setInterval to replace new images that are 
	// loaded as you scroll down the page.
	setInterval(function() {
		images = getImages();
		replaceImages(images, location);
	}, 3000);

	/*function displayMarkup(userName, location){
		var output = '<h1>Hello, ' + userName + '!</h1>';
		//output = output + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + ' viewed on: ' + kbValues.currentTime + '</p>' + '<h3>How is the weather in ' + userLocation+' ?';
		output = output + '<h3>How is the weather in ' + location +' ?';
		document.body.innerHTML = output;
	}

	displayMarkup(userName, location);
	*/
}

main();