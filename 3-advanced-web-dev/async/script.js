(document).ready(function () {

    // Timing out
    // Create a function that takes a string message as an argument, and logs that message to the console
    // Now call your function with a message
    // Use setTimeout to call your function again, but with a different message and after 2 seconds
    //     Hint: If you both of your messages log at the same time, look at the syntax of a setTimeout. You'll need to call your function within an anonymous function the timeOut executes.
    // Create a new function called getWords that will attempt to do the following using several setTimeout calls:
    //     Log a word instantly
    //     After 3 seconds, log another word
    //     2 seconds after that, log a third word
    //     Finally 1 second after the third word, log a final word

    function instantReturn(instant) {
        return console.log(instant);
    }

    function echo(message, delay) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(message);
                let err = new Error(`something is not correct`);
                reject(err);
            }, delay)
        });
    };

    let getWords = () => {
        instantReturn(`This callback is instantReturn line 7, function declared on 3 through 5 and got logged instantly`);
        echo(`hello 3000`, 3000)
            .then((a) => {
                console.log(a);
                echo(`hello again 2000`, 2000)
                    .then((a) => {
                        console.log(a);
                        echo(`hello again 1000`, 1000)
                            .then((a) => {
                                console.log(a);
                            })
                    }).catch((e) => {
                        console.log(`An error ocurred!`);
                        console.log(e);
                    });
            })
    }

    getWords();

    // Callbacks and Recursion
    // Create a function called done that logs Job's done! to the console
    // Create a different function (on the global scope) called countdown that accepts two arguments, num and callback
    //     The goal of this function will be to log a "countdown" from the number passed in as an argument, delayed by 1 second each time, and when it gets to 1, it should execute the callback argument

    function done() {
        console.log(`Job's Done`);
    }

    function countdown(num, callback) {
        if (num > 0 && Number.isInteger(num)) {
            console.log(num);
            setTimeout(() => {
                countdown(num - 1, callback)
            }, 1000)

        } else {
            callback();
        }
    }

    countdown(3, done);

    // Promise
    // Create a new global variable called lunchTime with a value of true
    // Create a new function called orderMeSomeFood that returns a new Promise
    //     Hint: If you're unsure of the correct syntax, check out this CodePen
    // In the resolver function of the Promise, write logic to check if the lunchTime variable is true
    // If lunchTime is true, create an object with two properties and values (key/value pairs) of your choice:
    //     lunch: "your favorite lunch"
    //     drink: "your favorite beverage"
    // Resolve the Promise with your object
    // If lunchTime is false, create a variable and set it equal to a new Error that has your own message
    //     Hint: Check out this page on how to use a new Error
    // Reject the Promise with your new Error
    // Call your orderMeSomeFood function, chain you .then and don't forget your .catch
    // If the promise within the function resolves, it should then log the object it resolved with
    // Swap lunchTime to false, and then the promise should reject with your custom created error and be logged from you .catch
    // Toggle lunchTime and check out the results of your newly created Promise function.

    let lunchTime = true;
    function orderMeSomeFood() {
        return new Promise((resolve, reject) => {
            if (lunchTime == true) {
                let object = {
                    lunch: "Reuben Sandwhich",
                    drink: "Water"
                }
                resolve(object.lunch);
            } else {
                let err = new Error(`something is not correct`);
                reject(err);
            }
        });

    };

    orderMeSomeFood()
        .then((a) => {
            console.log(a);
        }).catch((e) => {
            console.log(e);
        });

        });