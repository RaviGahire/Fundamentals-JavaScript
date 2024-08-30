# else is help to optimize our code 

if we write next (if () if ()...n)then JS engine go every if block and check the condtion. its not good way to write if condition.
we have to write code in optimize way look at he below example .

if (userAge >= 5 && userAge <= 10) { ----->When user is 8 year old then JS engine check this condition only.and directly jump on end line. but if we are not use else if then JS engine check the every if condition untill give condition found.
    console.log(`${userName}  is kido `)
}

else if (userAge >= 10 && userAge <= 18) {
    console.log(`${userName} is School student`)
}

else if (userAge >= 18 && userAge <= 24) {
    console.log(`${userName} is School student`)
}

else if (userAge >= 25 && userAge <= 45) {
    console.log(`${userName} is Working profesional`)
}
else if (userAge >= 45 && userAge <= 65) {
    console.log(`${userName} is retired`)
}

else if (userAge > 65) {
    console.log(`${userName} is no more`)
}

console.log("Operation End..! Thank You");


IMP --> debbuger --> while debuging your promgram you can only go forward --> there is no way to go back just go next not back.