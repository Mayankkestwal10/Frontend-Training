// What is a polyfill?
// Polyfill is a piece of code, that developer expects from a browser to provide natively. 
// If it's not available in the browser, you being a developer, use your logics and implement the solution.

const arr = [1,2,3,4,5]

// map
Array.prototype.myMap = function(callback){
    let newArr = []
    for(let i=0; i<this.length; i++){
        newArr.push(callback(this[i], i, this))
    }
    return newArr
}

console.log("myMap ", arr.myMap((item)=>item*2))

// filter
Array.prototype.myFilter = function(callback, context){
    let newArr = []
    for(let i=0; i<this.length; i++){
        if(callback.call(context, this[i], i, this)){
            newArr.push(this[i])
        }
    }
    return newArr
}

console.log("myFilter ", arr.myFilter((item)=>item>2))

// reduce
Array.prototype.myReduce = function(callback, init){
    let acc = init===undefined ? undefined : init;
    
    for(let i=0; i<this.length; i++){
        if(acc!==undefined){
            acc = callback.call(undefined, acc, this[i], i, this)
        }else{
            acc = this[i]
        }
    }
    
    return acc
}

console.log("myReduce ", arr.myReduce((acc, item)=>acc+item, 5))

// forEach
Array.prototype.myForEach = function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i], i, this)
    }
}

console.log("myForEach ", arr.myForEach(item=>console.log(item+1)))

// find
Array.prototype.myFind = function(callback, context){
    for(let i=0; i<this.length; i++){
        if(callback.call(context, this[i], i, this)){
            return this[i]
        }
    }

    return undefined
}

console.log("myFind ", arr.myFind(item=>item>=4))
