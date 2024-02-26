// Barebones - datalayer - NOT IN A ROUTER
// ! NEVER DO router.get
// ^ Typescript notes
// * progress: install npm i -D typescript ts-node @types/node

// make sure you npm init
// make sure mysql2 is installed version 8.1 has better authen, online = 5.x, msql 2 handles older versions
// * changed from const/require
import  mysql from "mysql2"; // pulls in all functions from the mysql2 install

const connection = mysql.createConnection({ // 4 min required to connect to database
    host: "localhost", // whats running
    user: "node-user", // do not use root pasword/user, root user can make other users, they can fully
    password: "pswd_node", // 
    database: "node_connect" // name of  the scheme we want to use
});
//always limit development areas via user access


connection.connect((err) => {
    if (err) {
        console.log("error making connect to database db", err);
        throw err;
    }
    console.log("success on connection");
});

// connection.query("select u.name, u.created_at from users u where id=2;", (err,results)=>{
// 
// connection.query("INSERT INTO users (id, name, email) VALUES (11,'toad','toad@nintendo.com');", (err, ResultSetHeader) => {
connection.query("select * from users;", (err, ResultSetHeader) => {

    if (err) {
        console.log("error making result query db");
        throw err;
    }

    // returns an array of possible table {objects}
    // insert always return:
    /* 
    ResultSetHeader  
    {
        fieldcount: 0 
        affectedRows: 1, if larger than you multi-functions 
        insertId: 0, if we using the mysql auto-increment
        info: '',
        serverStatus: 2,
        warningStatus: 0,
        changedRows: 0
    }
    */
    console.log(ResultSetHeader);
});

connection.end((err) => {
    if (err) {
        console.log("error making end to database db");
        throw err;
    }
    console.log("success on server end");
});



