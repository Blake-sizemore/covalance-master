// Variables
var creator = "Blake";
console.log(creator);

let lastName = "Sizemore";
console.log(lastName);

const fullName = "Blake Sizemore";
console.log(fullName);

// Array

let names = ["Christopher","Blake","Sizemore"];

console.log(names[0]);

// methods
names.push("this is my full name");
console.log(names);
var name = names.pop();
console.log(name);
console.log(names);

// object
var person = {
    firstName:"Christopher",
    middleName:"Blake",
    lastName:"Sizemore",
    birthYear:1990,
    birthMonth:"May",
    birthDay:9,
    gender: "Male",
    livedPlaces:{
        birth:"GA",
        elementray: ["GA", "MN"],
        middle: ["MN", "IL"],
        high:"IL",
        college: "GA",
        adult: ["NC", "TX", "TN"]
    }
};

// properties
console.log(person.birthMonth);
console.log(person.birthDay);
console.log(person.livedPlaces.middle);
console.log(person.livedPlaces);

