const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const { tryCatch } = require("./utils/tryCatch");

const app = express();

const getUser = () => undefined;

app.get("/test", tryCatch(
    async (req, res, next) => {
            const user = getUser();
            if (!user) {
                throw new Error("User not found");
            }
        return res.status(200).json({ success: true });
    })
);



app.post("/login", tryCatch(async (req, res) => {

}));

app.use(errorHandler);

app.listen(4000, () => {
    console.log("Server listening on port 4000");
});