
Simple ES2015 (aka ES6) Drills
Objectives

The objective of this lab assignment is to practice ES6 fundamentals that were explored in lecture.
Template Literals and Default Parameters Value

    Declare a new function named favMovie that takes in one parameter.
    Inside the function log a message to the console that tells the user what your favorite movie is. Note: Use template literals. Example:

    function favMovie(movie) {
        console.log(`my favorite movie is ${movie}`);
    }

    Call the function without an argument.

    Open your developer tools and view what is printed in the console. You should see your message and parameter is undefined.

    Now pass in the argument, your favorite movie, when you call the function, update the parameter of the function to have a default value of “The Room”.

    Call the function without passing a movie name of your own, take note to what is printed as the movie in the console.

    Refresh your browser and you should now see your message and the parameter is defined.

    Add another parameter to your function so you can pass it a name, give this parameter a default value of “Tommy Wiseau”.

    Update the string so that you include your name in the message. Example:

    console.log(`my name is ${name} and my favorite movie is ${movie}`);

    Call function favMovie by passing it values for both a movie and a name, and also call it without passing it anything. Do the default values appear in the console?

Arrow Functions

    Change the favMovie function to an ES6 Arrow Function.
    Call the function.
    Verify that your message is still logged in the console.
    Use the shorthand "concise body" syntax for this arrow function so that the console.log statement is on the same line as the arrow.
    Create a new arrow function called getFirstName.
    Create a second arrow function called getFirstNameConcise using the concise body syntax. Both functions will serve the same purpose.
    Each function will accept one string that will be someone’s full name.
    When the full name is passed to the function, the function should return the first name. (hint)
    Console log the returned output of these functions to confirm you see a first name only.
    Create a new function named doMath that will take in two parameters and return an object literal. It should have two properties, the exponent result (x^y) and the product of the two numbers.
    Log each property using a template literal.

Hints

    The split method is used to split a string into an array of substrings, and returns the new array.

Spread Syntax

    Write a function that takes 3 parameters: name, location, favFood and logs them to the console (either separately or all at once using a template literal).
    Create an array with 3 values, have the values match the order of the 3 parameters. Ex. let arr = ["Paul", "Birmingham", "Kimchi"];
    Spread operators allow us to take multiple values, like an array, and insert them as 3 separate values. Using a spread operator, insert the values of the array into the function, check the console and see what appears.
    Create a variable and set the value to your name.
    Write a function that takes a parameter, name the parameter whatever you’d like.
    Using spread syntax, create a variable in the function that takes the string you pass into the function and spreads it into an array.
    Using a for loop, loop through the spread string and console log each value of the string.
    Call the function created in step 5 by passing in the variable created in step 4.

