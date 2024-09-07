
// // How to create object 

// const user1 = { 
//     firstName: 'Ravi', 
//     lastName: 'Gahire', 
//     age: 29, 
//     education : '12th', 
//     city: 'Pune' ,
//     "Mobile-No": 8788989719, 
// }

// console.log(user1.firstName)
// console.log(user1['age']) // braket notaion is so powerfull 
// console.log(user1['Mobile-No'])
// console.log(user1['first'+'Name'])



// # How to update object / how to add values in object
const user2 = {
    firstName: 'Ravi',
    lastName: 'Gahire',
}

user2.age = 29 // here is we are upading a object added age key in it 
user2['is-student'] = true

console.log(user2)



const studentInfo = {
    firstName: 'Ravi',
    lastName: 'Gahire',
    address: {
        city: 'pune',
        PostalCode: 411211,
        state: 'MH12'
    }
}

console.log(studentInfo.firstName)
console.log(studentInfo.address.city)
console.log(studentInfo)