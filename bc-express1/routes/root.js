const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'))
})
router.get('/page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'page.html'))
})
router.get('/new(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'new.html'))
})
router.get('/old(.html)?', (req, res) => {
    res.redirect(301, 'new.html')
})
router.get('/hello(.html)?', (req, res, next) => {
    console.log('hello loading')
    next()
}, (req, res) => {
    res.send('Hi hello')
})

module.exports = router