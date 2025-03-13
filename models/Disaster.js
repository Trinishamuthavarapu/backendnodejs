const mongoose = require('mongoose');

const disasterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    severity: { type: String, enum: ['Low', 'Moderate', 'High'], required: true },
    date: { type: Date, default: Date.now },
    description: { type: String }
});

module.exports = mongoose.model('Disaster', disasterSchema);
