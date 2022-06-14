// Closure
// Property of a function by which it can remember the variables and function declared in its outer scope

const outerFn = () => {
    var fname = "mayank kestwal"

    function innerFn(){
        console.log(fname) // able to access fname
    }

    innerFn()
}

outerFn()