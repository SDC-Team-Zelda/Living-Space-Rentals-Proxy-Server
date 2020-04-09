require('newrelic');
const express = require('express');
const cors = require('cors');
const port = 3000;
const morgan = require('morgan');

let app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public'));
app.listen(port);
