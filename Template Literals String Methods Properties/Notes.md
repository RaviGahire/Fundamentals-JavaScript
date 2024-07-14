# String methods and properties.
1---> Before staring string methods and properties we need to know that strings are (indexed).
2---> So basically we can access any single character of a string by using string index 
3---> Indexing also count empty space init 
4---> For checking string length we can use length properties. 
      Example const name = "Ravi" 
                   console.log(name.length) 

# IMP ---> while using properties we do not add the bracket() after writing the property 
----> do this(name.length)
----> Don't do this (name.length())


# Methods of string.(Without Arguments)
# IMP ---> while using string methods we add the bracket() after writing the method  
----> do this(name.trim())
# IMP Any String methods do not change or modify actual string.

1.toUpperCase()--> toUpperCase() method do not change actual string, Actual string as it is still in the actual from but 
----->toUpperCase() return new string after operation done.

2.toLowerCase()--> Convert the string in lower case the return new string does not modify actual string. 

3.trim()---> trim() string method remove the extra spaces from the string and return new string. 

4.trimStart()---> this string method remove staring extra spaces from the given string.

5.trimEnd()---> this string method remove ended extra spaces from the given string.


---> While using string methods we can add bracket after writing method 
        console.log(name.trim()); <--> like this
------------------------------------------------------------------------------------------------------------------------------------------------------------      
-------------------------------------------------------------------------------------------------------------------------------------------
# Methods of string (With Arguments)

1.Include() --->The includes() method in JavaScript is used to determine whether one string can be found within another string, returning true or `false as appropriate. 

string.includes(searchString, position);

# searchString: The string to search for within the given string.
# position (optional): The position within the string at which to begin searching. The default is 0.
# This method is part of the ECMAScript 2015 (ES6) standard.
# The includes() method is case-sensitive.

Examples

const myStr = "Hi, I am Ravi"

console.log(myStr.includes('Hi')) // Output-> is true because of Hi is present the in the given string. 
console.log(myStr.includes('hi')) // Output-> is false because of hi is present the in the given string but include method is case-sensitive
console.log(myStr.includes(',')) // Output-> is true because of (,) is present the in the given string.
------------------------------------------------------------------------------------------------------------------------------------------------------------      
-------------------------------------------------------------------------------------------------------------------------------------------
2.IndexOf() --> The indexOf() method helps you find where a specific string appears for the first time within another string. It tells you the position of that string or gives you -1 if it can't find it.

--->if the searchValue isn’t found then result is (-1)
---> this is also  case-sensitive. 

  string.indexOf(searchValue, fromIndex)

# indexOf method example 
const A_string = "Hello, i am ravi"

console.log(A_string.indexOf('i')); // output is 7 because of i is present in a given string 
console.log(A_string.indexOf('c')); //output -1 because of small c character not present in this string. indexOf also case sensitive.
console.log(A_string.indexOf('am')); // output is 9 because of i is present in a given string.but start the indexing from 9 thats why out but is 9  
------------------------------------------------------------------------------------------------------------------------------------------------------------      
-------------------------------------------------------------------------------------------------------------------------------------------

3.replace()--->The replace() method helps you find a specific part of a string and change it to something else.

string.replace(searchValue, newValue);

searchValue: The part of the string you want to find.
newValue: The part you want to replace it with.

// replace method example 

const replaceStr = "Hello , I am Ravi Gahire";

console.log(replaceStr.replace('Hello' , 'Hi')); // Output is a change the Hello in to Hi -- This also case sensitive  
console.log(replaceStr.replace('hello','hi')) // output is a nothing show in console because the case sensitive
console.log(replaceStr.replace('R' , '4')) ; // output is change the R character in to given number.
console.log(replaceStr.replace('e','E')) // out put is change the only first e in capital E other is still remain the same so what can we do the all e want to be change it. so we use replace all method 

4.replaceAll()-->The replaceAll() method in JavaScript is used to replace all occurrences of a specified string or pattern within another string. It's similar to replace(), but it replaces every instance, not just the first one.

string.replaceAll(searchValue, newValue)

# IMP replace(), which only replaces the first match, replaceAll() replaces all matches.

console.log(replaceStr.replaceAll('i' , 'I')); //out put is all small i are replaced by the capital I. 
console.log(replaceStr.replaceAll('e' , 'E')); //out put is all small e are replaced by the capital E. 
console.log(replaceStr.replaceAll('Hello' , 'E')); //out put is all Hello are replaced by the capital E. 
console.log(replaceStr.replaceAll('Am' , 'E')); //out put is nothing case sensitive

5.concat()---> combine two strings in one string 

concat method example 

const add1 ="Hello"
const add2 ="I am Ravi"

console.log(add1.concat(' ' ,add2))// this also work in concat 
console.log(add1+ ' ,'+add2)// using plus + operator 

6.padStart()--->The padStart() method helps you make sure a string is a certain length by adding extra characters at the beginning.
string.padStart(targetLength, padString)
-----> targetLength: The desired length of the resulting string. If the original string is already as long or longer, no padding occurs.
-----> padString: The string that will be added to the beginning of the original string until it reaches the targetLength. This string can be repeated as needed.