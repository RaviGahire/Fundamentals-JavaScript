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
---> we can use pasreInt(value) for convert string into number. and another is use + before string this bothe methods use for convert in number (explicit conversion we can call this manual conevert)
---> if both the value and type is same then this operator return true otherwise return false

3. != not equal its give out put true if given value is not equal to each other. this acutal check not equality 
example

4. !== this is check not equal value or not equal type its same as ===.

5.  greter than > ---> this also  convert the string into inuber behinde scence 
6. less than <  ---> 