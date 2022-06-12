// Singleton Pattern
const SingletonFactory = (function(){
    let obj;
    
    function Singleton(){
      this.text = "hi"
    }
    
    return {
      getInstance: function(){
        if(!obj){
          obj = new Singleton()
        }
        return obj
      }
    }
  })()
  
  const instance1 = SingletonFactory.getInstance()
  const instance2 = SingletonFactory.getInstance()
  
  console.log(instance1===instance2)