// when we define function in object using key  its called method in jS
// Every function is not method but every method is a function

const obj = {
  key1: 1,
  key2: 2,

  add: function (key1, key2) {
    return key1 + key2;
  },
};

// How we can access the method 
// when we access the function from object using dot thats also called as method.
console.log(obj.add (4,5) )// we can access the that function like this.

//we can replce also that method using following sayntax

obj.add = function(){
    console.log('i am second method ')


}

console.log(obj.add)