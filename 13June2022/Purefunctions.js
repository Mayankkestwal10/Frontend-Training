// Pure functions are functions that, given a specific input, will always return the same output.
// Pure functions are designed to not cause any side effects—for example, writing to the console, modifying an object, reassigning a variable, etc.


// Pure function
const myName = (name) => `Hello ${name}`;

myName("Mayank") // Should always return the same thing


// Impure function

// because the increaseCount function depends on count which is data other than the arguments passed

let count = 0;

const increaseCount = (value) => count += value;


// Impure function
// because we are logging something
function greet(){
    console.log("Hi")
}
greet()

