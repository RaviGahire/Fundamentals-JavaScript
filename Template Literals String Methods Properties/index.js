// console.log('Template Literals | String Methods & Properties');


const myText = 'string methods';
const index = myText ;
// index and length
console.log('Character Index  =', index [5] , index.length);


// String methods


console.log('This Result using toUpperCase method ',myText.toUpperCase())
console.log('This Result using toLowerCase method ',myText.toLowerCase()) 


// Using trim method 
const newText = "         This is a trim method example         "


console.log('Actual String ',newText);

console.log('Using trim method ',newText.trim());

// This is a string chaining example
console.log('String chaining example ', newText.trim().toUpperCase().toLowerCase().toUpperCase());

// trim start example 

console.log('This is a trim start string method example ' , newText.trimStart());
console.log('This is a trim end string method example ' , newText.trimEnd());


// String methods using argument

const myStr = "Hi, I am Ravi "

// Using include method 

console.log(myStr.includes('Hi')) // Out put is true because of Hi is present the in the given string. 
console.log(myStr.includes('hi')) // Out put is false because of hi is not present the in the given string.
console.log(myStr.includes(',')) // Out put is true because of , is present the in the given string.


// indexOf method example 

const A_string = "Hello, i am ChatGpt"
console.log(A_string.indexOf('i')); // output is 7 because of i is present in a given string 
console.log(A_string.indexOf('c')); //output -1 because of small c character not present in this string. indexof also case sensitive.
console.log(A_string.indexOf('am')); // output is 9 because of i is present in a given string.but start the indexing from 9 thats why out but is 9  

// replace method example 

const replaceStr = "Hello , I am Ravi Gahire";

console.log(replaceStr.replace('Hello' , 'Hi')); // Output is a change the Hello in to Hi -- This also case sensitive  
console.log(replaceStr.replace('hello','hi')) // output is a nothing show in console because this case sensitive
console.log(replaceStr.replace('R' , '4')) ; // output is change the R character in to given number.
console.log(replaceStr.replace('e','E')) // out put is change the only first e in capital E other is remain the same so what can we do the all e want to change it. so we use replace all method.


// replaceAll method example 

console.log(replaceStr.replaceAll('i' , 'I')); //out put is all small i are replaced by the capital I. 
console.log(replaceStr.replaceAll('e' , 'E')); //out put is all small e are replaced by the capital E. 
console.log(replaceStr.replaceAll('Hello' , 'E')); //out put is all Hello are replaced by the capital E. 
console.log(replaceStr.replaceAll('Am' , 'E')); //out put is nothing case sensitive

// concat method example 

const add1 ="Hello"
const add2 ="I am Ravi"

console.log(add1.concat(' ' ,add2))// this also work in concat 
console.log(add1+ ' ,'+add2)// using plus + operator 

// padStart() method example 
 //----> padstart method calculate whole string including the string value also same as padEnd.
const number = "2587"

console.log(number.padStart(10, "*")); // output is ******2587 You can put any character or symbol as you want to show before the given string.

console.log(number.padEnd(10, "*")); // out put is 2587****** 

let message = "Hello";
console.log(message.padStart(5, "Welcome"));  // Output: "Hello"

// In this case, "Hello" is already longer than targetLength, so no padding is added.