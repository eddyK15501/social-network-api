// CommonJS import express & mongoose
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware for parsing JSON requests/responses
app.use(express.json());

// Connect to Mongoose; Best practice, hide MongoDB URI in .env for security purposes;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api')
    .then(() => console.log('Mongoose connected'))
    .catch(err => console.log(err))

// Server listening on localhost:3001
app.listen(3001, () => {
    console.log('Server is now listening on PORT 3001.')
});