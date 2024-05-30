const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('DataModel',DataSchema)