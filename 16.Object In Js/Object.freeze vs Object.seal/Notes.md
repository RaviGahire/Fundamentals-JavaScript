# why we need Object.freeze() Object.seal() in JS

# IMP if we create object using const and update it so we can do that with the object, so here what actualy hapening we are updating some extra values/keys in our object but we not modifying actual object address 

if we create a user object const user = {
    key1: 'xyz',
      key2: 'xyz',
        key3: 'xyz',
          key4: 'xyz',
            key5: 'xyz'
}
and modifyin it user.key6 = 'abc' so we can do this but here is we cannot modifying user boject actual adsress that address still remaing same, just we are addeding some extra value in user object.

# if we create aboject using let keyword so we can able to modify actual adress

# how to delete key from the object we can use delete keyword to delete some keyvalues from the object

exmaple

const user = {
    firstName: 'Ravi',
    lastName: 'gahire',
    Address: 'dy patil college road'

}

console.log(user) // here is Address is present 

delete user.Address // here we delete address from the user object

console.log(user) // look at the user address delete from here


# Object methods 

1. Object.seal () ---> its prevent to the object from delete key value pairs from the user object. 

example

const user = {
    firstName: 'Ravi',
    lastName: 'gahire',
    Address: 'dy patil college road'

}

Object.seal(user) Now you can not delete the  user object keys but you can modify key values or insert keys in it.

Object.freez(user) Now you can not delete keys or update keys in the user object.


# How to check key is present in the given object using (in) keyword

console.log('firstName' in user) --- output is true firstName is its present in user object
console.log('mobileNo' in user) --- output is false mobileNo is not present in user object
