/* Create a function that returns true if an integer is evenly divisible by 5, and false otherwise. */

function divisibleByFive(num1) {
	///Your code Starts here 
	return num1 % 5 === 0;
	
	///Your code Ends here
}
console.log(divisibleByFive(5)); // Output: true
console.log(divisibleByFive(-55)); // Output: true
console.log(divisibleByFive(37)); // Output: false
/*
Lines For TestCase

divisibleByFive(5);
divisibleByFive(-55);
divisibleByFive(37);
*/