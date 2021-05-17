const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    data: {
        type: String,
    }
})

module.exports = mongoose.models.Test || mongoose.model('Test', TestSchema);
