// In this funcion we pass only two parameters in that function 
// but if we pass the n.. number of arguments in the function then also fucntion arguments not ignore them 


function add (a ,b){

    console.log(arguments)
    return a + b

}

add(2,5)


// here is we pass the multiple arguments in the function but we pass the only two parametrs a and b  
// But argument key word not ignore the all agruments in console we see all arguments when we console the arguments keyword.
// Argument is array like object tructure
// we can acess the arguments using index[0]

function demo(a, b){
    console.log(arguments)
}

demo(1,2,3,4,5,6) 



// Here is we are doing sum of all the arguments using for loop 
// In argument keyword have lenght property so we loop over the that length

function sum(){
let x = 0
 for( i = 0 ; i < arguments.length; i++){

    x = x + arguments[i]
 }

 return x


}
console.log( sum(2,2,2,2,2,1,1,1,1,1,1))



