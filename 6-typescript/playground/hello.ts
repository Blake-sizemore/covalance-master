let name2: string = 'test';

name2 = "24"; 
// name2 = 24;

function Greeting(name: string){
    $("#name").html(`hello ${name}!`);
    // go to index set-up jquery using script
    
    console.log(`hello ${name}!`);
}

Greeting("24");

function Greeting2(options: {name: string}){
    console.log(`hello ${options.name}!`);
}

Greeting2(
    {
        name: "tester"
    }
);

let num: number;
num=0;
const anExampleVariable = "Hello World"
++num;
console.log(anExampleVariable + num);


