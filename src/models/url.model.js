const mongoose = require('mongoose');   

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true,
        unique: true
    },
    shortCode: {
        type: String,
        required: true,
        unique: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Url', urlSchema);