// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

let intervalId = setTimeout(greet, 3000);
console.log('Id: ' + intervalId);

// program to display a name
function greet(name, lastName) {
    console.log('Hello' + ' ' + name + ' ' + lastName);
}

// passing argument to setTimeout
setTimeout(greet, 1000, 'Mayank', 'kestwal');


// program to display time every 3 seconds
function showTime() {

    // return new date and time
    let dateTime= new Date();

    // returns the current local time
    let time = dateTime.toLocaleTimeString();

    console.log(time)

    // display the time after 3 seconds
     setTimeout(showTime, 3000);
}

// calling the function
showTime();


// program to stop the setTimeout() method

let count = 0;

// function creation
function increaseCount(){

    // increasing the count by 1
    count += 1;
    console.log(count)
}

let id = setTimeout(increaseCount, 3000);

// clearTimeout
clearTimeout(id); 
console.log('setTimeout is stopped.');