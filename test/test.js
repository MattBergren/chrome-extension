
describe('prompt.js', function() { 
	describe('validatePhoneNumber', function() { 

		it('should return a boolean', function() { 
			var result = validatePhoneNumber('23456'); 
			expect(typeof result).toBe('boolean'); 
		}); 

		it('should return true when given a 1-800 number', function(){
			var result = validatePhoneNumber('1-800-867-5309');
			expect(result).toBe(true);
		});

	}); 
});

describe('main.js', function(){

	describe('main.js', function(){

		it('should call getUserName', function() { 
			spyOn(window, 'getUserName'); 
			main(); 
			expect(getUserName).toHaveBeenCalled(); 
		});
		
	});

});