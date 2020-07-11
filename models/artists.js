const mongoose = require('mongoose');

const artistsSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Portfolio: {
        type: String
    },
    Photo: {
        type: String
    },
    Admin: {
        type: Boolean,
        default: false
    },
    Deleted: {
        type: Boolean,
        default: false
    } 
});

module.exports = mongoose.model('ArtWorks', artistsSchema);