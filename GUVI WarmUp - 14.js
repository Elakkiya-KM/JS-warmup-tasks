/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	/// Your code Starts here 
	if (firstName && lastName) {
		return firstName + " " + lastName;
	} else if (firstName) {
		return firstName;
	} else if (lastName) {
		return lastName;
	} else {
		return ""; // Return an empty string if both names are empty
	}
	///Your code Ends here
}
// Test cases
console.log(getFullName("GUVI", "GEEK")); // Output: "GUVI GEEK"
console.log(getFullName("GUVI")); // Output: "GUVI"
console.log(getFullName("GEEK")); // Output: "GEEK"
console.log(getFullName("", "")); // Output: ""
/*
Lines For TestCase

getFullName("GUVI", "GEEK");
getFullName("GUVI" );
getFullName( "GEEK");
getFullName("", ""); 
*/