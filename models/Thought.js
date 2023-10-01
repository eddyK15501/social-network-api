// Import Reaction Schema for embedding
const mongoose = require("mongoose");
const Reactions = require("./Reaction");

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
    reactions: [Reactions],
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
      virtuals: true,
    },
    id: false,
  }
);

// Retrieve thought's reactions array length
thoughtSchema.virtual("reactionCount").get(() => {
  return thoughtSchema.reactions.length;
});

// Initialize Thought model
const Thought = mongoose.model("thought", thoughtSchema);

module.exports = thoughtSchema;
