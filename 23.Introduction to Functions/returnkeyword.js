// using return key word we can return anything
// we can pass the two expressiong in argument

function add(a, b) {
  return a + b;
}

const sum = add(5 + 4, 5 - 5);
console.log(sum);

const obj = {
  name: "ravi",
  age: 28,
  emailID:'ravigahire@gmail.com'
};

/* 
The return keyword in JavaScript is used 
in a function to send a value back to where the function was called. 
When a function encounters return, it stops running further code within the 
function and "returns" the specified value or result.*/

//Ends Function Execution: When return is called, the function stops executing any code that follows.
//Returns a Value: The value specified after return is sent back to the function's caller. If no value is provided, it returns undefined by default.
//Useful in Conditional Statements: You can use return to exit a function early if a certain condition is met.


function addition(a, b){
    return a + b  
}

let result = addition(addition(5,5),addition(10,10))
console.log(result)