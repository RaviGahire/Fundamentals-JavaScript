//Ternary Operator
let Num1  = 5 > 2 ? "Yes" : 'No'
console.log(" 5 is greater than 2", Num1);
let Num2  = 5 > 12 ? "Yes" : 'No'
console.log(" 5 is greater than 12", Num2);


let gender = 'f'
let message = `${gender.toLocaleLowerCase()=== 'f' ? 'She' : 'He'} is college student`
console.log(message);

//using truthy and falsy values.


let message3 = `${ 1 ? 'She' : 'He'} is college student` //Here is 1 is truthy value so output is she
console.log(message3);

let message4 = `${ 0 ? 'She' : 'He'} is college student` //Here is 0 is falsy value so output is He
console.log(message4)

// Optional 

let x = 1 ? 'Ravi' : 25 ? 'Shubham' : 26;
console.log(x);

let y = 0 ? 'Ravi' : 25 ? 'Shubham' : 26;
console.log(y)