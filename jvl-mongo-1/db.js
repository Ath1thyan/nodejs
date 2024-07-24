const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

let database;

async function getDatabase() {
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017')
    database = client.db('library');

    if (!database) {
        console.log('Database connection failed')
    }

    console.log('Connected to database')
    return database;
}

module.exports = getDatabase;