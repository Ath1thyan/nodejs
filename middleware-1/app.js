const express = require ('express');

const app = express();

const logger = async (req, res, next) => {
    console.log(req.path);
    next();
};

const validateUseer = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.send("Not Authorized");
    }
    req.userId = 1;
    next();
}

const postsMiddleware = async (req, res, next) => {
    console.log("posts middleware");
    next();
}

app.use(logger);
app.use("/posts", postsMiddleware);

app.get("/users", validateUseer, (req, res) => {
    console.log(req.userId);
    res.send("users");
});

app.get("/posts", async (req, res) => {
    res.send("posts");
});

app.listen("4000", () => {
    console.log("server is running on port 4000");
});