// Example
const colors = ["yellow", "green", "pink", "red", "orange", "blue", "black"];
//Normaly for accessing array values we do this

// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[3]

// console.log(color1,color2,color3);

//Here we destructuring the colors array
// here color1 is variable and color2 and color3 also variable so we can acces the value
//we can give any name that variables like a b c

const [color1, color2, color3] = colors;

console.log(color1);
console.log(color2);
console.log(color3);

// how can we ascces 5th value in destructuring
// that commas skip the all staring value and value 5th is accessing that value we want
const [, , , , , value5] = colors;
console.log(value5);

//how can we directly access the any value in destructuring
//behind the sences we know array also object so we can do like this 
// every color have the index so we use the index and give them name we like 


const {3 : index3, 0 : index0, 5: index5} = colors
console.log('From index3',index3 , index0,index5)





const user = {
  name: "Ravi",
  age: 28,
  address: {
    city: "Pune",
    state: "Maharashtra",
  },
};

// Normaly we access the object values like this

// let name = user.name
// let age = user.age
// console.log(name,age)

// How we destructure the object
// Here is some rule to access the value we have to give the same in that is present in object like name and age
// while destructuring the object we have to use {} brackets
// we cant do like array destructuring give the any name to variable for access values

const { name, age } = user;


// if we and change the that keyvalue pairs name so we can do like this 

// here we asing name to username and same also age 

const {name: username, age:userage}= user


// how can we access the that address city 
// we prefered this for accessing the values

const {address: {city}} =user // We call this multi level destructuring


// but normaly popels do like this 

// const {address} = user
// const{city} = address
// console.log(city)

//here is object key value names is matters
function userintro ({name,age}){
    console.log(name,age)
}
userintro(user)


//here is name not matters 
// function color ([a,b,c]){
// console.log(a,b,c)
// }
// color(colors)

// function color ({4:index}){
//     console.log(index)
//     }
//     color(colors)


//With array 
const arr = [1,2,3,4,5]
const [one,two,three,four,five] = arr
// console.log(five)

//if we want only one number the we can destructure like this 
//     index and variable
const {3:number} = arr
console.log(number)




// With Object
const myObj = {
  Name:'ravi',
  role:'Js Developer',
  age:28,
  address:{
    Mycity:'Pune',
    state : 'MH'
  }
}
const {Name,role} = myObj
const {Name:userName,role:userRole} = myObj 
const {address:{Mycity,state}} = myObj //Multilevel distructuring 
console.log(city,state)
