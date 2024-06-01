const express = require('express')
const app = express()
const path = require('path')
const PORT = 3500

app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'page.html'))
})
app.get('/new(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'new.html'))
})
app.get('/old(.html)?', (req, res) => {
    res.redirect(301, 'new.html')
})
app.get('/hello(.html)?', (req, res, next) => {
    console.log('hello loading')
    next()
}, (req, res) => {
    res.send('Hi hello')
})

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

app.get('/*', (req, res) => {
    // res.status(404).send('Page not found')
    res.status(404).sendFile(path.join(__dirname, '404.html'))
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})