# Acutllay hosting is not presnt in JS it just presnrt as hoisting declartion in Js.

In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their scope before the code executes. This means that you can use variables and functions before you declare them in the code, although this comes with some caveats.

# Function Hoisting

In JavaScript, function declarations are fully hoisted to the top of their scope. This means you can call a function before it is defined.

Example

sayHello(); // Output: "Hello!"

function sayHello() {
  console.log("Hello!");
}

# Variable Hoisting

Variables declared with var are also hoisted, but only their declaration is hoisted, not their initialization. Variables declared with let and const are also hoisted but behave differently due to temporal dead zone (TDZ).

# var Hoisting
When you declare a variable with var, it’s hoisted but initialized as undefined until its line of assignment is reached.

console.log(name); // Output: undefined
var name = "John";
console.log(name); // Output: "John"

In this case, var name is hoisted to the top, but it is initialized as undefined, which is why the first console.log(name) doesn’t throw an error.

# let and const Hoisting    
Variables declared with let and const are hoisted, but they are not initialized. Accessing them before their declaration results in a ReferenceError due to the TDZ.

console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;

Function Declarations: Fully hoisted and can be used before they are defined.
var Variables: Hoisted and initialized as undefined.
let and const Variables: Hoisted but not initialized; accessing them before declaration leads to a ReferenceError.


In JavaScript, function declarations and function expressions are two ways of defining functions, but they differ in their syntax and how they behave, especially regarding hoisting.

# IMP both Function Declarations Function Expressions. comes under function defination.

# Key Differences Between Function Declarations and Function Expressions.

Hoisting: Function declarations are hoisted, so they can be called before they are defined. Function expressions are not hoisted, so they can only be called after they are defined.
Syntax: Function declarations use the function keyword followed by a name, while function expressions typically assign a function to a variable.
Use Case: Function expressions are useful when you want to create an anonymous function or a function that behaves like a "callback" (e.g., in event listeners or array methods like .map()).


An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It’s often used to create a private scope for variables and functions, preventing them from polluting the global scope.

Syntax of an IIFE
The typical syntax for an IIFE involves wrapping a function in parentheses and immediately invoking it with ():

(function() {
    // code to be executed immediately
})();
