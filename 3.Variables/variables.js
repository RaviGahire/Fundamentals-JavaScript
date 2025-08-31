
// using string data type 
// varibale keyword  location = value ;
let myName = "ravi";

// using number data type
let age = 28;
// using boolean data type 
let isHappy = true;

const myIntro = 'Hi , i am' + ' ' + myName + ' ' + 'and my age is' + ' ' + age + ' ' + 'and i am boy' + ' ' + isHappy


// Practice

// Using var


/*
this variable we declared in gloable scope so we can access this in 
anywhere in our code its possible beacuse of it an in gloable scope
*/
var a = 20;
a = 30 // We can reassigne the the value when we declare the variable using var

function num() {
    // console.log(a)
}
num()

/*
Here we can see when we declare the varibale using var 
inside function its not be acessed outside of the function
its showing error ReferenceError: b is not defined

*/
function scope() {
    var b = 10
    return b
}

const returnValue = scope()
// console.log(returnValue)
//console.log(b) // Here we trying to access the b varibale ReferenceError: b is not defined

// Let 

/*
When we declare variable using let in globle scope we can 
access that variable in function and we can reassingne the value also

*/
let newValue = 20
newValue = 30 // reassigne the value 
function func1() {
    console.log(newValue)
    // return newValue

}
// func1()


// When we decalre variable in in one block using let its cannot be accsisable outside of that block
{
    let blockValue = 10

}
//console.log(blockValue);

//Const

/*
when we declare variable using const we cannot reassinge the value and its also block scoped 

*/
{const conValue = 10}
const conValue = 10
//conValue = 20 //Assignment to constant variable
function constant() {
    console.log(conValue)
}
// constant()



// Variable Hoisting 
var hoistValue; 
console.log(hoistValue) 
hoistValue = 20