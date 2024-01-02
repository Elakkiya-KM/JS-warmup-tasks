/* Given an object and a key, "removeProperty" removes the given key from the given object. */

var obj = {
	"mykey": "value"
};

function removeProperty(obj, key) {
	/// Your code Starts here 
	delete obj[key];
	/// Your code Ends here
}

removeProperty(obj, "mykey");

// Test case
console.log(obj.mykey === undefined); // Output: true

/*
Lines For TestCase

obj.mykey === undefined;
*/