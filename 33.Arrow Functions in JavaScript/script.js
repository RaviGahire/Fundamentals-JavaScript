// How we declared function

// frist function declaration
 function square (num){
    return num * num
 }

 console.log('This is a function declarion example',square(5));

 // second function expression
// this function cant be hoisted as normal function we cant call this function befor declartion.
 const add = function (num){
    return num + num

 }

 console.log('This is a function expression example',add(5));


 // Arrow function

 let sub = (num1,num2) => { return num1 - num2}

 console.log('This is a function arrow example',sub(5,10));

 // feauter of arrow function wthout using return key word.
 //This actaully call a implicite return 
 // implicit return means automatic return

 let firstFunc = (num) => num * num // this also work same as the above arrow function we not use return key word here.
 let secondFunc = num => num * num // if there is one parameter so we not use the brackets. we use barcket for more then one parameter.
 

// How its work with objects let see
// const obj2 = ()=>  {Name:'ravi'} we cannot return object like this we have to use following two methods 
const obj1 = ()=> {return {Name:'ravi'}}
const obj2 = ()=> ( {Name:'ravi'})
console.log(obj1())
console.log(obj1())