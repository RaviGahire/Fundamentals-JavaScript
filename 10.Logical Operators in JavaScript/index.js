console.log("Logical Operators in JavaScript")


// 1 And Operator 
let userAge = 18

let LogicalOperatorAnd = (userAge >= 15)
console.log("Single condition Output = ", LogicalOperatorAnd);
// In this example we are checking only one condition user age is greter than 24, yes user age is age greter than 24 so out put
// is true because we known if one condtion is false then and operator return false 

LogicalOperatorAnd = (userAge >= 20) && (userAge <= 18);
console.log("Using AND operator ", LogicalOperatorAnd);
// In this example we can checking two condition using AND operator. (userAge >= 20) this conditio is false but second condition is true (userAge <= 18 )
// But we konw if one condition is false output is also false.

// second example 

let Age = 18;

let isStudent = Age >= 18 && Age <= 20 // In this example Age is (Age >= 18) Less than or equal to the age 18,
// and in second condition (Age <= 20) age is not greter than 20 so this condition also true here is both condition true so reuslte is tru.
console.log("Is College Student ", isStudent)



// OR oparetor 

const Student_Age = 15

const isSchoolStudent = (Student_Age >= 10) && (Student_Age <= 15 );

console.log(isSchoolStudent)

 const isCollegeStudent = ( Student_Age >= 20) && (Student_Age <= 20 )

 console.log(isCollegeStudent)

const IS_student = isCollegeStudent || isSchoolStudent
// In this example we are checking condition using OR oparetor in this example isSchoolStudent condition is true.
// isCollegeStudent condition is false so OR oparetor returns a true. if there is one condition is true then out put is true.

console.log('Using OR Operator',IS_student)


//IMP Example 

const val1 = "string" && 5 + 5;
// As we know AND operator finding a falsy value but here is no falsy value so its return 10 calculating the 5 + 5; 


const val2 = "string" || 5 + 5;
//And the OR operator find the truthy values so hes resturn string as output.

console.log(val1);

console.log(val2);

//IMP Example 

const AND_OP = "Hello" && console.log('This is and oparetor result');
// As we known AND operator Always finding for false value in above code "hello" string is true value.
// so AND go a head and checking second value and then calculet the expresion and give result of the second value 
// but here is actual result is undefined.
const OR_OP = undefined  && console.log('This is and oparetor result');
// As we known OR operator is alwyas finding for truthy value so undefined keyword is false value in jS. so OR operator
// go head for truthy value and checking second value and then calculet the expresion and give result of the second value
// but here is also actual result is undefined.

// NOT
const trueValue = 1 
console.log( 'Not Operator',Boolean(!trueValue));
const falseValue = 0
console.log( 'Not Operator',Boolean(!falseValue));