/* Given two words, "isSameLength" returns whether the given words have the same length. */

function isSameLength(word1, word2) {
	/// Your code Starts here 
	return word1.length === word2.length;
	/// Your code Ends here
}

// Test cases
console.log(isSameLength("GUVI", "GEEK")); // Output: true
console.log(isSameLength("GUVI", "ZEN")); // Output: false
console.log(isSameLength("Hello", "GUVI")); // Output: false
/*
Lines For TestCase

isSameLength("GUVI", "GEEK");
isSameLength("GUVI", "ZEN");
isSameLength("Hello", "GUVI");
*/