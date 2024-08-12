console.log("Truthy and Falsy Values in Javascript ")

let num1 = Boolean(10);
console.log("Example 10 is a ", num1);

let num2 = Boolean(10);
console.log("Example -10 is a ", num2)

let num3 = Boolean(0);
console.log("Example 0 is a ", num3);

let num4 = Boolean(NaN);
console.log("Example NaN is a ", num4);

let num5 = Boolean(Infinity);
console.log("Example Infinity is a ", num5);

let EmptyString = Boolean('');
console.log("Empty String is a", EmptyString);

let Undefined = Boolean(undefined);
console.log("undefined Value is a", Undefined);


let String = Boolean('Ravi')
console.log("Only String is a", String)

let nullValue = Boolean(null)
console.log("Null value is a", nullValue)