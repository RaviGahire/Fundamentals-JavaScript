console.log("Returning Functions with Closures ");

let a = 5;
let b = 10;

function add() {
  return a + b;
}

console.log(add); // When we do this so console.log give us a whole function
console.log(add()); // If we do this so we get result
console.dir(add); // if we call function using dir so we get all info about that function.

// ============================================================

// When we do the follwing technic that time parent function became a child function
// when we call parent and we return the child function in it so parent became a whole child function

function parent() {
  function child() {
    console.log("Hey i am child fuction");
  }

  return child;
}

// following is the result of the parent function

// parent()
// ƒ child (){
//         console.log('Hey i am child fuction')
//     }

// closure ================

// what is closure...when u use the parent function variables in child function and we return the child function throught the parent function
//so that time not only the child function return its return the we use all variables of parent function also

function home() {
  let a = 5;

  let b = 10;

  function rooms() {
    console.log(a + b);
  }

  return rooms;
}

console.dir(home());
