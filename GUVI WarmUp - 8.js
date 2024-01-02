/* Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. */

function lessThan100(num1, num2) {
	///Your code Starts here 
	return (num1 + num2) < 100;
	///Your code Ends here
}
// Test cases
console.log(lessThan100(22, 15)); // Output: true
console.log(lessThan100(83, 34)); // Output: false
console.log(lessThan100(50, 50)); // Output: true	
/*
Lines For TestCase

lessThan100(22, 15);
lessThan100(83, 34);
lessThan100(50, 50);
*/