# Comparison Operators in Javascript

1. == equal to [equality]---> check the both of value is equal to each other or not if given value is same its return true otherwise its return false

# IMP Equal to does implicit conversion automatically means if the number is given in string its convert automatically in number.

# Example

let user_one_age = '15' ----> Here is js automatic convert string into number means here implicit conversion happening
let user_two_age = 15
const ageResult = user_one_age == user_two_age
console.log("user age out put is --->", ageResult)

2. === equal value and equal type [strict equality] [You have to do explicit conversion (manual conversion using parseInt ot + operator )] -----> this operator doing both tasks its checking value and type (typeof)

# IMP === does not do implicit conversion 
# Example

let num1 = "10"
let num2 = "10"
const numberChecking = num1 === num2
console.log(numberChecking)

---> in above example we are checking the two value using comparison operator === 
---> if both the value and type is same then this operator return true otherwise return false

