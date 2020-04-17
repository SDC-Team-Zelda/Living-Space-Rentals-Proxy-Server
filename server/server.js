require('newrelic');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

let app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public'));

app.get('/status', (req, res) => res.send({status: "I'm alive!"}));

app.get('/loaderio-194aceb21692d7943adc082c29a5a5de.txt', cors(), function (req, res) {
  res.sendFile(path.join(__dirname, './public/loaderio-194aceb21692d7943adc082c29a5a5de.txt'))
});

const port = 3000;

app.listen(port, function() {
  console.log(`Proxy listening on port ${port}`);
});
