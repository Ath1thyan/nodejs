const express = require('express');
const app = express();
const Joi = require("joi");

app.use(express.json());

const signupSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(10).required(),
});

app.post('/signup', (req, res) => {
    const {error, value} = signupSchema.validate(req.body, {
        abortEarly: false,
    });

    if (error) {
        console.log(error.details);
        return res.send("Invalid request");
    }

    res.send('Successfully signed up');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})