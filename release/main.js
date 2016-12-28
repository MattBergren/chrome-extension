var projectName = 'kittenbook';
var versionNumber = '0.0.1';
var currentDate = new Date(); // Create Date object.
var currentTime = currentDate.getFullYear() 
				+ '-' +(currentDate.getMonth() + 1) 
				+ '-' +currentDate.getDate() 
				+ ' at ' +currentDate.getHours() 
				+ ':' +currentDate.getMinutes() 
				+ ':' +currentDate.getSeconds();

var userName = prompt('Hello, what\'s your name?');
document.body.innerHTML = '<h1>Hello, ' 
						+ userName 
						+ '!</h1>' 
						+ '<p>' 
						+ projectName 
						+ ' ' 
						+ versionNumber + 
						' accecessed on: ' 
						+ currentTime 
						+ '</p>';