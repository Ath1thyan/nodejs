const express = require('express');
const router = express.Router();
const path = require('path');
const logger = require('morgan');
const multer = require('multer');


// Multer configuration
const upload = multer({dest: "./public/uploads"});

const app = express();

const port = 4000;


// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, 'public')));


// Application level middleware
const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date()} --- [${req.method}] --- [${req.url}]`);
    next();
}

app.use(loggerMiddleware);
app.use(logger("combined"));
// app.use(logger("dev"));



// Route level middleware
app.use("/api/users", router);

const fakeAuth = (req, res, next) => {
    const authStatus = true;
    if (authStatus) {
        console.log("User auth status: " + authStatus);
        next();
    }
    else {
        res.status(401).send("Unauthorized");
    }
};

const getUsers = (req, res, next) => {
    res.json({ message: "GET users" });
};
const createUser = (req, res, next) => {
    console.log("Req body from client: ", req.body)
    res.json({ message: "Create new user" });
};

router.use(fakeAuth);
router.route("/").get(getUsers).post(createUser);



// 404 handler for undefined routes
// app.use((req, res, next) => {
//     res.status(404).json({
//         title: "Not Found",
//         message: `The route ${req.originalUrl} does not exist.`,
//     });
// });

// Error handling middleware
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    switch (statusCode) {
        case 401:
            res.json({
                title: "Unauthorized",
                message: err.message,
            });
            break;
        case 404:
            res.json({
                title: "Not Found",
                message: err.message,
            });
            break;
        case 500:
            res.json({
                title: "Internal Server Error",
                message: err.message,
            });
            break;
    }
};

app.post("/upload", upload.single("image"), (req, res, next) => {
    console.log(req.file, req.body);
    res.send(req.file);
}, (err, req, res, next) => {
    res.status(400).send({err: err.message})
})

app.all("*", (req, res) => {
    res.status(404);
    throw new Error("Route not found");
})

app.use(errorHandler);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})