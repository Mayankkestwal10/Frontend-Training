// Functions in JavaScript are first-class objects, also known as “first-class citizens.”
// This means that we can work with functions in JavaScript the same way as variables.

const sum = (a, b) => a + b; // assign function as a variable

const resultSum = sum(1, 2);

const sumAgain = (a, b, sum) => sum(a, b); // pass function as argument


// retunr function as well
const greet = () => {
    return () => {   
        console.log("hi")
    }
}

const returnFn = greet()
returnFn()
