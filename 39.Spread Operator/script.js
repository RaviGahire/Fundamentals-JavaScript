
// example

// normally we used to concat array use concat num1.concat(num2)

const num1 = [1,2,3,4,5]

const num2 = [6,7,8,9,0]

// we use concat like the follwing example

let joinedArray = num1.concat(num2) // we normally doing the for joine 2 arrays

console.log(joinedArray) // output is [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// how we use spread operator for concatination two arrays 

// let  join = (...num1,...num2) we dont use this bracket() for the jion 2 arrays 

let  join = [...num1,...num2] //we use this bracket [...,...] for the jion 2 arrays
console.log(join)  // output is [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// we can use spread operator to string also

let string = 'language'

let spreadString = [...string]

console.log(spreadString)

//IMP spread op not copy nexted object properly 

// example of object

// Here we create object and that object have some key values 
const user = {

    name: 'ravi gahire',
    age : 28,
  

}

// here is we create one empty object and copying the above object in this empty object

const updatedUser = {...user, city: 'Pune'} // we can add value like in this object city: 'Pune'

console.log(updatedUser)

// how we use the spread op in function

/*
steps 
 1.we create one array 
2. we create one add function
3. then we defined one variable in function sum
4. then we using for loop to itrate over the arguments keyword as we know argument keyword have length property
5. then we write logic for addition
6. then we return the sum veriable 
7. then we call the function passing the array using spread op.
*/

const myArray1 = [ 1,2,3,4,5,]
const myArray2 = [6,7,8,9,10]
const jionedarray = [...myArray1,...myArray2]


function add (){
    let sum = 0

    for(let i = 0 ; i < arguments.length ; i++){

        sum = sum + arguments[i]

    }

    return sum

}

console.log(add(...jionedarray))
console.log(add(string)) // output is 0language zero come from the initial value of sum

//IMP we cant spread normal object in fuction  we only spread string and numbers not an objetcs 

// console.log(add(...user)) we cant do like this 