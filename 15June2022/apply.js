// apply

function info(name, college){
    console.log(name, college)
}

info.apply({}, ["Mayank", "LPU"])

// Apply - Polyfill Implementation
Function.prototype.myApply = function(obj, args){
    obj.fn = this;
    obj.fn(...args)
}

info.myApply({}, ["Mayank", "LPU"])
