# setTimeout and setInterval in JavaScript 
IMP setTimeout and setInterval the both of browser functions this is not included in JS.
IMP setTimeout and setInterval its higher functions
syntax
setTimeout(function, delay, arg1, arg2, ...);


SetTimeout is browser function so its create own file in browser file name (VM465) like this name of that file. 

setTimeout('hello')// when we pass the string like this so settime out consider as variable and show error hello is not defined. 
setTimeout('console.log("Ravi")') when we pass like this so settime out run this code becasue of its treate like js code. 

# setTimeout return value or ID.

The return value of setTimeout is a Timeout ID (often called a "timer ID" or simply "ID"). 
This ID is a unique identifier that represents the specific timeout you've set, allowing you to manage and control it if needed.

Why is the Timeout ID Useful?
The primary purpose of the Timeout ID is to enable cancellation of the scheduled setTimeout function call before it occurs. 
This is done using the clearTimeout() function, which takes this ID as an argument to identify the specific timeout to cancel.

When you call setTimeout, it registers the callback function and delay with the JavaScript runtime, 
which then assigns an ID to this specific timeout instance. 
Each setTimeout call will get a unique ID, even if they have the same delay.

Example: Using the Timeout ID
Here's an example that shows how the Timeout ID works and how to cancel the scheduled execution.
let timeoutID = setTimeout(() => {
    console.log("This message will not appear, because the timeout is canceled.");
}, 5000);

Cancel the timeout
clearTimeout(timeoutID);


setTimeout(a,2000) // we not call function here just pass as argument like this a (funcation name)
// behinde the scens setTimeout call the function its self so we dont need to add brackets there.


function a (){
    console.log('Hello bro')
    return null
}

IMP settimeout is asynchronous function and normal javascript code is synchronous 

//==============================================
setInterval is a JavaScript function used to repeatedly execute a specified function at a fixed time interval. Like setTimeout, it is asynchronous and non-blocking, meaning it doesn't stop the rest of the code from executing.
synatx
setInterval(function, interval, arg1, arg2, ...);

setInterval(() => {
    console.log("This message appears every 1 second.");
}, 1000);

How setInterval Works
Repeated Execution: Unlike setTimeout, which only runs once, setInterval keeps executing the specified function at the set interval until it is explicitly stopped.
Asynchronous Behavior: setInterval schedules tasks in the background and doesn’t block other code.
Stopping setInterval with clearInterval
To stop a setInterval, you need to call clearInterval, passing in the interval ID returned by setInterval.

Example of clearInterval
javascript
Copy code
let intervalID = setInterval(() => {
    console.log("This message will keep appearing every 2 seconds.");
}, 2000);

setTimeout(() => {
    clearInterval(intervalID);
    console.log("Interval cleared.");
}, 7000);
In this example:

setInterval runs every 2 seconds, logging a message.
setTimeout is used to clear the interval after 7 seconds, so the message only appears three times.
Practical Uses of setInterval
Updating UI Elements: For example, showing a clock that updates every second.
Polling: Regularly checking for new data from a server.
Animating Elements: Updating positions or styles to create animations.

Summary
setInterval is used for repeated, timed execution.
It returns an interval ID, which can be cleared with clearInterval.
It's asynchronous and non-blocking but may experience drift for complex tasks.
For tasks where timing accuracy is crucial, consider using a recursive setTimeout.