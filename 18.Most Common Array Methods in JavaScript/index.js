

const EvenNum = [0, 2, 4, 6, 8, 10, 12];

EvenNum.shift();

console.log('Using shift', EvenNum);

EvenNum.unshift(0);

console.log('Using unshift ', EvenNum);



const numbers1 = [11,0.1, 2, 3, 4, 5, 6,25,50]
const numbers2 = [10, 11, 12, 13, 14, 15]
let x = numbers1.concat('Second array', numbers2)
console.log(x)




const Array1 = [1, 2, 3, 4, 5]
const y = Array1.indexOf(2)
console.log('Index of ', y)


const array2 = [25, 50, 78, 48, 45]
let xx = array2.includes(45)// its find given number is present in array or not 
console.log(xx)



const animalArray= ['cat','dog','houres','cow','rat','monkeyKing']
 let reversArray = animalArray.reverse()//  we dont need to pass anything here
 console.log(reversArray);

 let sortArray = numbers1.sort()

 console.log(sortArray)


 let sliceArray = animalArray.slice(4)
 console.log(sliceArray)

 let spliceArray = animalArray.splice(2 ,1 , 'makad')

 console.log(spliceArray)