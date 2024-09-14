const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

let database;
// mongodb+srv://divyanshgaba2017:xjeJJeDvoQPF544J@cluster0.on2ct.mongodb.net/
async function getDatabase() {
    const client = await MongoClient.connect('mongodb://localhost:27017')
    database = client.db('test-library');

    if (!database) {
        console.log('DB not connected');
    }
    return database;
}

module.exports = {
    getDatabase,
}