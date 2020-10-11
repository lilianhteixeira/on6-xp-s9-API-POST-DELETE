const express = require('express');
const app = express();

const post = require('./routes/post-routes');

app.use(express.json());
app.use('/', post);

module.exports = app;

