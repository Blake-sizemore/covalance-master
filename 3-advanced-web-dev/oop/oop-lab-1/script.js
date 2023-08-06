$(document).ready(function () {
    //     const p1 = {
    //         name: `Fred`,
    //         greet: () => console.log(`Hello, I am ${p1.name}`)
    //     }
    //     const p2 = {
    //         name: `Ben`,
    //         greet: () => console.log(`Hello, I am ${p2.name}`)
    //     }
    //     const p3 = {
    //         name: `Bill`,
    //         greet: () => console.log(`Hello, I am ${p3.name}`)
    //     }
    //     const p4 = {
    //         name: `Sam`,
    //         greet: () => console.log(`Hello, I am ${p4.name}`)
    //     }
    //     const p5 = {
    //         name: `June`,
    //         greet: () => console.log(`Hello, I am ${p5.name}`)
    //     }

    //     p1.greet();
    //     p2.greet();
    //     p3.greet();
    //     p4.greet();
    //     p5.greet();

    //     class person {
    //         constructor(name, age, city) {
    //             this.name = name;
    //             this.age = age;
    //             this.city = city;
    //         }
    //         sayHey() {
    //             alert(`Hey! My name is ${this.name}, I am ${this.age}, years old and live in ${this.city}`);
    //         }
    //     }

    //     let p6 = new person('Susan', 27, `Chicago`);
    //     let p7 = new person('Chi Chi', 45, `HollyWood`);
    //     let p8 = new person('Chong', 56, `Denver`);
    //     let p9 = new person('Frodo', 14, `Mordor`);
    //     let p10 = new person('Willy', 20, `Factory Town`);

    //     p6.sayHey();
    //     p7.sayHey();
    //     p8.sayHey();
    //     p9.sayHey();
    //     p10.sayHey();

    class vehicle {
        constructor(type, maker, wheels) {
            this.type = type;
            this.maker = maker;
            this.wheels = wheels;
        };
        aboutVehicle() {
            console.log(`This vechile is made by ${this.maker}, is a ${this.type} and has ${this.wheels} wheels`);
        }
    }

    class truck extends vehicle {
        constructor(type, maker, wheels, doors, bed) {
            super(type, maker, wheels);
            this.doors = doors;
            this.bed = bed;
        }

        aboutVehicle() {
            console.log(`This car is made by ${this.maker}, is a ${this.type}, has ${this.wheels} wheels,${this.doors} doors,${this.bed}.`);
        }
    }


    // }
    // class sedan extends vehicle {
    //     constructor(type, maker, wheels, doors, size, mpg) {
    //         super(type, maker, wheels, doors);
    //         this.doors = doors;
    //         this.size = size;
    //         if (this.size = `small`){
    //             this.mpg = 30+`mpg`
    //         } else if (this.size = `medium`){
    //             this.mpg = 20+`mpg`
    //         }else if (this.size = `large`){
    //             this.mpg = 15+`mpg`
    //         };
    //     }
    // }
    // class motorcyles extends vehicle {
    //     constructor(type, maker, wheels, doors, steering){
    //         super(type, maker, wheels, doors)
    //         this.doors = doors;
    //         this.steering = steering;
    //     }
    // }

    let v0 = new vehicle(`Car`, `Toyota`, 2);
    // let v1 = new sedan(`sedan`,`Nissain`, 4,4,`medium`,);
    // let v2 = new sedan(`sedan`,`Honda`, 4,`small`);
    // let v3 = new sedan(`sedan`,`Ford`, 4,`small`);
    let v4 = new truck(`Truck`, `nissain`, 4, 4, `and a bed`);


    v0.aboutVehicle();
    v4.aboutVehicle();

    // class basic {
    //     constructor(){
    //         this.body = 
    //         this.header = 
    //         this.main = main;
    //         this.footer = footer;
    //     }
    // }
});