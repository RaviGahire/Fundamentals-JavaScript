# Multidimensional Arrays 
--> Multidimensional Arrays  means inside array and there is another one array its called as multidimensional Arrays.
Example
let MyArray = [['First Array'],['Second Array']]

# How can we access values in multidimensional arrays.

example 
const newArray = [['Ravi',50], ['Shubham',60]]
console.log(newArray[0]) //Here we are acessing first whole array  

//Using indexing we can access any array value.
console.log(newArray[0][0]) //Here we are acessing first array and first value 

console.log(newArray[1][0])//Here we are acessing second array and first value

# How can update multidimensional arrays 
const newArray = [['Ravi',50], ['Shubham',60]]
example console.table(newArray[0][5] = 'rahul') // here is we are updating multidimensional array 
console.log(newArray)


// Tic Tak Toe game multidimensional array 

const TicTacToe = [ 
    ['X', null,null],

    [null,null,'O'],
    
    ['O',null,'X']]

console.table(TicTacToe);