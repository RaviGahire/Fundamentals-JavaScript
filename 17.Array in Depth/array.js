
// How to create array 
//IMP if you pass diferent data types you have to use object dont use array array is prefered for same data types.
//example 
const deferrentDataTypes = [12 ,'ravi',null,undefined,{ object: 'object'},true] // you can pass the diferent data types in array.




const fruits = ['Apple' , 'mango' ,'papaya'];
console.log(fruits);

//How to update array value or add value 
fruits[2] = 'orange'// here is we are update 2 index of array with orange fruite name.
console.log(fruits)

fruits[3] = 'water melon'
console.log(fruits)

console.log(fruits.length) // here is we checking length of array


// below we are trying to add element on index 10 see what happen

fruits[10] = 'grapes' // here is we add grapes on index 10
console.log(fruits) // out put ['Apple', 'mango', 'orange', 'water melon', empty × 6, 'grapes'] 
// its means 6 element are empty / undefined. here we can add element but other reamianing index are empty
 //there is no limit u can add any element on any index 


// how can we added value in last index lets see 

fruits[fruits.length] = 'blueberry'// on using this method we can always add element in last index
fruits.push('redberry');// this method we mostly used for add elements in array.in last index.
// using push() method we can add multiple values in at time 

// Exmaple 

fruits.push('1','2',121,true); // like this  



 const rainbowColors = ['red','orange','yellow','green','blue','indigo','violet'];

//Now here is we start the remove element from given array.

// We can use pop() method to remove a element from array pop() method always remove element from last index.

// Example 

rainbowColors.pop() // here we dont need to pass any thing its automaticaly remove last element from the given array

console.log(rainbowColors); // here we can see  this output violet color removed from array ['red', 'orange', 'yellow', 'green', 'blue', 'indigo']


// In belowed example we can add keyvalue pair in it we know array alos abject in JS

// const newArray = [firstName : 'ravi'] // we can do this to add key value pair in array

// IMP we dont do like this because array not craeted for do this insted we use object fro this 

const newArray = [] // its empty array

newArray.firstName = 'ravi'

console.log(newArray) // here is out put is [firstName: 'ravi'] firstName key is added 


