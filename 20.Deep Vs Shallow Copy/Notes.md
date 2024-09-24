# Lets see some example and explenation

const numbers = [1,2,3,4,5,6,7] // this is simple array 

// here we defined new array and pass the number array 
const newNum = numbers // now here all the numbers array value goes in newNum array ok.
 
newNum.push( 8,9)
console.log(numbers) // in this array we not push any value 
// output  [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(newNum) 
// output  [1, 2, 3, 4, 5, 6, 7, 8, 9]
// we are push elements in this array but first numbers array also updated with same value 
// here is quation is why both the array getting updated 
IMP this same happens with object also

//---So here first we have to undarstand when we asing one variable to another one varibale so thats time what happen exactly 
// now we undarstand what hapend behind the sences

# How can we duplicate the Object 

 How can we duplicate the Object 

const Obj1 = {
    firstName : 'Ravi',
    lastName : 'Gahire'
}

const Obj2 = {}
//Object.assign dev used before 2015 now we use spread operator 
Object.assign(Obj2,Obj1) // we acn add multipe values here in Object.assign ()
console.log('After copy Obj1 into obj2',Obj2);

const obj3 = {...Obj1}  // this opreator copy all the value from obj1 and assing to the obj3

console.log(obj3)

# How can we duplicate the Array 

---> we can also use object.assing();

example 
// copy or duplicate the array

const arr1 = ['X','Y','Z']

const arr2 =[]

// using Object.assign()
Object.assign(arr2,arr1)
console.log(arr2)

// using spred operator 

const arr3 = [...arr1]
console.log(arr3)

// Using concat 
  const array4 = [].concat(arr1) // using concat method we can copy the array arr1 in array4  
  console.log('using concat ',array4)

# IMP we can use this method for objects also

