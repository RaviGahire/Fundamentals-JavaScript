# Truthy and Falsy Values in Javascript 

# ---> In javascript only 0 and NaN is falsy value otherwise any number is true. 
# ---> Empty string ,null and undefined these are also falsy values in javascript.
# ---> for example 1,10,20,30 n number is Truthy value in javascript also -1,-20,-30 its all is Truthy values.



   1. let num1 = Boolean(10);
      console.log("Example 10 is a ", num1);

   2. let num2 = Boolean(10);
      console.log("Example -10 is a ", num2)

   3. let num3 = Boolean(0);
      console.log("Example 0 is a ", num3);

   4. let num4 = Boolean(NaN);
      console.log("Example NaN is a ", num4);

   5. let num5 = Boolean(Infinity);
      console.log("Example Infinity is a ", num5);

   6. let EmptyString = Boolean('');
      console.log("Empty String is a", EmptyString);

   7. let Undefined = Boolean(undefined);
      console.log("undefined Value is a", Undefined);


   8. let String = Boolean('Ravi');
      console.log("Only String is a", String);

   9. let nullValue = Boolean(null)
      console.log("Null value is a", nullValue) 
