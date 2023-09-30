const mongoose = require("mongoose");

// Schema to create Reaction model
const reactionSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    reactionId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    // Add getter method to format timestamp on query
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        const formatDate = new Date(date);
        return `${
          formatDate.getMonth() + 1
        }/${formatDate.getDate()}/${formatDate.getFullYear()}`;
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;