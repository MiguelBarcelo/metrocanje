const express = require('express');
const cors = require('cors');

// configs
const connectDB = require('./configs/mongodb');
// routes
const Routes = require('./routes');

connectDB();
const app = express();

app.use(cors());
app.use(express.json())

app.use('/api/auth', Routes.auth);
app.use('/api/classrooms', Routes.classrooms);
app.use('/api/professors', Routes.professors);
app.use('/api/students', Routes.students);
app.use('/api/transactions', Routes.transactions);
app.use('/api/users', Routes.users);

module.exports = app;