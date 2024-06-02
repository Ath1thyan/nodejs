const express = require('express')
const app = express()
const {logger} = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')
const path = require('path')
const cors = require('cors')
const PORT = 3500

// Cross Origin Resource Sharing
const whiteList = ['https://www.google.com', 'http://127.0.0.1:5500', 'http://localhost:3500']
const corsOptions = {
    origin: (origin, callback) => {
        if(whiteList.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}

//middlewares
// app.use((req, res, next) => {
//     logEvents(`${req.method}\t ${req.headers.origin}\t ${req.url}`)
//     console.log(`${req.method} ${req.path}`)
//     next()
// })
app.use(logger)
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))
app.use('/views', require('./routes/subdir'))
app.use('/employees', require('./routes/api/employees'))


const one = (req, res, next) => {
    console.log('one')
    next()
}
const two = (req, res, next) => {
    console.log('two')
    next()
}
const three = (req, res, next) => {
    console.log('three')
    res.send('Finished')
}

app.get('/chain(.html)?', [one, two, three])

// app.get('/*', (req, res) => {
//     res.status(404).sendFile(path.join(__dirname, '404.html'))
// })

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '404.html'))
    }
    else if (req.accepts('json')) {
        res.json({"error": '404 Not found'})
    }
    else {
        res.type('txt').send('404 Not found')
    }
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})