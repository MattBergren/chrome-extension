var greeting = document.getElementById('greeting');

greeting.addEventListener('click', function(){
	if (greeting.innerHTML.match(/World/)){
		greeting.innerHTML = 'Ola, mundo!';
	} else {
		greeting.innerHTML = 'Hello, World!';
	}
});

console.log('Instruction 1'); 
console.log('Instruction 2'); 

function instructionThree () { 
	console.log('Instruction 3'); 
} 

instructionThree();

console.log('Instruction 4');

function product(x,y){
	return x * y;
}

console.log(product(11,12));


var bergyFoods = [
	'spaghetti',
	'pizza',
	'hamburgers'
]

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

console.log(isInArray('hot dogs', bergyFoods));

