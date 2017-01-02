var userName = prompt('Hello, what\'s your name?');
var phoneNumber = prompt('Hello ' + userName + ' what\'s your phone number?');
var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;

// Get matches from phoneNumber 
var phoneMatches = phoneNumberPattern.exec(phoneNumber);
var areaCode = phoneMatches[1];

var userLocation = kbValues.areaCodes[areaCode];

var output = '<h1>Hello, ' + userName + '!</h1>';

// Is the phone number valid? 
if (phoneNumberPattern.test(phoneNumber)) {
	// Yes, the phone number is valid! Add the success message to the output. 
	output = output + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + ' viewed on: ' + kbValues.currentTime + '</p>' + '<h3>How is the weather in ' + userLocation+' ?';
} else {
	// No, the phone number is not valid. Tell the user about the problem. 
	output = output + '<h2>That phone number is invalid: ' + phoneNumber; 
}

// Insert the output into the web page. 
document.body.innerHTML = output;
