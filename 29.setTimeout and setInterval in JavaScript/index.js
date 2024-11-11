// SetTimeout is browser function so its create own file in browser file name (VM465) like this name of that file. 

//  setTimeout('hello')// when we pass the string like this so settime out consider as variable and show error hello is not defined. 
// setTimeout('console.log("Ravi")')// when we pass like this so settime out run this code becasue of its treate like js code. 

// setTimeout('console.log("Ravi Gahire")', 5000) // we can use backticks for multiple line code.


// let timeoutID = setTimeout(() => {
//     console.log("This message will not appear, because the timeout is canceled.");
// }, 5000);

// // Cancel the timeout
// clearTimeout(timeoutID);

// // EXample

// let timerID1 = setTimeout('console.log("Hello-1")', 1000)
// let timerID2 = setTimeout('console.log("Hello-2")', 2000) 
// let timerID3 = setTimeout('console.log("Hello-3")', 3000) 

// clearTimeout(timerID2)

// setTimeout(a,2000) // we not call function here just pass as argument like this a (funcation name)
// // behinde the scens setTimeout call the function its self so we dont need to add brackets there.


// function a (){
//     console.log('Hello bro')
//     return null
// }

//======================================

let stop =setInterval(()=>{
    console.log('Hi')
},1000)




