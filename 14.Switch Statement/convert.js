
let userName = 'ravi'
let userAge = 5


// here is we are checking conditions but if below any condtion is true its give as a result thats why 
// we are pass the true in switch case.
switch (true) {
    case userAge >= 5 && userAge <= 10:
        console.log(`${userName} is kid `);
        break;
    case userAge >= 10 && userAge <= 18:
        console.log(`${userName} is School student`);
        break;
    case userAge >= 18 && userAge <= 24:
        console.log(`${userName} is School student`);
        break;
    case userAge >= 25 && userAge <= 45:
        console.log(`${userName} is Working profesional`);
        break;
    case userAge >= 45 && userAge <= 65:
        console.log(`${userName} is retired`)
        break
    case userAge > 65:
        console.log(`${userName} is no more`);
        break;
    default:
        alert("Enter valid age and name");
        console.log("Enter valid age ")

}









