// some Higher order functions examples.

// call back fucction

function callBackFunc() {
  console.log("Hello i am call back finction");
}

// this is a higher order function
// we pasing a parameret in its
function higherOrderFunc(a) {
  console.log("Hello i am higher order function ");

  a();
}

//Now Here we can pass the higher order funcion one argument is call back function.

// higherOrderFunc(callBackFunc);

//In the above code higherOrderFunction() is an HOF because we are passing a
//callback function as a parameter to it.

// Calculates the area and diameter of a circle

const radius = [20,40,50];

// logic to clculate area
const area = function (radius) {
  return Math.PI * radius * radius;
};

// logic to calculate diameter
const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const outPut = [];

  for (let i = 0; i < radius.length; i++) {
    outPut.push(logic(radius[i]));
  }

  return outPut;
};

console.log(calculate(100, 40));
// console.log(calculate(radius, diameter));
