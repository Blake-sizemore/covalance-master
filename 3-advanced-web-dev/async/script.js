$(document).ready(function () {
    console.log(`Set-up:`);
    console.log(`Complete. 1.Make sure all the html has loaded before using JavaScript
Complete. 2.Create a new project folder and connect it to a github repository. Copy this README.md file into it.
Complete. 3.Create an index.html file and an app.js file and link the two together.
    
Timing Out
Complete. 1.Create a function that takes a string message as an argument, and logs that message to the console
Complete. 2.Now call your function with a message`);
    function stringArg(string, string2) {
        console.log(string);
        setTimeout(() => { console.log(string2); }, 2000);
    }
    console.log(`2.Now call your function with a message`);
    stringArg('my ' + 1 + 'st string', ` my changed string 2 seconds later`);
    console.log(`Complete. 3.Use setTimeout to call your function again, but with a different message and after 2 seconds
    Hint: If you both of your messages log at the same time, look at the syntax of a setTimeout. You'll need to call your function within an anonymous function the timeOut executes.`);
    // stringArg(`my `+1+`st string`,`my changed string 2 seconds later`);

    console.log(`4. Create a new function called getWords that will attempt to do the following using several setTimeout calls:
    Log a word instantly
    After 3 seconds, log another word
    2 seconds after that, log a third word
    Finally 1 second after the third word, log a final word`);
    async function getWord (string, string1,string2,string3) {
        console.log(string);
        setTimeout(() => { console.log(string1); }, 3000);
        let twoSec = await setTimeout(() => { console.log(string2); }, 2000);
        
        setTimeout(() => { console.log(string3);}, 1000);
    };

    getWord(`instant`,`3 second wait`,`2 second wait`,`1 second wait`);

    console.log(`Callbacks and Recursion
1.Create a function called done that logs Job's done! to the console
2.Create a different function (on the global scope) called countdown that accepts two arguments, num and callback
    The goal of this function will be to log a "countdown" from the number passed in as an argument, delayed by 1 second each time, and when it gets to 1, it should execute the callback argument
    Hint: You'll need one setTimeout for this to work, an if/else statement, and NO for loop for this to work
    Super Hint: You'll need to call countdown within itself, a concept called recursion
    Mega Hint: There's a YouTube vid showing the concept off
3.Call the countdown function and pass it two arguments: a number of seconds to countdown from and the done function and see if it works
`);
    console.log(`Promises Promises ;)
1.Create a new global variable called lunchTime with a value of true
2.Create a new function called orderMeSomeFood that returns a new Promise
    Hint: If you're unsure of the correct syntax, check out this CodePen
3.In the resolver function of the Promise, write logic to check if the lunchTime variable is true
4.If lunchTime is true, create an object with two properties and values (key/value pairs) of your choice:
    lunch: "your favorite lunch"
    drink: "your favorite beverage"
5.Resolve the Promise with your object
6.If lunchTime is false, create a variable and set it equal to a new Error that has your own message
    Hint: Check out this page on how to use a new Error
7.Reject the Promise with your new Error
8.Call your orderMeSomeFood function, chain you .then and don't forget your .catch
9.If the promise within the function resolves, it should then log the object it resolved with
10.Swap lunchTime to false, and then the promise should reject with your custom created error and be logged from you .catch
11.Toggle lunchTime and check out the results of your newly created Promise function.
`);

});

// let resolveAfter2Seconds = () => {
//     console.log('starting slow promise');

//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(20);
//             console.log('slow promise is done');
//         }, 2000);
//     });
// };

// let resolveAfter1Second = () => {
//     console.log('starting fast promise');

//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(10);
//             console.log('fast promise is done');
//         }, 1000);
//     });
// };

// let sequentialStart = async () => {
//     console.log('==SEQUENTIAL START==');

//     const slow = await resolveAfter2Seconds();
//     // If the value of the expression following the await operator is not a Promise,
//     // it's converted to a resolved Promise.
//     const fast = await resolveAfter1Second();

//     console.log(slow);
//     console.log(fast);
// }

// let concurrentStart = async () => {
//     console.log('==CONCURRENT START with await==');

//     const slow = resolveAfter2Seconds(); // starts timer immediately
//     const fast = resolveAfter1Second();

//     console.log(await slow);
//     console.log(await fast); // waits for slow to finish, even though fast is already done!
// }

// let stillSerial = () => {
//     console.log('==CONCURRENT START with Promise.all==');

//     Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(([slow, fast]) => {
//         console.log(slow);
//         console.log(fast);
//     });
// }

// let parallel = () => {
//   console.log('==PARALLEL with Promise.then==');

//   resolveAfter2Seconds().then((message) => console.log(message));
//   resolveAfter1Second().then((message) => console.log(message));
// }

// sequentialStart(); // takes 2 + 1 seconds in total
// // use setTimeout to wait above to finish
// setTimeout(concurrentStart, 4000); // takes 2 seconds in total
// wait longer
// setTimeout(stillSerial, 7000); // same as before
// // wait even longer
// setTimeout(parallel, 10000); // truly parallelconsole.log("JavaScript is ready to run");