var path = require('path');
var fs = require('fs');
var dataPath =  path.join(__dirname, 'data.json');

// console.log(path.join(__dirname, '../data.json'));

fs.readFile(dataPath,{
    encoding: 'UTF-8'
}, (err, data)=> {
    var person = JSON.parse(data);
    console.log( person.firstName,person.middleName,person.lastName);
})


