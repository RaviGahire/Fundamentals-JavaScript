



const user = {
    firstName: 'Ravi',
    lastName: 'gahire',
    Address: {
        street: 'DY patil college road 29 Akurdi',
        city: 'PCMC Pune',
        pindCode: 4110011,
        state: 'Maharashtra',
        moreDetails: {
            population: '200000 Lakh',
            area: 'Akurdi railway station'
        }
    },
    age: 28,
    isEmployed: true
}

console.log(user) // here is Address is present 

delete user.Address // here we delete address from the user object

console.log(user) // look at the user address delete from here