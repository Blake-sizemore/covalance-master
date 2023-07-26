// name = 'blake'
// var name;
// console.log(name);
// shows name even out of order due to hositing

// name = 'blake'
// let name;
// console.log(name);
// shows Error Reference because let stop hositing

// setName();
// function setName(){
//     var name= 'blake';
//     console.log(name);    
// }
// shows name even out of order due to hositing, functions get pulled up

// console.log('start');
// console.log(avg(2,2));
// console.log('mid');
// function avg(a,b){
//     let add = a+b;
//     console.log(add);
//     console.log(arguments);
//     console.log(arguments.length);
//     return add / arguments.length;
// }
// console.log('end');
// The result of the above code shows that the function gets pulled above the "mid" console.

someFunc();
let fruits = ['apple', 'oranges', 'bananas'];
// let favFruit;
function printFruit() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }
    printFavFruit()
    let leastFavFruit = fruits[1];
    function printLeastFruit() {
        console.log(leastFavFruit);
    }
}
// function printfavFruit() {
//     console.log(favFruit);
// }
printFruit();
// printfavFruit(); 
// leastFavFruit();
function someFunc() {
    console.log('hello');
}

let func = function () { alert('hello again'); }
func();


