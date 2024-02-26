const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');

let app = express();

// require('express').use(cors());

app.use(cors());
//
app.use(express.json());
//
app.use('/api',apiRouter);
//
app.listen(3000);