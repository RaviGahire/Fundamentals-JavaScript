// imp Rest Parameters must be in last in the code we cand defined like theis func(...abc,x,y,z) this is wrong we can nto pass like this
function add(...nums) {
  // here we pass infinity arguments Rest Parameters take that and return us in array.
  console.log(nums);

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }

  return sum;
}

// ==============

function abc() {
  // If we pass the ... here is called as a Rest Parameters and here collect the that values
}

abc(); // when we pass the values or any thing here its called as spread operator Here spread the value a

///==============

const arr1 = [1, 2, 3, 4];

function xyz(a, b, ...nums) {
  console.log(nums);
}

xyz(...arr1); // output is [3, 4] why this happen becuse of we pass the params a b in the function params 1 and 2 is allocated to the a and b and rest 3 and 4 is take by rest params.

///======================================

const arr2 = [1, 2, 3, 4];
// here is we pass a,b,c so 1,2,3 goes in abc and rest is 4 goes in values
function myfunc(a, b, c, ...values) {
  console.log(values);
}
myfunc(...arr2, 5, 6, 7, 8, 9); // here only 4 is in values and now we pass 5 to 9 its goes in values

//==============exc====

const arr3 = [1, 2, 3, 4, 4588, 54, 487, 456];

function func() {
  return [...arguments].reduce((acc, curr) => acc + curr);
}

function func() {
  return Array.from(arguments).reduce((acc, curr) => acc + curr);
}

function func(...nums) {
  return nums.reduce((acc, curr) => acc + curr);
  // return [...arguments].reduce((acc,curr)=> acc + curr)

  // return Array.from(arguments).reduce((acc,curr)=> acc + curr)
}

let result = func(...arr3);
console.log(result);
