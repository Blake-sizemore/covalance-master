// & Main utility promise
import express from "express";
import mysql from "mysql2/promise"; // pulls in all functions from the mysql2 install
import type { ResultSetHeader, RowDataPacket } from "mysql2";

const pool = mysql.createPool({ // 4 min required to connect to database
    host: "localhost", // whats running
    user: "node-user", // do not use root pasword/user, root user can make other users, they can fully
    password: "pswd_node", // 
    database: "node_connect", // name of  the scheme we want to use
});

interface IUserRow extends RowDataPacket {
    id: string;
    name: string;
    email: string;
    created_at: string;
}

// & Utility code: 
// & Select Statment
async function SelectQuery<T>(queryString: string): Promise<T[]> {
    const [results] = await pool.execute(queryString);
    return results as T[];
}

// & Modify Statement
async function ModifyQuery(queryString: string): Promise<ResultSetHeader> {
    const [results] = await pool.execute(queryString);
    return results as ResultSetHeader;
}
// Utility calls
SelectQuery<Partial<IUserRow>>("Select * from users;")
    .then(users => console.log(users))
    .catch(e => console.log(e));

// ModifyQuery("update users set name = 'updated' where id=11;")
//     .then(res => console.log(res))
//     .catch(e => console.log(e))

function getAllUsers() {
    return SelectQuery<IUserRow>("select * from users;");
}

const app = express();

const db = {
    users: {
        getAll: getAllUsers
    }
}

db.users.getAll()
    .then(users => console.log(users))
    .catch(e => console.log(e))

app.get('/api/users', async (req, res) => {
    try {
        const users = await db.users.getAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'internal server error}' })
    }
});

const port = 3000;
app.listen(port, ()=> console.log(`server is running on port ${port}`));