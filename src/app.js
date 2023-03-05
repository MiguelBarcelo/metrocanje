const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/mongodb');

connectDB();
const app = express();

app.use(cors());

module.exports = app;