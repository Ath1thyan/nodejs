const http = require('http')
const PORT = 3002

const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises
const logEvents = require('./logEvents')
const EventEmitter = require('events')

class Emitter extends EventEmitter{}

const emitter = new Emitter();

emitter.on('log', (msg) => {
    logEvents(msg)
});

const serverFile = async (filePath, contentType, response) => {
    try{
        const rawData = await fsPromises.readFile(filePath, !contentType('image') ? 'utf8' : '');
        const data = contentType === 'application/json'
            ? JSON.parse(rawData) : rawData;
        response.writeHead
    }
    catch(err){
        console.log(err)
    }
}

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     fs.readFile('index.html', (err, data) => {
//         if(err) throw err;
//         res.write(data)
//         res.end()
//     })
// })

server.listen(PORT, (err) => {
    if(err){
        console.log(err)
    }
    console.log(`Server is running on port ${PORT}`)
})