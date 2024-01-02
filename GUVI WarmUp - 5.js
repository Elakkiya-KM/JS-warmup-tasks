/* Create a function that takes an array and returns the first element. */

function getFirstElement(arr) {
	///Your code Starts here 
	if (arr.length > 0) {
		return arr[0];
	} else {
		return undefined; // Return undefined if the array is empty
	}
	///Your code Ends here
}
// Test cases
console.log(getFirstElement([1, 2, 3])); // Output: 1
console.log(getFirstElement([80, 5, 100])); // Output: 80
console.log(getFirstElement([-500, 0, 50])); // Output: -500
console.log(getFirstElement([])); // Output: undefined (empty array)
/*
Lines For TestCase

getFirstElement([1, 2, 3]);
getFirstElement([80, 5, 100]);
getFirstElement([-500, 0, 50]);
*/