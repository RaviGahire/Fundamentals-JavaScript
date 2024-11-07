console.log('Lexical and Block Scope Explained in Depth')


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


if (true) {
    let blockScopedVariable = 'I am block scoped!';
    var functionScopedVariable = 'I am function scoped!';
}

console.log(functionScopedVariable); // Output: 'I am function scoped!'
console.log(blockScopedVariable);    // ReferenceError: blockScopedVariable is not defined
