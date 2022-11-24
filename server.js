const express = require("express");
const cors = require('cors')
const { connect } = require("./src/db/connection.js");
const router = require("./src/routes");

const app = express();

app.use(cors())
app.use(express.json());
app.use('/static', express.static(__dirname + '/public'));
app.use(router);
app.use((req, res) => {
    res.status(404).send({ status: 404, message: 'Not Found' });
  });

const port = process.env.PORT || 5000;

connect.then(()=> {
    app.listen(port, function() {
        console.log(`server running at port ${port}`);
    });
});