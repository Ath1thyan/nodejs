const express = require('express');
const app = express();
const port = 8000;

app.get("/users", (req, res) => {
    res.status(200).send({"page" : "users"});
})

app.post("/user", (req, res) => {
    res.status(200).send({"page" : "user"});
})

app.put("/user/:id", (req, res) => {
    res.status(200).send({"page" : `${req.params.id}`});
})

app.delete("/user/:id", (req, res) => {
    res.status(200).send({"page" : `${req.params.id}`});
})

app.get("/", (req, res) => {
    // const r = JSON.stringify(req);
    res.status(200).send({"page" : "Home"});
})

app.listen(port, () => {
    console.log(`Welcome to port ${port}`);
})