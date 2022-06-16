// Call
// Call invokes the function and allows you to pass in arguments one by one.

let obj = {
    fname: "Mayank",
    lname: "Kestwal"
}

function greet(){
    console.log("Hi!", this.fname, this.lname)
}

greet.call(obj)

// Call - Polyfill Implementation
Function.prototype.myCall = function(obj, ...args){
    obj.fn = this;
    obj.fn(...args);
}

greet.myCall(obj)
