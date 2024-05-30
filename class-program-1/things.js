var express = require('express')
var router = express()

router.get('/', (req, res) => res.send('Hello World'))
router.get('/hell', (req, res) => res.send('Hell'))
router.get('/:name/:id', (req, res) => res.send('Id is: ' + req.params.id + 'name is: ' + req.params.name))

module.exports = router;