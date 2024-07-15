const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  name: String,
  url: String,
  location: String,
  weather: String
});

module.exports = mongoose.model('Photo', photoSchema);
