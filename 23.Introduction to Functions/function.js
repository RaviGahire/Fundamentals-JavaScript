// Here we are creating function

function Myintro(username) {
  // when u pass only one parameter that time only one value funaction take
  console.log(
    `Hi my name ${username} I am working professional I have more then two years expriance`
  );
}
Myintro("Ravi", "Rahul"); //Rahul is ignored by function.

function My_intro(username, lastname) {
  // when u pass only one parameter that time only one value funaction take
  console.log(
    `Hi my name ${username} ${lastname}I am working professional I have more then two years expriance`
  );
}
My_intro("Ravi", "Gahire, ");

//  Deafault parameters

function My_intro(username = "U not pass any value") {
  // when u pass only one parameter that time only one value funaction take
  console.log(
    `Hi my name ${username}I am working professional I have more then two years expriance`
  );
}
My_intro(); // when we user not pass any value to function that time deafault parameters we set show result
// default parameters introduce in 2015..

// 1 Named Function
// example

function isEven(num) {
  if (num % 2 === 0) {
    console.log(`Yes ${num} is a Even Number `);
  } else {
    console.log(`No ${num} is not Even Number`);
  }

  return 0;
}

console.log(isEven(3));

// 2 Anonymous Function

let sum = function (a, b) {
  return a + b;
};

console.log(sum(2, 4));

// # 3 Arrow Function

let Addition = (a, b) => {
  return a + b;
};
console.log(Addition(45, 45));

// Arrow function with implicit return

const min = (a, b) => a - b;

console.log(min(45, 30));

// Immidiately invoke function expression (IIFE)
(function () {
  console.log("IIFE function executed 1");
})(); // while write this function u have to close this with semicolen

(() => {
  console.log("IIFE function executed 2");
})();

// Higher-Order Function

let number = [1, 2, 3, 4, 5];
const doubleNumbers = number.map(function (number) {
  return number * 2;
});

console.log(number);
console.log(doubleNumbers);

// Callback functions
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

// Generator function 

function* generateSequence (){
    yield 1
    yield 2
    yield 3
}

const generator = generateSequence ()

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// Async function
async function fetchData() {
    let data = await fetch ('https://jsonplaceholder.typicode.com/todos')
    data = await data.json()
    return data ;

}

fetchData().then(data => {
    console.log(data)
})