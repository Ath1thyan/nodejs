const express = require("express");
const app = express();
const port = 8000;

app.get("/add/:a/:b", (req, res) => {
    const c = parseInt(req.params.a) + parseInt(req.params.b);
    res
        .status(200)
        .send({ a: `${req.params.a}`, b: `${req.params.b}`, add: `${c}` });
});
app.get("/sub/:a/:b", (req, res) => {
    res
        .status(200)
        .send({
            a: `${req.params.a}`,
            b: `${req.params.b}`,
            sub: `${parseInt(req.params.a) - parseInt(req.params.b)}`,
        });
});
app.get("/mul/:a/:b", (req, res) => {
    res
        .status(200)
        .send({
            a: `${req.params.a}`,
            b: `${req.params.b}`,
            mul: `${parseInt(req.params.a) * parseInt(req.params.b)}`,
        });
});
app.get("/div/:a/:b", (req, res) => {
    res
        .status(200)
        .send({
            a: `${req.params.a}`,
            b: `${req.params.b}`,
            div: `${parseInt(req.params.a) / parseInt(req.params.b)}`,
        });
});

app.get("/mod/:a/:b", (req, res) => {
    res
        .status(200)
        .send({
            a: `${req.params.a}`,
            b: `${req.params.b}`,
            div: `${parseInt(req.params.a) % parseInt(req.params.b)}`,
        });
});

app.get("/arith/:a/:b", (req, res) => {
    const sum = parseInt(req.params.a) + parseInt(req.params.b);
    const dif = parseInt(req.params.a) - parseInt(req.params.b);
    const prd = parseInt(req.params.a) * parseInt(req.params.b);
    const divs = parseInt(req.params.a) / parseInt(req.params.b);
    res.status(200).send({
        data: [
            {
                addition: {
                    a: `${req.params.a}`,
                    b: `${req.params.b}`,
                    sum: `${sum}`,
                },
            },
            {
                subtraction: {
                    a: `${req.params.a}`,
                    b: `${req.params.b}`,
                    sum: `${dif}`,
                },
            },
            {
                multiplication: {
                    a: `${req.params.a}`,
                    b: `${req.params.b}`,
                    sum: `${prd}`,
                },
            },
            {
                division: {
                    a: `${req.params.a}`,
                    b: `${req.params.b}`,
                    sum: `${divs}`,
                },
            },
        ],
    });
});

app.get("/fib/:num", (req, res) => {
    const num = parseInt(req.params.num);
    let num1 = 0;
    let num2 = 1;
    let sum;
    let arr = [num1, num2];
    // arr.push(num2);
    let i = 0;
    for (sum = 0; sum <= num; sum++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        arr.push(num1);
    }

    res.status(200).send({ data: `${arr}` });
});

app.listen(port, () => {
    console.log(`Welcome to port ${port}`);
});
