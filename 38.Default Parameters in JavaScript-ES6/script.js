// the following function is normal function.
// here is passing two para and multipy them


function multi(a, b) {
  return a * b;
}

console.log(multi(2, 2));

// Second example we are passing two params but in function argumet we are pass the one argumet is 2
/*
So in this senario we get output is NaN not a number but why this happened  
beacasue of we pass only one argumet but function have a two params one is A and second is B
so, that one agrument is 2 but there is not second arument so bydefault js set a second params as undefined 
(2 * undefined ) is a not an number NaN

we can set params value a = 0 like this 
*/

function multiply1(a, b) {
  return a * b;
  debugger;
}

console.log(multiply1(2));

/*
in the following example we are setting default params value l
so we not get NaN output 

IMP default params only applay when u dont pass anything or any value in the argument
we can set a parans as true false undefined null like this

if we pass the undifined in the argument then function not take it the undefined value
but idf we pass the null true or anything then params take it as the value of that argument 

*/
function multiply2(a, b = 0) {
  return a * b;
  debugger;
}

console.log(multiply2(5));

// Dies game roll example

function roll(DiesSides = 9 ) {
  
  return  Math.floor(Math.random () * DiesSides ) + 1;
}

console.log(roll(8))
