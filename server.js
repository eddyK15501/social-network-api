// CommonJS import statements
const express = require('express');
const db = require('./config/connection');

const PORT = 3001;
const app = express();

// Middleware for parsing JSON requests/responses
app.use(express.json());

// Connect to MongoDB, before running the Express server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is now listening on PORT ${PORT}.`)
    });
});