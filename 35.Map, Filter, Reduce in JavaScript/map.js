
// Short name with the includes method
const students = [
    "Aarav",
    "Ishita",
    "Rohan",
    "Sanya",
    "Kunal",
    "Meera",
    "Aditya",
    "Priya",
    "Vikram",
    "Ananya",
    'babubhai'
];
let StudentNames = students.map((names) => {
    let filterNames = names.toLowerCase().includes('i');
    if (filterNames === true) {
        console.log('Student exist :', names.toLocaleUpperCase())
    }

return filterNames


});

StudentNames.some((elem, i  )=>{
    if(elem === true){
        console.log('I found it',elem , i )
    }
})