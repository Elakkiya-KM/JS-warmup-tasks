/* There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value. */

function remainder(num1, num2) {
	///Your code Starts here 
	return num1 % num2;
	
	
	
	
	///Your code Ends here
}
// Test cases
console.log(remainder(1, 3)); // Output: 1
console.log(remainder(3, 4)); // Output: 3
console.log(remainder(-9, 45)); // Output: -9
console.log(remainder(5, 5)); // Output: 0
/*
Lines For TestCase

remainder(1, 3);
remainder(3, 4);
remainder(-9, 45);
remainder(5, 5);
*/