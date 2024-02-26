var path = require('path');

console.log(__dirname);
// outputs C:\source\nodefun

console.log(path.join(__dirname,'data.json'))
// outputs C:\source\nodefun\data.json



// Sample to show how js can run in terminal via 'node index.js'
var greeting ="hello World";

for ( var i = 0; i< 100; ++i){
    console.log( `output`+i);
}
console.log(greeting);