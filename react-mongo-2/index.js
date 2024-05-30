const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const route = require('./routes/userRoute')

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGOURL;

mongoose.connect(URL)
  .then(() => {
    console.log('DB connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('DB connection error', error);
  });


app.use('/api', route)