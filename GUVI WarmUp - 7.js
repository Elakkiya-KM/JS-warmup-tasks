/* Create a function that takes height and width and finds the perimeter of a rectangle. */

function findPerimeter(num1, num2) {
	///Your code Starts here 
	return 2 * (num1 + num2);
	// Perimeter formula for a rectangle: 2 * (length + width)	
	///Your code Ends here
}
// Test cases
console.log(findPerimeter(6, 7)); // Output: 26
console.log(findPerimeter(20, 10)); // Output: 60
console.log(findPerimeter(2, 9)); // Output: 22
/*
Lines For TestCase

findPerimeter(6, 7); 
findPerimeter(20, 10);
findPerimeter(2, 9);
*/