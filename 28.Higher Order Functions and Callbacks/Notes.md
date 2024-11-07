# What is a higher order function
--> whenever a function is returned from a function or function is passed in the argument of a function or both are done at the same time that functions called as higher order functions.

-->A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

One such technique is using higher order functions. Higher order functions are functions that take one or more functions as arguments, or return a function as their result.


some Higher order functions examples.

// call back fucction

function callBackFunc(){
console.log('Hello i am call back finction')
}

// this is a higher order function
// we pasing a parameret in its
function higherOrderFunc(a){

    console.log("Hello i am higher order function ")

    a ()
}

//Now Here we can pass the higher order funcion one argument is call back function.

higherOrderFunc(callBackFunc)

//In the above code higherOrderFunction() is an HOF because we are passing a 
//callback function as a parameter to it.