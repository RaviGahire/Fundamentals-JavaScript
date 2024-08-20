// Remainder operator example 
let Remainder_Value_1= 11
let Remainder_Value_2 = 2
 
remainder = Remainder_Value_1 % Remainder_Value_2 

console.log( "Remainder Value is-->", remainder )

//Exponentiation operator calculate the the power of given numbers.


 let Exponentiation_Value_1 = 5 
 let Exponentiation_Value_2 = 2

 result = Exponentiation_Value_1 ** Exponentiation_Value_2
 
 console.log( "Exponentiation Value is-->" , result);

 // Old method to calculate power 
 console.log("This old method for calculate power in Js " , Math.pow( 2 , 4))

// we can use this sqrt function for square-root 
    console.log(Math.sqrt(16))

// Math.floor this is just remove decimal value after given number 

let floor_value = 22.225
 
console.log("Math.floor Example ", Math.floor(floor_value));


// Math.round this is used for round the given number 
 

let roundValue = 5.99

console.log("Math.round example--->" , Math.round(roundValue))

// Math.ceil This is used for next closest number after decimal see the example for better understanding 

let ceilValue = 2.01

console.log("Math.ceil Example --->" ,Math.ceil(ceilValue))

// Math.random give us random number value 

let randomNumbers = Math.random();
console.log("Math.random example --->",randomNumbers)

let randomNumbers2 = Math.random() * 10; // its give us on 0 to. close to 10 but not give us 10 
console.log("Math.random example --->",randomNumbers2)

console.log("Math.random second example ", Math.floor(Math.random () * 10) )


// assignment 1 
// write program between 10 to 20 show random numbers using Math.floor and Math.random 

let minNumber = 10;
let maxNumber = 20;

console.log("Random number between 10 and 20",Math.floor(Math.random() * ( maxNumber - minNumber) + minNumber ))