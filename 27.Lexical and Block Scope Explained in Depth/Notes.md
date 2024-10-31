# Lexical and Block Scope Explained in Depth 
(https://youtu.be/dvNqTN_nokg?si=SRlEmUwVbWy47dC4)
 

Lexical scope and block scope are important concepts in JavaScript that define how variable accessibility is determined based on where they are declared in the code.

 # Lexical Scope
 Lexical scope refers to the visibility of variables based on their physical location within the source code. In other words, a function’s scope is determined by its location in the code, and nested functions have access to variables from their parent scopes.

 Functions can access variables defined in their own scope, in their parent scope, and in the global scope.
Variables are resolved in the order they are declared (the "lexical" structure).
Lexical scope is determined at the time of writing the code, not at runtime.

const outerVariable = 'I am outside!';

function outerFunction() {
    const innerVariable = 'I am inside!';
    
    function innerFunction() {
        console.log(outerVariable); // Accessible: 'I am outside!'
        console.log(innerVariable);  // Accessible: 'I am inside!'
    }
    
    innerFunction();
}

outerFunction();

innerFunction can access both outerVariable and innerVariable due to lexical scope, as it is nested inside outerFunction.

# Block Scope
Block scope is a scope that is created when a block (denoted by {}) is defined, such as in if statements, loops, or any other code blocks. Variables declared with let and const are block-scoped, meaning they are only accessible within the block they are defined in.

Variables declared with var are function-scoped or globally scoped, not block-scoped.
Variables declared with let and const are only accessible within the block they are declared in, including any nested blocks.
Block scope helps to limit the visibility of variables, preventing them from being accessible outside of their intended context.

if (true) {
    let blockScopedVariable = 'I am block scoped!';
    var functionScopedVariable = 'I am function scoped!';
}

console.log(functionScopedVariable); // Output: 'I am function scoped!'
console.log(blockScopedVariable);    // ReferenceError: blockScopedVariable is not defined

blockScopedVariable cannot be accessed outside the if block, resulting in a ReferenceError.
functionScopedVariable, declared with var, is accessible outside the block because it is function-scoped.

Lexical Scope:

Determined by the physical placement of variables and functions in the source code.
Functions can access variables from their parent scopes and the global scope.
Scoping is static and determined during code writing.
Block Scope:

Created by block statements (e.g., if, for, etc.).
Variables declared with let and const are only accessible within the block they are defined.
Helps prevent naming conflicts and unintended variable access.