const mongoose = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        reactions: []
    }
)