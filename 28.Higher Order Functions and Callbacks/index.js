
function A (B){

console.log(typeof B)

console.log(B)

}

A('Hi') //string
A({name:'ravi',work:'webdev'}) //object
A([1,2,3]) // As we know behinde the sence array also object in JS.

// how to prove function also object in js 
console.dir (A)
A.num = 45
console.log(A)

console.log("===============================================================")
// Higher order functin 
function a (b){
    console.log(b)

    b()
}


function hello (){
    console.log
}
// we here calling a fucntion 
a(hello)

a(function () {
    console.log('i am anonymuse function')
})

//==================================================================

// some Higher order functions examples.

// call back fucction

function callBackFunc(){
console.log('Hello i am call back finction')
}

// this is a higher order function
// we pasing a parameret in its
function higherOrderFunc(a){

    console.log("Hello i am higher order function ")

    a ()
}

//Now Here we can pass the higher order funcion one argument is call back function.

higherOrderFunc(callBackFunc)

//In the above code higherOrderFunction() is an HOF because we are passing a callback function as a parameter to it.