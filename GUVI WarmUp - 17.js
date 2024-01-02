/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	const deltaX = x2 - x1;
	const deltaY = y2 - y1;
	const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
	return distance;
}
// Test cases
console.log(getDistance(100, 100, 400, 300));
console.log(getDistance(1, 2, 4, 6));
/*
Lines For TestCase
getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/