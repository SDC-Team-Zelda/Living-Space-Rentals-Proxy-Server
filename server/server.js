require('newrelic');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

let app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public'));

app.get('/status', (req, res) => res.send({status: "I'm alive!"}));

const port = 3000;

app.listen(port, function() {
  console.log(`Proxy listening on port ${port}`);
});
