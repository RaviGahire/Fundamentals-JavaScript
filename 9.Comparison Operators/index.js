// Equal to  ==
let user_one_age = '15' // Here is js automatic convert string into number means here implicit conversion happing 
let user_two_age = 15
const ageResult = user_one_age == user_two_age
console.log("user age out put is --->", ageResult)



// Equal type and equal value 

let num1 = "10"
let num2 = "10"
const numberChecking = num1 === num2
console.log(numberChecking)

// not Equal 
// in this below example we are check both variable value is same but not equal to give us a output is flase beacuse of its checking both value if value are same 
// its give output is flase if both value are not same or diffrent its give output true 

let a = 5
let b = 5
 let notEqual = a!= b; 
 console.log("not equal " ,notEqual)
//second example 
//IMP its also convert string string number into number behinde scince 
 let first_value = "xyz"
 let second_value = 5
 let notequal = first_value != second_value 
 console.log(notequal);

// greter than
 let x = 20
 let y = 10
gn = x > y // here is x is greter than y so out put is true 
console.log(gn)
 
// less than 
lt= x < y // here is x is not less than y so out put is flase .
console.log(lt)

//greter than equal to
// its check is this equal and also check greter then out put is true this is check both conditions 

let h = 24
let i = 23

greter_than_equal_to = h >= i

console.log(greter_than_equal_to);

//less than equal to

let j = 2
let l = 20

less_than_equal_to = j <= i // here in this condition both value is same that why we can get out put is true here is condition game we have to understand this .

console.log(less_than_equal_to)