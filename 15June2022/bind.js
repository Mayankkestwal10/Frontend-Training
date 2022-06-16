// Bind

const obj = {
    age: 15,
    name:"Mayank",
    getInfo: function(){
        console.log(this.name, this.age)
    }
}

const obj2 = {
    age: 22,
    name:"Saurav",
}

let showInfo = obj.getInfo.bind(obj2)
showInfo()

// Bind - Polyfill Implementation
Function.prototype.myBind = function(obj, args){
    obj.fn = this;
    return function(...args){
        obj.fn(...args);
    }
}

let showCustomInfo = obj.getInfo.myBind(obj2)
showCustomInfo()
