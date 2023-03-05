const express = require('express');
const cors = require('cors');

// configs
const connectDB = require('./configs/mongodb');
// routes
const Routes = require('./routes');

connectDB();
const app = express();

app.use(cors());

app.use('/api/', Routes.auth);
app.use('/api/', Routes.classrooms);
app.use('/api/', Routes.professors);
app.use('/api/', Routes.students);
app.use('/api/', Routes.transactions);
app.use('/api/', Routes.users);

module.exports = app;