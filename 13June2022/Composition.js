// Composition can also be expressed as combination—it’s a process of combining multiple
// functions in a hierarchy to produce a new function or perform a computation.

// filter + map
// return an array with all the squares of no. greater than 5
const values = [1,2,4,5,6,0,9,10]

const newValues = values.filter(item=>item>5).map(item=>item*item)
console.log(newValues)
