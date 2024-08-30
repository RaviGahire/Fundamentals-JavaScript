console.log('Optimize Decision Making Using Else If and Else');





// const userName = prompt("Please Enter Your Name:") || "Pro Coder";
// // const userAge = +prompt("Please Enter Your Age:");
// const userAge = parseInt(prompt("Please Enter Your Age:")) || 0;

// console.log('User Name', userName.toUpperCase());
// console.log('User Age', userAge);



// if (userAge >= 5 && userAge <= 10) {
//     console.log(`${userName}  is kido `)
// }

// else if (userAge >= 10 && userAge <= 18) {
//     console.log(`${userName} is School student`)
// }

// else if (userAge >= 18 && userAge <= 24) {
//     console.log(`${userName} is School student`)
// }

// else if (userAge >= 25 && userAge <= 45) {
//     console.log(`${userName} is Working profesional`)
// }
// else if (userAge >= 45 && userAge <= 65) {
//     console.log(`${userName} is retired`)
// }

// else if (userAge > 65) {
//     console.log(`${userName} is no more`)
// }
// else{
//     alert("Enter valid age and name");
//     console.log("Enter valid age ")
// }


//==================================================================================================================


const userName = prompt("Please Enter Your Name:");
// const userAge = +prompt("Please Enter Your Age:");
const userAge = parseInt(prompt("Please Enter Your Age:"));




if (userName) {
    console.log("Enter valid user NAme");
}
else {
    console.log("Not valid name");
}


 if(!userAge){
    console.log("Enter valid user age");
 }
 else{
    console.log("not valid age")
 }

//  console.log('User Name', userName);
// console.log('User Age', userAge);





console.log("Operation End..! Thank You")