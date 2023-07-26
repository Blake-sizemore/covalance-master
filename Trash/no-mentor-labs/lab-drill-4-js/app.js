let firstName = "Blake";
const states = 50;
let additionTest = (5 + 4);
const drinkAge = 21;
// console.log(additionTest); should output the vaule 9:
// console.log(states); should always output the vaule 50:
// console.log(firstName); should output the vaule Blake, and can be changed:
let message = "Hello World";

function sayHello(y,x){
    return alert(message);
}
let hello = sayHello(null,null);
// this works becasue the varible enter the arguments which completes the fn computing.:


let id1 = {
    name:'Charles',
    age: 21,
};
let i = checkAge(id1.age,drinkAge);
if (i == true) {
    alert('Sorry '+ id1.name + ', you are not old enough to access this page');
}
let id2 = {
    name: 'Abby',
    age: 27,
};
let e = checkAge(id2.age,drinkAge);
if (e == true) {
    alert('Sorry '+ id2.name + ', you are not old enough to access this page')
}
let id3 = {
    name:'James',
    age:18,
};
let o = checkAge(id3.age,drinkAge);
if (o == true) {
    alert('Sorry '+ id3.name + ', you are not old enough to access this page')
}
let id4 = {
    name:'John',
    age: 17,
};
let u = checkAge(id4.age,drinkAge);
if (u == true) {
    alert('Sorry '+ id4.name + ', you are not old enough to access this page')
}

// step 10:
let veg = ['carrots', 'celery', 'potatoes', 'lettuce', 'onions', 'squash']
for(let v = 0; v < veg.length; v++){
    console.log(veg[v]);
}
// step 11: 
let pet = {
    name: "Berry",
    breed: "Great Pyrenese",
}
console.log(pet.name,pet.breed);
//step 12:
let id5 = {
    name:'Lisa',
    age: 28,
};
let id6 = {
    name: 'Susan',
    age: 24,
};
let id7 = {
    name:'Max',
    age:7,
};
let id8 = {
    name:'Bill',
    age: 14,
};
let id9 = {
    name:'Ben',
    age: 32,
};
// step 13:
let ids1 = [id5,id6,id7,id8,id9];
for(let a = 0; a < ids1.length; a++) {
    if (checkAge(ids1[a].age,drinkAge)) {
        alert('Sorry '+ ids1[a].name + ', you are not old enough to access this page')
    } //else { alert('Congrats  '+ ids[a].name + ', you can enter') }:
}
//step 14:
let length = getLength('Hello World')
if (length % 2 == 0 ){
    console.log ( 'The world is an even place!')
} else {
    console.log ("The world is an odd place!")
}
// function;
function checkAge(x,y){
    return (x < y);
} 

function getLength (x) { 
    return (x.length);
}