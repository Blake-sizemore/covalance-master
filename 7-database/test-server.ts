// & Main utility promise
import express from "express";
import mysql from "mysql2/promise"; // pulls in all functions from the mysql2 install
import type { ResultSetHeader, RowDataPacket } from "mysql2";
// * moved connection pool to src/db
// * whats left over is choosing what to 

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

// & Modify/update/insert Statement
async function ModifyQuery(queryString: string): Promise<ResultSetHeader> {
    const [results] = await pool.execute(queryString);
    return results as ResultSetHeader;
}
// & Utility calls
SelectQuery<Partial<IUserRow>>("Select * from users;")
    .then(users => console.log(users))
    .catch(e => console.log(e));


function getAllUsers() {
    return SelectQuery<IUserRow>("select * from users;");
}

const db = {
    users: {getAll: getAllUsers}
}

const app = express();

// IS this an api server-side route(postman,fetch request,CRUD application) or client side  (viewing interface)
app.get('/api/users', async (req, res) => {
    try {
        const users = await db.users.getAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error}' })
    }
});

const port = 3000;
app.listen(port, ()=> console.log(`server is running on port ${port}`));
// TEST THE SET UP using cURL in a terminal - had to correct the index.js