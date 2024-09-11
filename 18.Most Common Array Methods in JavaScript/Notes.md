# Basic Array Methods

1. shift()--> shift is remove element from start of the array.
when we use pop() for removing a element from array its not change a element value but in shift() method index is shifting to another element. we dont need to use this method but for information.
Example.

const EvenNum = [2, 4, 6, 8, 10, 12];

EvenNum.shift() we dont need to pass anything in bracket.

console.log(EvenNum)


2. Unshift ()--- unshift pass the value it through but its give to us lenght of array in output we have to pass the value in it wich value we have to unshift

Example
const EvenNum = [0,2, 4, 6, 8, 10, 12];

EvenNum.shift()

console.log('Using shift',EvenNum)

EvenNum.unshift(0);

console.log('Using unshift ',EvenNum)

3. concat () concat same as we see alreday in string method. concat method not modify original array
--> we can concat multiple array at time concat(array,array2,arry3)
example

const numbers1 = [1,2,3,4,5,6]
const numbers2 = [10,11,12,13,14,15]

let x = numbers1.concat('Second array',numbers2)

console.log(x)

4. IndexOf () -- behinde thesece the implimation is diffrent for array and string. its give as index of the elemnt present ion array so have have to pass the index value
--> if any element not exist in given array that time indexof retrun us -1 same as string method 
example
const Array1 = [ 1,2,3,4,5]
const y =Array1.indexOf(2)
console.log('Index of ',y)

5. includes() find a given value its present in the array or not its retrun boolean out put true or false 
example 
const array2 = [25, 50, 78, 48, 45]
let xx = array2.includes(45)// its find given number is present in array or not 
console.log(xx)

6. resvers()--> its revers the whole array but its not create new array its modifiy original array 
example
const animalArray= ['cat','dog','houres','cow','rat','monkeyKing']
 let reversArray = animalArray.reverse()//  we dont need to pass anything here
 console.log(reversArray);

7. sort() sort is sort the array in alphabetical order its even short number in alphabetical order.
IMP we have to remember if we pasing strings in it so first letter is small all the letters or capital its easy to undarstand us.

example
const animalArray= ['cat','dog','houres','cow','rat','monkeyKing']
let sortArray = animalArray.sort()
 console.log(sortArray)

 const numbers1 = [11,0.1, 2, 3, 4, 5, 6,25,50]
  let sortArray = numbers1.sort()
 console.log(sortArray)

 out  out is [0.1, 11, 2, 25, 3, 4, 5, 50, 6];


 8. slice () --> its slice the arrya taking a start value(index) and end value (index);
 and its dosenot modify original array.
IMP stsrt value inclue and end value exclued

 syntax = array.slice (start index,end index)
 example 

 let sliceArray = animalArray.slice(4)
 console.log(sliceArray)

 9. splice ()---> splice remove element from the array start index to count , and add the value on the removed value.

 synatx array.splice(start index , delete coun , add string on dlelete element )

  let spliceArray = animalArray.splice(2 ,1 , 'makad')

 console.log(spliceArray)

