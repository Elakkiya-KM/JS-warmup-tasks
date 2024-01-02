/* MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:turkey = 2 legshorse = 4 legspigs = 4 legsThe farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals. */

function CountLegs(turkey, horse, pigs) {
	///Your code Starts here 
	const legsPerTurkey = 2;
	const legsPerHorse = 4;
	const legsPerPig = 4;
	
	const totalLegs = (turkey * legsPerTurkey) + (horse * legsPerHorse) + (pigs * legsPerPig);
	
	return totalLegs;
	
	///Your code Ends here
}
console.log(CountLegs(2, 3, 5)); // Output: 36
console.log(CountLegs(1, 2, 3)); // Output: 22
console.log(CountLegs(5, 2, 8)); // Output: 50
/*
Lines For TestCase

CountLegs(2, 3, 5);
CountLegs(1, 2, 3);
CountLegs(5, 2, 8);
*/