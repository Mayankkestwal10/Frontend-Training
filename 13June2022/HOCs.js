// A high-order function is a function that receives another function as a parameter or returns a function as a return value.
// map, reduce, filter, etc. are the examples of HOCs. They are also called polyfills as well

const names = ["Leonardo", "Lucas", "Bianca", "José", "Maria", "Joe"];

const sayHiToNames = names.map(name => `Hello ${name}`);