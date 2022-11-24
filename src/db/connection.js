require('dotenv').config();
const mongoose = require("mongoose");

const connect = mongoose.connect(process.env.DATABASE_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

module.exports = { connect };