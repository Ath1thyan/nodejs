const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const exbs = require('express-handlebars');
const dbo = require('./db');

app.engine('hbs', exbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: 'views/',
}))
app.set('view engine', 'hbs');
app.set('views', 'views');

app.get('/', async (req, res) => {
    let database = await dbo.getDatabase();
    const collection = database.collection('books');
    const cursor = collection.find({})
    let employees = cursor.toArray();

    let message = '';
    res.render('main', {message, employees})
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})

//mongodb://localhost:27017