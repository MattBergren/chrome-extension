// Definition of the actual sum function 

function sum(x, y) {
	return x * y; 
}

// We'll put all of our tests in this testSum function 
function testSum() {

	// A utility function to run the tests. 

	function test(x, y, expected) { 
		// Actually run the sum function and save the result 
		var result = sum(x, y); 

		// Is the result what we expected? 
		if (result === expected) { 
			// Yes! The test passed. 
			console.log('Pass!\n'); 
		} else { 
			// No. The test failed, so output some information about what actually happened and what we expected to happen. console.error works a lot // like console.log, but is meant for logging errors. 
			console.error('FAIL: expected the sum of ' + x + ' and ' + y + ' to be ' + expected + ', not ' + result + '\n'); 
		} 
	} 

	console.log('Testing sum of two positive numbers'); 
	// Expect 2 + 2 to equal 4 
	test(2, 2, 4); 

	console.log('Testing sum of two negaive numbers');
	// Expect -3 + -2 to equal 5 
	test(-3, -2, -5); 

	console.log('Testing sum of one positive and one negative number'); 
	// Expect 3 + -5 to equal -2 
	test(3, -5, -2); 

	console.log('Testing sum of 0 and 0'); 
	// Expect 0 + 0 to equal 0 
	test(0, 0, 0); 

	console.log('Testing sum of 0 and a positive number'); 
	// Expect 0 + 3 to equal 3 
	test(0, 3, 3); 

	console.log('Testing sum of 0 and a negative number'); 
	// Expect 0 + -3 to equal -3 
	test(0, -3, -3); 
} 

// Finally, call testSum to run all our tests 
testSum();