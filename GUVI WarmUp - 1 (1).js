/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(num) {
	///Your code Starts here 
	function isInteger(value) {
		return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
	}
	
	if (isInteger(num)) {
		return -num; // Return the opposite of the integer value
	} else {
		return -1; // Return -1 for non-integer values
	}
	///Your code Ends here
}
// Test cases
console.log(getOpposite(5)); // Output: -5
console.log(getOpposite(0)); // Output: 0
console.log(getOpposite(-5)); // Output: 5
console.log(getOpposite("5a")); // Output: -1
console.log(getOpposite(5.5)); // Output: -1
/*
Lines For TestCase
getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5)
*/