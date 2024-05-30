const express = require('express');
const app = express();
const port = 8000;

const { Pool } = require('pg')
const db = new Pool({
    host : '127.0.0.1',
    user : 'postgres',
    password : 'password',
    port : 5432,
    database : 'postgres'
})

app.post("/user", async(req, res) => {
    let name = req.query.name;
    let phone = req.query.phone;
    let uid = req.query.uid;
    if(name&&phone&&uid) {
        let users = await db.query("select from users where name = $1, phone = $2, uid = $3", [name,phone,uid])
        if (!(users && users.rowCount !== 0)){
            let users = await db.query("INSERT INTO users (name, phone, uid) VALUES($1 ,$2 ,$3)", [name,phone,uid])
            res.send("success")
        } else {
            res.send("already exists")
        }
    }
    else{
        res.send("failed")
    }
})
app.get("/users", async(req, res) => {
    let users = await db.query("select * from users")
    res.send({"data" : users.rows})
})

app.get("/", (req, res) => {
    res.send("welcome")
})


app.listen(port)