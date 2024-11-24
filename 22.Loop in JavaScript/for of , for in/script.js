
const fruits = ['f1','f2','f3','f4','f5']

//Normal for loop 
 for (let i = 0 ; i <fruits.length; i++){
   //  console.log(fruits[i])
 }

 // for of loop
 // fruit is variable so we declaire using let if we not 
 // we not use for of on object for that there is for in loop 

 for ( let fruit of fruits) {
    console.log( fruit)
 }


 let myName = 'Ravi Gahire'

 for( let name of myName){
   console.log(name)
 }


 //For i loop

 const myobj ={
   fristName :'Ravi',
   lastName : 'Gahire',
   age : 28,
   role : 'front end dev'
 }
// When we use for of loop on object we get one error (myobj is not iterable) like this.
 for (let key in myobj){
   console.log(key, ':' ,myobj[key]) // this way is not efficent way iterate on the object

 }

 // This method is eeficent for object 

 let objectkeys = Object.keys(myobj)

 console.log(objectkeys)
 for (let key of objectkeys){
   console.log(myobj[key])
 }

 //  let objectValue = Object.values(myobj)
//  Object.entries()