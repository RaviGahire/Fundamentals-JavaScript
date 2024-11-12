# Event Loop and Callback Queue

# http://latentflip.com IMP website

console.log("Hi-1")

function hello (){
    console.log("Hi-2")
}

for(let i =0 ;i <= 5 ;i++){
    console.log(i)
}

setTimeout(function(){  --->  setTimeout schedules the provided function to execute after a delay (default 0ms if no delay is specified).
    console.log('Hi-3')  ---> JavaScript moves this task to the event queue because of the setTimeout, meaning it won’t execute 
                               immediately  but rather after the current synchronous code finishes.
})

hello()


# Order of Execution
1. Console Logs in Order:
----> "Hi-1" logs immediately.
2. Loop Execution:
----> The for loop runs, logging numbers 0 to 5 in sequence.
3. Function Call:
----> hello() is called, logging "Hi-2".
4. Delayed Console Log:
----> Finally, after the main code has finished, the setTimeout executes, logging "Hi-3".

This ordering happens because console.log, the for loop, and hello() are all synchronous, while setTimeout is asynchronous and runs after the synchronous code completes.

