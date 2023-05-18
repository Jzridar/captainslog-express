const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema({
    title:  { type: String, required: true },
    entry:  { type: String, required: true },
    shipIsBroken: {type:Boolean, default:true},
})

const log = mongoose.model('log', logsSchema)

module.exports = log
