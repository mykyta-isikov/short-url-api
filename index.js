const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();

// Settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL connection
const dbConnection = require('./utils/dbConnection');
global.connection = mysql.createConnection(dbConnection);
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        connection.end();
    }
});

// Routers
const make = require('./routes/make');
const counter = require('./routes/counter');
const show = require('./routes/show');

// Middleware
const isValidUrl = require('./middleware/isValidUrl');
const linkExists = require('./middleware/linkExists');

// Routes
app.post('/m', isValidUrl, make);
app.get('/c/:id', linkExists, counter);
app.get('/s/:id', linkExists, show);

// Error handlers
app.use((req, res) => res.status(404).end());
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).end();
});

const port = process.env.PORT || 3000;
app.listen(port);