// Declarative and imperative programming are different programming paradigms that can help you to achieve different results.

// Declarative programming is a programming paradigm where we specify the program logic without describing the flow control. 
// Declarative programming is all about what to do to achieve a certain result.
const numbers = [1, 2, 3, 4, 5];

const sumNumbers = (n) => n.reduce((acc, current) => acc + current);
console.log(sumNumbers())


// Imperative programming is a programming paradigm where we specify the program logic describing the flow control. 
// Imperative programming is all about how to achieve a certain result.
const numbers2 = [1, 2, 3, 4, 5];

const sumNumbers2 = (n) => {

    let finalResult = 0;
    for (let i = 0; i < n.length; i++) {
        finalResult += n[i];
    }
    return finalResult;
}

console.log(sumNumbers2())