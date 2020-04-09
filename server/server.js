const express = require('express');
const cors = require('cors');
const port = 3000;

let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public'));
app.listen(port);
