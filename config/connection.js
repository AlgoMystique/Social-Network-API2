// config/connection.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sababatasnim29:ilove29@cluster0.bxl2y.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;