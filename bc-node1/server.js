// const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files', 'start.txt'), 'utf8');
        console.log(data)
        await fsPromises.writeFile(path.join(__dirname, 'files', 'write.txt'), 'Hi, Hello');
        console.log("Write Done!")
        await fsPromises.appendFile(path.join(__dirname, 'files', 'write.txt'), '\n\n Welcome')
        console.log("Append Done!")
        await fsPromises.rename(path.join(__dirname, 'files', 'write.txt'), path.join(__dirname, 'files', 'rename.txt'));
        console.log("Rename Done!")
    }
    catch(err){
        console.log(err)
    }
}

fileOps()


// fs.writeFile(path.join(__dirname, 'files', 'write.txt'), 'Hi, Hello', (err) => {
//     if(err) throw err;
//     console.log("Write Done!")

//     fs.appendFile(path.join(__dirname, 'files', 'write.txt'), '\n\n Welcome', (err) => {
//         if(err) throw err;
//         console.log("Append Done!")
//     })
// })



process.on('uncaughtException', err => {
    console.log(err)
    console.log(err.message)
    process.exit(1)
});