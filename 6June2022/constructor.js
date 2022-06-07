// Constructor Pattern

function Car(name, price, color){
    this.name = name;
    this.price = price;
    this.color = color;
    this.startCar = function(){
      console.log(this.name, " is started");
    }
  }
  
  const mercedes = new Car("Mercedes", "19000000", "black")
  mercedes.startCar()