// handle async tasks which is eventually going to be completed or failed
// 1. Pending   2. Fulfilled   3. Rejected
let promise = new Promise(function(resolve, reject){
    //do something
});

// The Promise() constructor takes a function as an argument. 
// The function also accepts two functions resolve() and reject().

// If the promise returns successfully, the resolve() function is called. 
// And, if an error occurs, the reject() function is called.

const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);