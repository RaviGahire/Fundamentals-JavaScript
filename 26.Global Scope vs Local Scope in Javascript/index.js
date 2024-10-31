


const userName = 'Ravi'
const userAge = 28


function add (){
    const x = 5
    const y = 5
    console.log(x + y)
}

add()

console.log('Progarame Ended')

var globalVar = "I'm in the global scope";

function display() {
    console.log(globalVar); // Accessible here
}

display(); // Output: "I'm in the global scope"
console.log(globalVar); // Accessible here too
