console.log("Decision Making in JavaScript Using IF Statement");




const userName = prompt("Please Enter Your Name:") ||  "Pro Coder";
// const userAge = +prompt("Please Enter Your Age:");
const userAge = parseInt(prompt("Please Enter Your Age:")) || 0;

console.log('User Name', userName);
console.log('User Age', userAge);

if (userAge >= 25 && userAge <= 45) {
    console.log(`${userName}is Working profesional`)
}
if (userAge >= 45 && userAge <= 65) {
    console.log(`${userName}is retired`)
} 

if ( userAge > 65) {
    console.log(`${userName}is no more`)
} 
