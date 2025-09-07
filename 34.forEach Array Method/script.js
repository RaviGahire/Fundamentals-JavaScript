// Foreach  

// This is an array method 

// lets create one array 

const numbers = [1,2,3,4,5,6,] 
//foreach it self is function and its take one call back function

// foreach call that array for six time becoz of there in array have 6 element so its call six time to that array.

numbers.forEach(function(){
    console.log('HI')
})
//IMP foreach method not have return value of we not defining the foreach method so its deafult reterun value is undefined. 
// when we pass the parameter in that call back function its print the whole array elelemts
// foreach method call to the array its depend on the array elements.
numbers.forEach((num)=>{
console.log(num)
})

const list = document.querySelectorAll('.items');
// console.log(list)

list.forEach((item,index)=>{

    item.addEventListener('click',(e)=>{
       console.log(e.currentTarget.style.color = 'red')

    })
})