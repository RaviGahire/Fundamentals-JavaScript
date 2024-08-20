// Number examples of number data types 
const num = 10
const numUsing_point = 10.5;
const num_usin_min = -10;

console.log("This num = 10;", typeof num);
console.log("This numUsing_point = 10.5;", typeof numUsing_point);
console.log("This num_usin_min = -10;", typeof numUsing_point);

// Example of String data type.

const str1 = 'Hello this string example '
console.log(str1, typeof str1);


// we can write string in this way aslo for use of double quet or single quet 

const str2 = "This is also string 'hello '"
const str3 = 'hello is alos "string " hello'
console.log(str2, str3)

// for creating empty string we can define like this 
let str4 = " " // in js using double quotes this is also consider as string 
let str5 = ' ' // in js using single quotes this is also consider as string 
let str6 = ` ` // in js using backticks this is also consider as string 
console.log("using double quotes", typeof str4)
console.log('using single quotes ', typeof str5)
console.log(`using backticks`, typeof str6)

// 

// const str7 = "hello my name 
// is ravi"

// const str8 = 'hello my name 
// is ravi'

const str9 = `hello
my  
name
is
ravi`
console.log(str9)

// Boolean 

console.log('This is a boolean false value' ,+false);
console.log('This is a boolean true value' ,+true);