const score = 29
debugger
switch(true){
   case score >= 75 && score <= 100:
   console.log("Your gread is A");
   break;

   case score >= 65 && score <= 75:
   console.log("Your gread is B");
   break;

   case score >= 55 && score <= 65 :
   console.log("Your gread is C");
   break;

   case score >= 45 && score <= 55:
   console.log("Your gread is D");
   break;

   case score >= 35 && score <= 45 :
   console.log("Your gread is E");
   break;

   case score < 35:
   console.log('You have to do study ');
   break;

   default:
    console.log('Enter valid Number')

}