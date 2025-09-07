
// functions that accept other functions as arguments or return function its called as higher-order function
// some examples of higher oreder function are map(),filter(),reduce()

let number = [1, 2, 3, 4, 5]
const doubleNumbers = number.map(function (number) {
    return number * 2;
});

console.log(number)
console.log(doubleNumbers)


function hireFunction(func) { 

    return `This is from hireorder ${func}` 
}


function add(...num) {

return num.reduce((a,v)=> a + v)

}

let sum = add(1,2,3,4,5,4,6)

console.log(hireFunction(sum))