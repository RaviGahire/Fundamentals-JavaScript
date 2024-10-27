# A function is a block of code designed to perform a particular task. You can think of it as a reusable piece of code that runs only when it's called.

Syntax
function functionName(parameters) {
 Code to be executed
}

functionName: This is the name you give to your function. Naming helps identify the function for later use.
parameters: These are inputs to the function, which act like placeholders for values you pass when calling the function.
return: Functions can return values using the return keyword.

Parameters and Arguments:
Parameters are the variables defined in the function. Arguments are the actual values passed to the function when we calling the function.

function greet(name) {
  return 'Hello, ' + name;
}

console.log(greet('John')); // Output: Hello, John


Return Value:
A function can return a value using the return keyword. If there's no return statement, the function returns undefined by default.

function multiply(x, y) {
  return x * y;
}

let result = multiply(3, 4);
console.log(result); // Output: 12


# In JavaScript, parameters and arguments are closely related concepts used in functions, but they serve different purposes. Here’s a breakdown of each:

# Parameters
---> Definition: Parameters are the named variables in a function definition that act as placeholders for values the function will receive when it is called.
---> Purpose: They allow functions to be flexible and work with different values each time they're called.

Example

function greet(name) {  // `name` is the parameter
    console.log("Hello, " + name + "!");
}

# Arguments

---> Definition: Arguments are the actual values passed to the function when it is called, corresponding to the function's parameters.
---> Purpose: Arguments provide the data that functions operate on.

Example 
greet("Alice"); // `Alice` is the argument

Here, "Alice" is the argument, which will replace the name parameter inside the function body when greet is called.

Multiple Parameters and Arguments: Functions can take multiple parameters, separated by commas, and you can pass multiple arguments accordingly.

Default Parameters: You can set default values for parameters, so if an argument is missing, the function will use the default.
 example
 function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greet(); // Output: "Hello, Guest!"


# Argument Mismatches: If you pass fewer arguments than parameters, the remaining parameters will be undefined. If you pass more arguments than parameters, the extras are ignored unless the function uses the arguments object or rest parameters.

# Arguments Object

Inside regular (non-arrow) functions, arguments is an array-like object that holds all arguments passed to the function, regardless of the number of parameters.
function printAll() {
    console.log(arguments); // logs all arguments passed in
}
printAll(1, 2, 3); // Output: [1, 2, 3]

# Rest Parameters

To handle a variable number of arguments, you can use rest parameters, which gather all extra arguments into an array.
function multiply(multiplier, ...numbers) {
    return numbers.map(number => number * multiplier);
}
console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]



# Type Of functions

# 1 Named Function
Named function is the function that we define it in the code and then call it whenever we need it by.
Named function are useful if we need to call a function many times to pass different values to iy or runit sevral times.
Example 
function isEven(num) {
  if (num % 2 === 0) {
    console.log(`Yes ${num} is a Even Number `);
  } else {
    console.log(`No ${num} is not Even Number`);
  }

  return 0;
}

console.log(isEven(3));

# 2 Anonymous Function

The anonymous functions dont have name they need to be tied to something: variable or an event to run.
Example 
let sum = function(a ,b){
    return a + b
}

console.log(sum(2,4))

# 3 Arrow Function
In ES6 arrow function provide a shorthand synatx for defining function
Here we do not use the function keyword and use the arrow symbol for defining function.
Example
let Addition = (a ,b) =>{
    return a + b
}
console.log(Addition(45,45))

// Arrow function with implicit return 

const min = (a,b) => a -b ;

console.log(min(45 ,30))


# 4 Immidiately invoke function expression (IIFE)
IIFE are functions that are executed immediately upon definitaion
They helps create private scopes and module pattrens prevebting variables from leaking into the global scope

(
    function (){
        console.log("IIFE function executed 1")
    }
) (); // while write this function u have to close this with semicolen 

(
    ()=>{
        console.log("IIFE function executed 2")
    }
) ();

# Higher-Order Function
functions that accept other functions as arguments or return function its called as higher-order function
some examples of higher oreder function are map(),filter(),reduce()

let number = [1,2,3,4,5]
 const doubleNumbers = number.map(function(number){
    return number * 2 ;
 })

 console.log(number)
 console.log(doubleNumbers)

 # Callback functions
 finction passed as argument to other functions its called as callback functions
 commonly used in asychronous operations.
 function greet(name, callback) {
  console.log("Hi" + " " + name);

  callback();
}

//callback function

function callMe(){
    console.log('I am callback function')
}

// passing function as argument
greet('Master Ravi' , callMe)

# Generator function 
functions that can be pasued and resumed using the function syntax and yield keyword 

function* generateSequence (){
    yield 1
    yield 2
    yield 3
}

const generator = generateSequence ()

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

# Async function
finction that return a promise and used await to pause execution until the promise is resolved

async function fetchData() {
    let data = await fetch ('https://jsonplaceholder.typicode.com/todos')
    data = await data.json()
    return data ;

}

fetchData().then(data => {
    console.log(data)
})