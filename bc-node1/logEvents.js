const { format } = require('date-fns')
const {v4: uuid} = require('uuid')

const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises

const logEvents = async (event) => {
    const dateTime = `${format(new Date(), 'dd-MM-yyyy\tHHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${event}\n`
    try{
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventFile.txt'), logItem)
    } catch(err){
        console.log(err)
    }
}

// console.log(uuid())
// console.log(format(new Date(), 'yyyy-MM-dd HH:mm:ss'))

module.exports = logEvents