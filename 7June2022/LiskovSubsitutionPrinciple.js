// Liskov Subsitution Principle

// if we substitute a superclass object reference with an object of any of its subclasses, the program should not break.

class Bird{
    fly(){
        //
    }
}

class Eagle extends Bird{
    dive(){
        //
    }
}

const eagle = new Eagle();
eagle.fly()
eagle.dive()

// breaking functionality
class Penguin extends Bird{
    // Problem - Penguin can't fly
}


// better way

class Bird{
    layEggs(){
        //
    }
}

class FlyingBird{
    fly(){

    }
}

class SwimmingBird{
    swim(){

    }
}

class EagleBird extends FlyingBird{}

class PenguinBird extends SwimmingBird{}

const penguin = new PenguinBird()
penguin.swim() // works