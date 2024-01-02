/* Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’. */

function getNthElement(array, n) {
	/// Your code Starts here 
	if (array.length === 0) {
		return undefined;
	}
	
	return array[n];
	/// Your code Ends here
}

// Test cases
console.log(getNthElement([1, 3, 5], 1)); // Output: 3
console.log(getNthElement([1, 3, 5], 2)); // Output: 5
console.log(getNthElement([], 2)); // Output: undefined

/*
Lines For TestCase

getNthElement([1, 3, 5], 1);
getNthElement([1, 3, 5], 2);
getNthElement([], 2);
*/