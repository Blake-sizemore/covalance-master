console.log('please work');
// // tester
const nameOne: string = 'Blake';
// ? why the error so fast -  TS  is showing that it already exist.
// ! That is what TS is so good

// ! myName can only be a string no matter what.
let nameString: string = 'Blake';
let numberOne: number = 1;
let trueFalse: boolean = false;

const nameStringArr: string[] = ['Blake', ""];
const numberOneArr: number[] = [1, 0];

// ! Object - slow way
const objectItem: { nameString: string; numberOne: number; trueFalse: boolean; nameStringArr: string[]; numberOneArr: number[] } = {
    nameString: 'Bob',
    numberOne: 2,
    trueFalse: true,
    nameStringArr: ['Blake', "Karen"],
    numberOneArr: [2, 1, 0]
}

// ^ Interface object - fast way

interface interfaceName {
    nameString: string;
    numberOne: number;
    trueFalse?: boolean;
    nameStringArr?: string[];
    numberOneArr?: number[]
}

const objectInter: interfaceName = {
    nameString: 'Bob',
    numberOne: 2,
    trueFalse: true,
    nameStringArr: ['Blake', "Karen"],
    numberOneArr: [2, 1, 0]
}

interface thingface {
    nameString: string;
    age: number;
}


const thing: thingface[] = [
    {
        nameString: 'blake',
        age: 0
    },
    {
        nameString: 'nod',
        age: 4
    },
    {
        nameString: 'top',
        age: 1
    }
]

const thing2: interfaceName[] = [
    {
        nameString: 'blake',
        numberOne: 0
    },
    {
        nameString: 'nod',
        numberOne: 4
    },
    {
        nameString: 'top',
        numberOne: 1
    }
];

function doStuff():void{
    console.log('no change');
} 
doStuff();
// ! Does not return something just logs
// ? void means nothing gets created

function doStuff2(num: number):number {
    return num+1;
} 

doStuff2(thing[1].age);
for ( const friend of thing ){
    doStuff2(friend.age);
}
doStuff2(thing[1].age);

// * <T> Generics - also for a function that is dynamic. 
// ^ AKA I AM A TYPE THAT YOU ADDRESS WHEN YOU CALL

function doStuff4<T>(test: T):T {
    return test;
} 
doStuff4(thing[1].age);
for ( const friend of thing ){
    doStuff4<number>(friend.age);
    doStuff4<string>(friend.nameString);
}