
// always need the below two
const path = require('path');
const fs = require('fs');

// concatenate mutiple files together
const employeesFile = path.join(__dirname, '../data/employees.json');

// __dirname == whatever current location the computer is on

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json()) // res.text // turn all items to a string
    .then((users) => {
        users.forEach(user => {
            delete user.address;
        });
        fs.writeFile(employeesFile, JSON.stringify(users), (err) => {
            if (err) {
                console.log(err);
            }
        }); //writeFile is async and writefilesync is inline sync
    })