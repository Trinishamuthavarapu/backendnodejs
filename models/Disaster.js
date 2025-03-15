const mongoose = require("mongoose");

const DisasterSchema = new mongoose.Schema({
  type: String,
  location: String,
  description: String,
  lat: Number,
  lng: Number,
});

module.exports = mongoose.model("Disaster", DisasterSchema);
