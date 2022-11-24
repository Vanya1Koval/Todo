const express = require("express");
const cors = require('cors')
const { connect } = require("./db/connection.js");
const router = require("./routes");

const app = express();

/**
  * Create record
  * @param  {Object} payload object with fields for creating record
  */
app.use(cors())
app.use(express.json());
app.use('/static', express.static(__dirname + '/public'));
app.use(router);
app.use((req, res) => {
    res.status(404).send({ status: 404, message: 'Not Found' });
  });

connect.then(()=> {
    app.listen(3000, function() {
        console.log("server running at port 3000");
    });
});