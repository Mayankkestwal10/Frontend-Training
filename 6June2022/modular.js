//  Modular Pattern

let healthLifestyle = (function(){
    var yoga = "pranayam";
    var doYoga = function(){
        console.log("Deep Breathing")
    }

    return {
        excercise: function(){
            doYoga();
            console.log(yoga)
        }
    }
})();

healthLifestyle.excercise()
console.log(healthLifestyle.yoga)