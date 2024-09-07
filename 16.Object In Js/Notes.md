# there is only one type of non primitive data type that is called object.

IMP object are further divided into three categories
these are all is object type
# 1. Object literals
# 2. Array
# 3. Functions 

so we start lerning a object/object literals.

# 1. Object literals

How to create object 

syntax 
const user ={
    key:value
    key:value
}

# IMP when we are using non primitve data types and compaire them using any comparison operator that time JS engine not compairng the actual values of that object its compair the object addresses. and address are differenet so out put always false. in primitve data type JS engine compaire value but in non-primitive data type JS engine not compair the values its compair the addresses 

Example

const user1 = {}
const user2 = {}
user1 === user2 --> out put is false.

# How to access value from the object there two type to access value from object
1. dot notaion ------> user1.firstName
2. Bracket notaion -----> user1['firstName'] IMP --> behinde the sence object key are string so thats why we can use bracket notion to acees them

const user1 = { 
    firstName: 'Ravi', 
    lastName: 'Gahire', 
    age: 29, 
    education : '12th', 
    city: 'Pune' ,
    mobileNo: 8788989719, 
}

console.log(user1.firstName) --> out put is ravi 
console.log(user1['age']) --> out put is 29

Example

const user1 = { 
    firstName: 'Ravi', 
    lastName: 'Gahire', 
    age: 29, 
    education : '12th', 
    city: 'Pune' ,
    "Mobile-No": 8788989719, 
}

console.log(user1.firstName)
console.log(user1['age']) // braket notaion is so powerfull 
console.log(user1['Mobile-No'])
console.log(user1['first'+'Name'])



# How to update object / how to add values in object

example

const user2 = { 
    firstName: 'Ravi', 
    lastName: 'Gahire', 
  }

user2.age = 29 // here is we are upading a object added age key in it 
user2['is-student']= true using bracket notaion 

console.log(user2)

# Nested object and how the access key value 
example

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