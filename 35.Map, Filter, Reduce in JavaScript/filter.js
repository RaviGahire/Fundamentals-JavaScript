
const students = ["Aarav","Ishita","Rohan","Sanya","Kunal","Meera","Aditya","Priya","Vikram","Ananya",'babubhai',''];

let x = students.filter((names)=>{

let arr = [] 

if (names.includes('o'))

return arr

})

console.log(x);

/*
Why this works (but is confusing)
You’re returning an array ([]) instead of a boolean.
.filter() doesn’t care if it’s true or false strictly.
It checks if the return value is truthy.
[] is truthy → so "Aditya" gets kept.
*/ 