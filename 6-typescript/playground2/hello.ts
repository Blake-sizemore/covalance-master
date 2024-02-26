console.log('Comment Tags')
// // TODO comment tags
// ? comment tags
// ~ comment tags
// & comment tags
// ! comment tags
// TODO comment tags
// basic comment tags
// ^ comment tags
// * comment tags

// console.log("hello world");
import $ from 'jquery'

class Counter { 
    count = 150;
    up(){
        return ++this.count;
    }
}

$(document).ready(()=>{
    const counter = new Counter();
    const count = $(`<div class="count">${counter.count}</div>`);

    count.click(()=>{
        count.text(counter.up());
    })

    count.appendTo('body');
})

class MyClass {
    // private title: string
    constructor(public name: string){
        // this.title = "student";
        this.name = name;
    }

    private getName(){
        return this.name;
    }

    public myMethod(){
        console.log(this.name+" public console");
    }
}

class NewClass extends MyClass{

}

let p : IPerson = { name: "blake", age: 21}

let arr: Array<IPerson> = [];

arr.push(p)



function ReturnSelf<T>(o: T):T{
    return o
}

// let me = ReturnSelf<number>(p);

// arr.push('test');
// arr.push(23);
// arr[0]. Now its hard

interface IPerson {
    name: string;
    age: number;
}

let thisClass = new MyClass("Blake"); //  should not be calling abstract class only extend
let thatClass = new NewClass("John");
thisClass.myMethod();
// console.log(thisClass.getName() + " open get name");
// console.log(thatClass.myMethod() + " open method");
// console.log(thatClass.getName() + " open get name");