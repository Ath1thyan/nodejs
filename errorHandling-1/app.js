const express = require("express");

const app = express();

const getUser = () => undefined;

app.get("/test", async (req, res) => {
    try {
        const user = getUser();
        if (!user) {
            throw new Error("User not found");
        }
    } catch (error) {
        console.log(error);
        next
    }
    return res.status(200).json({ success: true });
});


app.post("/login", async (req, res) => {
    try {
        const user = getUser();
        if (!user) {
            throw new Error("User not found");
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
    return res.status(200).json({ success: true });
});

app.listen(4000, () => {
    console.log("Server listening on port 4000");
});