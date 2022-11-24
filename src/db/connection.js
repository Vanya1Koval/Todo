const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb://root:root@localhost:27017", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

module.exports = { connect };