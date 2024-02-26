// Barebones - datalayer - NOT IN A ROUTER

// ! NEVER DO router.get

// ^ Typescript notes

// * progress: install npm i -D typescript ts-node @types/node

// make sure you npm init
// make sure mysql2 is installed version 8.1 has better authen, online = 5.x, msql 2 handles older versions

// * changed from const/require

// import  mysql from "mysql2"; // pulls in all functions from the mysql2 install
// & Main utility promise
import mysql from "mysql2/promise"; // pulls in all functions from the mysql2 install
import type { ResultSetHeader, RowDataPacket } from "mysql2";
// * change connection to pool - connects to a multi lane road with auto control
const pool = mysql.createConnection({ // 4 min required to connect to database
    host: "localhost", // whats running
    user: "node-user", // do not use root pasword/user, root user can make other users, they can fully
    password: "pswd_node", // 
    database: "node_connect", // name of  the scheme we want to use
    // 9 
    connectionLimit: 10,
    maxIdle: 10
});
interface IUserRow extends RowDataPacket {
    id: string;
    name: string;
    email: string;
    created_at: string;
}

// & Utility code
async function SelectQuery<T>(queryString: string): Promise <T[]> {
    const [results] = await pool.execute(queryString);
    return results;
}
//always limit development areas via user access


// pool.connect((err) => {
//     if (err) {
//         console.log("error making connect to database db", err);
//         throw err;
//     }
//     console.log("success on connection");
// });

// connection.query("select u.name, u.created_at from users u where id=2;", (err,results)=>{
// 
// connection.query("INSERT INTO users (id, name, email) VALUES (11,'toad','toad@nintendo.com');", (err, ResultSetHeader) => {
// * change to  execute = query with diff, 
// * execute has more guards and sends escape files preventing injection, used for prepared statements and seps out the mysql out
// pool.execute("select * from users;", (err, results) => {

//     if (err) {
//         console.log("error making result query db");
//         throw err;
//     }

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
    //    * this works becasue the result is an array and so think 
    // * let results = [0{},1{},2{}]


    // * Array<partial<interface[]>> if you plan to join as not
    // & Also see utility code
    // const users = results as Partial<IUserRow>[];
    // console.log(users[0].name);

    // users.forEach(user => console.log(user.name));
});

pool.end((err) => {
    if (err) {
        console.log("error making end to database db");
        throw err;
    }
    console.log("success on server end");
});



