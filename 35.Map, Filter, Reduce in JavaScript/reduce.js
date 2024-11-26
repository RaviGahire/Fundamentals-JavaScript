/*
The reduce method in JavaScript is a powerful array function used to reduce an array to a single 
value by iteratively applying a callback function to each element of the array.

syntax :

array.reduce((accumulator , currentValue , index,array)=>
    {
    

},0 );// here we can give any value for start index 0 to last value we can give here any value string also 
0 is accumulator starting value its work like loop when u give 10 the accumulator start from 10 
if u not give any value then accumulator take from frist value from given array 

Parameters:
callback: A function that executes for each element in the array. It takes the following arguments:

accumulator (required): The accumulated result of the previous callback execution.
currentValue (required): The current element being processed.
currentIndex (optional): The index of the current element.
array (optional): The original array.
initialValue (optional): The initial value to use as the accumulator. If not provided, the first element of the array is used, and the iteration starts from the second element.


*/ 





//what is reduce method work if there in array have some number so the rudece method combine that all number in one number

const numbers = [1,2,3,4,5,6,7]


//In rudece method frist parameter is accume

numbers.reduce((accumletter , number , index)=>{

   console.log(number)

   return accumletter + number

},0)// 0 is a accumulator value 

// IMP at the end ruduce give us a accumulator value 