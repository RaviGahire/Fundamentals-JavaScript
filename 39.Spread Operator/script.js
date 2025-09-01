
// example

// normally we used to concat array use concat num1.concat(num2)

const num1 = [1, 2, 3, 4, 5]

const num2 = [6, 7, 8, 9, 0]

// we use concat like the follwing example

let joinedArray = num1.concat(num2) // we normally doing the for joine 2 arrays

console.log(joinedArray) // output is [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// how we use spread operator for concatination two arrays 

// let  join = (...num1,...num2) we dont use this bracket() for the jion 2 arrays 

let join = [...num1, ...num2] //we use this bracket [...,...] for the jion 2 arrays
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
    age: 28,


}

// here is we create one empty object and copying the above object in this empty object

const updatedUser = { ...user, city: 'Pune' } // we can add value like in this object city: 'Pune'

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

const myArray1 = [1, 2, 3, 4, 5,]
const myArray2 = [6, 7, 8, 9, 10]
const jionedarray = [...myArray1, ...myArray2]


function add() {
    let sum = 0

    for (let i = 0; i < arguments.length; i++) {

        sum = sum + arguments[i]

    }

    return sum

}

// console.log(add(...jionedarray))
// console.log(add(string)) // output is 0language zero come from the initial value of sum

//IMP we cant spread normal object in fuction  we only spread string and numbers not an objetcs 

// console.log(add(...user)) we cant do like this 


// spread operator
// In array while destructing we have follow the value order 
// With Array
const students1 = ["Aarav", "Isha", "Rohan", "Meera", "Kunal"];
const students2 = ["Priya", "Sahil", "Ananya", "Dev", "Nikita"];

let [stud1, ...others] = students1; //Here we destructure the student1 array 
console.log(stud1, others) // here we save first student in one varaiable and using spread ops all saved in others name varaiable
let combinedArr = [...students1, ...students2] // Here did concatination using spread ops


//With string 
let mystr = 'Information'
let str = [...mystr]
console.log(str)

//With object 
const student1 = {
    id: 1,
    name: "Ravi Kumar",
    age: 20,
    course: "Computer Science",
    grade: "A"
};

const student2 = {
    id: 2,
    name: "Sakshi Sharma",
    age: 22,
    course: "Information Technology",
    grade: "B+"
};
// 



//If both objects have the same keys, the last one overrides the previous value, so always check for duplicate keys.
let combinedObj = { ...student1, ...student1 }

// Destructring with object
// while destructuring the object we must have to use same varaibale name as the keyname
let {name,...remainingKeys} = student1
console.log(name,remainingKeys)


//There are a few ways to keep both values instead of overriding when keys clash
let merge = {
    ...student1, ...student1,
    id: [student1.id, student2.id],
    name: [student1.name, student2.name],
    age: [student1.age, student2.age],
    course: [student1.course, student2.course],
    grade: [student1.grade, student2.grade]
}
// console.log(merge)

// function short(data){
// return data.filter((names)=>names.toLowerCase().includes('v')) }
// const studData = short(students2)
// console.log(studData)