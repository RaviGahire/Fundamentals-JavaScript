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

 padStart() method example 
----> pad start method calculate whole string including the string value also same as padEnd.

const number = "2587"

console.log(number.padStart(10, "*")); // output is ******2587 You can put any character or symbol as you want to show before the given string.



7.padEnd()---> same as pad start see in the below example 

console.log(number.padEnd(10, "*")); // out put is 2587****** 

let message = "Hello";
console.log(message.padStart(5, "Welcome"));  // Output: "Hello"

In this case, "Hello" is already longer than targetLength, so no padding is added.

8.charAt()--->The charAt() method helps you find out which character is at a specific position in a string.
The charAt() method treats the string as zero-indexed, meaning the first character is at position 0.
If you pass a negative index, charAt() will also return an empty string.

string.charAt(index)


charAt() method example.

const Normal_Text = "This is normal text" 

console.log(Normal_Text.charAt(2)); //output is i accessing character using index value.
console.log(Normal_Text[2]);//out put same as above example.

let sentence = "Hello, world!";
let outOfRangeChar = sentence.charAt(20);
console.log(outOfRangeChar);  // Output: " " empty string or nothing in console


9.charCodeAt()----->
# IMP---> Capital character and small character unicode value is different from each other.
The charCodeAt() method helps you find out the Unicode (numerical) value of the character at a specific position in a string.
The charCodeAt() method treats the string as zero-indexed, meaning the first character is at position 0.
If you pass a negative index, charCodeAt() will return NaN.

Refer this link for character unicode--->https://www.w3schools.com/charsets/ref_html_ascii.asp.

string.charCodeAt(index);

 charCodeAt() method example.

console.log(Normal_Text.length) // out put is 19 , string length is 19 
console.log(Normal_Text.charCodeAt(20)) //output is NaN because of our string length is 19 out of string length.
console.log(Normal_Text.charCodeAt(0)) //output is 84 its T unicode
console.log(Normal_Text.charCodeAt(2)) //out put is 105 because of i character index is 2 thats why output is 105



10.split()---->
The split() method helps you divide a string into smaller parts and puts those parts into an array.

If the separator is an empty string (""), the split() method will return an array of individual characters.
If the separator is not found in the string, the split() method will return an array containing the entire string as the only element.

string.split(separator, limit)

example of split ()

const noramlStr = 'hello i am ravi'

console.log(noramlStr.split()); //output of this code is ['hello i am ravi'] whole string convert into array.
console.log(noramlStr.split('')) //output of this code is ["h","e",.....n] all the single character convert in to array. here is we pass the without space in the split('');
console.log(noramlStr.split(' ')) // output is ['hello', 'i', 'am', 'ravi']

let sentence = "one, two, three, four";
let limitedSplit = sentence.split(",", 2);
console.log(limitedSplit);  // Output: ["one", " two"];

# String Template Literals 
---> Template literals make it easy to embed variables and expressions within a string. You use the ${expression} syntax to embed the expression.

----> Template literals are enclosed by backticks (``)
----> They support string interpolation with ${expression}.
----> They allow multi-line strings without escape characters.
----> Template literals are dynamic because of if variable value is change result also change.

# Example of template literals.

const lastFourDigit = '2556'
const tempStr = `Last four digit of my account number is ${lastFourDigit}`//here in ${this brackets you can write actual javascript in it }
console.log(tempStr);

