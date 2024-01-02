/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	const framesPerMinute = num1 * num2 * 60;
	return framesPerMinute;
	
	///Your code Ends here
}
// Test cases
console.log(frames(1, 1)); // Output: 60 (1 frame per second for 1 minute)
console.log(frames(10, 1)); // Output: 600 (1 frame per second for 10 minutes)
console.log(frames(10, 25)); // Output: 15000 (25 frames per second for 10 minutes)
/*
Lines For TestCase

frames(1, 1);
frames(10, 1);
frames(10, 25); 
*/