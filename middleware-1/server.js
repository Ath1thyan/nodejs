const express = require('express');
const app = express();

app.use(logger)

app.get('/', (req, res, next) => {
    console.log("Home");
    res.send('Hello World!');
    next();
});

app.get('/user', auth, test, (req, res) => {
    console.log("user")
    res.send('Hello user!');
});



function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
};

function auth(req, res, next) {
    if (req.query.admin === 'true') {
        next()
    } else {
        res.send('Not authorized')
    }
};

function test(req, res, next) {
    console.log("Test")
    next()
};


app.listen(4000);