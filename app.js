const express = require('express');
const app = express();

const port = 3000
app.get('/', (req, res) =>{
    res.send('Hello World');
});

module.exports = app; // Export the app for testing