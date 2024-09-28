

// let num1 = 0
// let num2 = 0
// let num3 = 0
// IMP when u use loops u have to write name of variable i becoz its conventional and easy to read
// while(num1 < 10){
//     num1++
//     console.log('First',num1)
// }

// while(num2 < 10){
//     console.log('Second ',num2)
//     num2 = num2 + 1
  
// }

// while(num3 < 10){
//     console.log('third ',num3)
//     num3 += 1
  
// }

// here is below we are print all array name one by one 
// so how can we do that see the follwing example
const MyFriends = ['Shubham','Ram','Rahul','Ajay','Nitin'];
let i = 0 // This variable hepls as itrate over the array 
//We defined i variable and set for condtion
while(i < 5){ // Here is we saying while loop if i is less then 5 then gose in MyFriends array and print the value
    console.log(MyFriends[i]) // here we pass the i and i value is 0 now 
    i++ // here is we increamenting i value + 1
}

//Animal.length is help us to not change the contion if array element delete or add

let Animal = ['Shubham','Ram','Rahul','Ajay','Nitin'];
let j = 0 // This variable hepls as itrate over the array 

while( j < Animal.length){
    console.log(`${j + 1}. ${MyFriends[j]}`); // here we are used ${j + 1} for numbering the element

    j++ //Here is we increamenting that
}