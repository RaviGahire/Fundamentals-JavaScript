// Switch case

// const dayNumber = parseInt(prompt('Eneter day Number'));

// switch (dayNumber) {
//     case 0:
//         console.log("It is sunday today");
//         break;
//     case 1:
//         console.log("It is monaday today");
//         break;
//     case 2:
//         console.log("it is tuesday today");
//         break;
//     case 3:
//         console.log("it is wenesday today");
//         break;
//     case 4:
//         console.log("it is thausaday today");
//         break;
//     case 5:
//         console.log("it is friday today");
//         break;
//     case 6:
//         console.log("it is sartarday today");
//         break;
//     default:
//         console.log('Eneter valid day number');
// }





//Write program for house cleaning day 

const day = prompt('Enter the day');

switch (day.toLowerCase()) {
    case 'monday':
        console.log(`Toady is ${day} Shubhams's house cleaning day`);
        break;
    case 'tuesday':
        console.log(`Toady is ${day}  ravi house cleaning day`);
        break;
    case 'wednesday':
        console.log(`Toady is ${day} nitin cleaning day`);
        break;
    case 'thursday':
        console.log(`Toady is ${day} ajinkya cleaning day`);
        break;
    case 'friday':
        console.log(`Toady is ${day} vishal cleaning day`);
        break;
    case 'saturday':
        console.log(`Toady is ${day} Shubham cleaning day`);
        break;
    case 'sunday':
        console.log(`Toady is ${day}ravi cleaning day`);
        break;
default:
    console.log('Please Enter valid Day')

}

