# https://youtu.be/7QhMQRRBpZ0?si=ulmZGA53mp5SdBGk must watch.

In JavaScript, scope refers to the accessibility of variables, functions, and objects in different parts of the code. Let's look at two key types of scopes: global scope and script scope

# Global Scope
The global scope is the outermost scope in JavaScript. Variables, functions, and objects defined in the global scope are accessible throughout the code, both inside and outside functions or blocks.

A variable is in the global scope if it is declared outside any function or block.

In browsers, the window object acts as the global object, meaning any global variable or function becomes a property of window.

Global variables can lead to naming conflicts and memory leaks if used excessively, as they remain accessible throughout the entire program.

In JavaScript, scope refers to the accessibility of variables, functions, and objects in different parts of the code. Let's look at two key types of scopes: global scope and script scope.

1. Global Scope
The global scope is the outermost scope in JavaScript. Variables, functions, and objects defined in the global scope are accessible throughout the code, both inside and outside functions or blocks.

Key Points:
A variable is in the global scope if it is declared outside any function or block.
In browsers, the window object acts as the global object, meaning any global variable or function becomes a property of window.
Global variables can lead to naming conflicts and memory leaks if used excessively, as they remain accessible throughout the entire program.
Example:
javascript
Copy code
var globalVar = "I'm in the global scope";

function display() {
    console.log(globalVar); // Accessible here
}

display(); // Output: "I'm in the global scope"
console.log(globalVar); // Accessible here too

Since globalVar is defined outside any function, it’s globally accessible.

#  Script Scope
In  Script Scope we only show let and const keyword for used to defined variables.
