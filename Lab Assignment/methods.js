Here is the JavaScript code for the array and string methods you listed:

// Array methods
const myArray = [1, 2, 3];

// push method
const newLength = myArray.push(4, 5); // returns 5
console.log(myArray); // outputs [1, 2, 3, 4, 5]

// pop method
const poppedElement = myArray.pop(); // returns 5
console.log(myArray); // outputs [1, 2, 3, 4]

// shift method
const shiftedElement = myArray.shift(); // returns 1
console.log(myArray); // outputs [2, 3, 4]

// unshift method
const newLength = myArray.unshift(0, 1); // returns 5
console.log(myArray); // outputs [0, 1, 2, 3, 4]

// slice method
const newArray = myArray.slice(1, 3); // returns [1, 2]
console.log(newArray); // outputs [1, 2]

// splice method
const removedElements = myArray.splice(1, 2, 'a', 'b', 'c'); // returns [1, 2]
console.log(myArray); // outputs [0, 'a', 'b', 'c', 3, 4]

// concat method
const myNewArray = myArray.concat(['d', 'e'], ['f']); // returns [0, 'a', 'b', 'c', 3, 4, 'd', 'e', 'f']
console.log(myNewArray);

// reverse method
const reversedArray = myArray.reverse(); // returns ['f', 'e', 'd', 4, 3, 'c', 'b', 'a', 0]
console.log(reversedArray);

// String methods
const myString = 'Hello, world!';

// length property
console.log(myString.length); // outputs 13

// charAt method
console.log(myString.charAt(0)); // outputs "H"

// toUpperCase method
const upperCaseString = myString.toUpperCase(); // returns "HELLO, WORLD!"
console.log(upperCaseString);

// trim method
const trimmedString = ' hello '.trim(); // returns "hello"
console.log(trimmedString);

// indexOf method
const index = myString.indexOf('world'); // returns 7
console.log(index);

// replace method
const newString = myString.replace('world', 'everyone'); // returns "Hello, everyone!"
console.log(newString);

// split method
const myArray = myString.split(','); // returns ['Hello', ' world!']
console.log(myArray);
