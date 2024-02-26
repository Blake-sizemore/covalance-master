"use strict";
var name2 = 'test';
name2 = "24";
// name2 = 24;
function Greeting(name) {
    $("#name").html("hello ".concat(name, "!"));
    // go to index set-up jquery using script
    console.log("hello ".concat(name, "!"));
}
Greeting("24");
function Greeting2(options) {
    console.log("hello ".concat(options.name, "!"));
}
Greeting2({
    name: "tester"
});
var num;
num = 0;
var anExampleVariable = "Hello World";
++num;
console.log(anExampleVariable + num);
