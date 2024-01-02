/* Write a function called "isEven". "isEven" Should return whether it is even or not. Return -1 for invalid input. */

function isEven(num) {
	/// Your code Starts here 
	if (typeof num === 'number' && isFinite(num) && Math.floor(num) === num) {
		return num % 2 === 0;
	} else {
		return -1; // Return -1 for invalid input
	}
	/// Your code Ends here
}

// Test cases
console.log(isEven(12)); // Output: true (12 is even)
console.log(isEven(0)); // Output: true (0 is even)
console.log(isEven(11)); // Output: false (11 is odd)
console.log(isEven("11h")); // Output: -1 (invalid input)

/*
Lines For TestCase

isEven(12);
isEven(0);
isEven(11);
isEven("11h");
*/