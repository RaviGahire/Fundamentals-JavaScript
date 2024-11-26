// The forEach method is a built-in JavaScript function used to iterate over the elements of an array and execute a provided function once for each array element. 
// It is a simpler alternative to for loops when working with arrays.

/*
Parameters:
callback: A function that is executed for each element in the array. It takes three arguments:
currentValue: The current element being processed.
index (optional): The index of the current element.
array (optional): The array that forEach is being applied to.
thisArg (optional): A value to use as this when executing the callback function.
Key Points:
forEach does not return a value (undefined).
It cannot be used with break or continue statements; if you need those, use a regular for or for...of loop.
It iterates over all array elements, including those that are undefined.
*/ 
const month = ['Jan','Feb','Mar','Apr','May'];
month.forEach(( month,index)=>{
    console.log('forEach result:-->',index,month)
})


/*
The map method in JavaScript creates a new array by applying a provided function to every element of the original array. 
It's particularly useful when you want to transform an array's elements without modifying the original array.

Parameters:
callback: A function that is called for every element in the array. It takes three arguments:
currentValue: The current element being processed.
index (optional): The index of the current element.
array (optional): The array being processed.
thisArg (optional): A value to use as this when executing the callback function.
Key Points:
map always returns a new array without altering the original array.
The length of the returned array is the same as the original array.
It’s commonly used for transforming data or mapping values.

*/ 


// Map is give us a new array 
// Map method have return value its not like foreach method 
// In both method have index value 
let capitalmonths = month.map((month , index)=>{
    console.log('Map result:-->',index,month )
    return month.toUpperCase()
})

console.log(capitalmonths)



// Differences Between forEach and map


// Feature	  forEach                  	              map
// Return     Value-undefined	                      A new array
// Purpose	  For side effects (e.g., logging)	      For transforming array elements
// Chainable  No	                                      Yes


// When working on your portfolio web app, 
// map can be helpful for rendering dynamic content like lists or UI components in React. For example:

// const items = ['Home', 'About', 'Contact'];

// const navLinks = items.map((item, index) =>{
//     <li key={index}>{item}</li>
// } );



//filter method 
/*
The filter method in JavaScript creates a new array containing all elements of the original array that satisfy a given condition. 
It's commonly used to remove unwanted elements or extract a subset of an array based on specific criteria.

filter is perfect when you need to extract or exclude specific elements based on conditions
Parameters:
callback: A function that is called for every element in the array. It returns true to keep the element and false to exclude it. The callback takes three arguments:
currentValue: The current element being processed.
index (optional): The index of the current element.
array (optional): The array being processed.
thisArg (optional): A value to use as this when executing the callback function.
Key Points:
Returns a new array with elements that pass the test implemented by the callback.
The original array is not modified.
If no elements satisfy the condition, it returns an empty array.

*/
//const newArray = array.filter(callback(currentValue, index, array), thisArg);

/**/ 

const words = ['apple', 'bat', 'cat', 'dolphin'];

const longWords = words.filter((word) => word.length > 3);

console.log(longWords); // ['apple', 'dolphin']


const filteredWithChar = words.filter((word)=>{
    console.log(word,word.toLocaleLowerCase().includes('a'))// here we printing condtions ture and false

    //here we difining condtion

    return word.toLocaleLowerCase().includes('a')
})

console.log('filteredWithChar',filteredWithChar)

//Example 6: Chaining filter with Other Methods
//filter works well with map and other array methods for more complex operations.

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 800 }
  ];
  
  const affordableProducts = products
    .filter((product) => product.price < 900) // Filter by price
    .map((product) => product.name); // Extract product names
  
  console.log(affordableProducts); // ['Phone', 'Tablet']
  
//   Difference Between filter and map:


// Feature	filter	map
// Purpose	Selects elements that meet a condition	Transforms each element
// Output Length	Varies (depends on the condition)	Always same as input length
// Returns	Subset of the array	A new array of transformed items



console.log('======================================Reduce=======================================================')

/*
The reduce method in JavaScript is used to apply a callback function to an array, reducing it to a single value. 
It's commonly used for operations like summing all elements, flattening arrays, or accumulating complex values.
Syntax:
const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
Parameters:
callback: A function executed on each element, which takes these arguments:

accumulator: The value returned from the previous iteration (or initialValue on the first iteration).
currentValue: The current element being processed.
index (optional): The index of the current element.
array (optional): The array reduce is being called on.
initialValue (optional): The starting value of the accumulator. If omitted, the first array element is used as the initial value, and the iteration starts from the second element.


*/