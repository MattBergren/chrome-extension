// Get the users name
function getUserName(){
	var userName = prompt('Hello, what\'s your name?');

	if(!userName){
		userName = prompt('You didn\'t enter a name. Really, what\'s your name?');
	}
	return userName;
}

// Get the user's phone number
function getPhoneNumber(userName){
	var phoneNumber = prompt('Hello ' + userName + ' what\'s your phone number?');
	if (!validatePhoneNumber(phoneNumber)) {
		phoneNumber = prompt('Please enter a valid phone number.');
	}
	return phoneNumber;
}

// Validata a phone number
function validatePhoneNumber(phoneNumber){
	return phoneNumber.match(/(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/);
}

// Determine location based on phone number
function getLocation(phoneNumber){
	// Create the phone number pattern
	var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
	// Get matches from phoneNumber 
	var phoneMatches = phoneNumberPattern.exec(phoneNumber);
	var areaCodes, areaCode, locationName;
	if (phoneMatches) {
		var areaCode = phoneMatches[1];
		var areaCodes = getAreaCodes();
		var locationName = areaCodes[areaCode];
	}

	// Look it's a ternary operator.
	// Return the locationName if it exists, else return 'somewhere'
	return locationName ? locationName : 'somewhere';
}
