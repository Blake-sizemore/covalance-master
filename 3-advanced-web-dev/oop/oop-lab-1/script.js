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

    // constructor(type, maker, wheels, doors, size, mpg, bed, control, steering, script,)

    class automobile {
        constructor(type, maker, wheels, script) {
            this.type = type;
            this.maker = maker;
            this.wheels = wheels;
            this.script = script = `This automobile is a ${this.type} made by ${this.maker} which has ${this.wheels} wheels`;
        };
        aboutAuto() {
            console.log(this.script);
        };
    };
    class truck extends automobile {
        constructor(type, maker, wheels, doors, bed, script) {
            super(type, maker, wheels, script);
            this.doors = doors;
            this.bed = bed;
        }
        aboutAuto() {
            if (this.bed == undefined) {
                console.log(this.script.concat(`, and has ${this.doors} doors`));
            } else {
                console.log(this.script.concat(`, and has ${this.doors} doors plus a truck bed.`));
            }
        }
    }

    class sedan extends automobile {
        constructor(type, maker, wheels, doors, size, script) {
            super(type, maker, wheels, doors, script);
            this.size = size;
            this.doors = doors;
        }

        aboutAuto() {
            let mpg = [`30 mpg`, `20 mpg`];
            if (this.size == `small`) {
                console.log(this.script.concat(`, and has ${this.doors} doors. This is a ${this.size} and gets ${mpg[0]}.`));
            } else if (this.size == `medium`) {
                console.log(this.script.concat(`, and has ${this.doors} doors. This is a ${this.size} and gets ${mpg[1]}.`));
            };
        }
    }

    class motorcyles extends automobile {
        constructor(type, maker, wheels, script) {
            super(type, maker, wheels, script)
        }
        aboutAuto() {
            if (this.wheels == 2) {
                console.log(this.script.concat(`, and has 0 doors.It can not go in reverse and has handlebars.`));
            }
        }
    }

    let v0 = new automobile(`Car`, `Toyota`, 2, 2);
    v0.aboutAuto();
    let v1 = new truck(`Truck`, `Nissan`, 4, 2);
    v1.aboutAuto();
    let v2 = new truck(`Truck`, `Nissan`, 4, 2, `bed`);
    v2.aboutAuto();
    let v3 = new sedan(`Sedan`, `BMW`, 4, 4, `small`);
    v3.aboutAuto();
    let v4 = new sedan(`Sedan`, `BMW`, 4, 4, `medium`);
    v4.aboutAuto();
    let v5 = new motorcyles(`Motorcycle`, `Harley`, 2,);
    v5.aboutAuto();
    // let v0 = new vehicle(`Car`, `Toyota`, 2);
    // let v1 = new sedan(`sedan`,`Nissain`, 4,4,`medium`,);
    // let v2 = new sedan(`sedan`,`Honda`, 4,`small`);
    // let v3 = new sedan(`sedan`,`Ford`, 4,`small`);
    // let v4 = new truck(`Truck`, `nissan`, 4, 4);


    // v0.aboutVehicle();
    // s

    // class basic {
    //     constructor(){
    //         this.body = 
    //         this.header = 
    //         this.main = main;
    //         this.footer = footer;
    //     }
    // }
});