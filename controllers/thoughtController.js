const { User, Thought } = require('../models');

module.exports = {
    // GET THOUGHTS
    getThoughts: async (req, res) => {
        try {
            const thoughts = await Thought.find();
            res.status(200).json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // GET THOUGHT BY ID
    getSingleThought: async (req, res) => {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select("-__v");

            if (!thought) {
                return res.status(404).json({ message: "No Thought was found with this id." });
            }

            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // CREATE NEW THOUGHT
    createThought: async (req, res) => {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id } },
                { new: true },
            );

            if (!user) {
                return res.status(404).json({ message: 'Thought was created. But no User was found with that id.' });
            }

            res.status(201).json(thought);
         } catch (err) {
            res.status(500).json(err);
        }
    },
    // UPDATE THOUGHT BY ID
    updateThought: async (req, res) => {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true },
            );

            if (!thought) {
                return res.status(404).json({ message: "No thought was found with that id!" });
            }

            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // DELETE THOUGHT BY ID
    deleteThought: async (req, res) => {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    // ADD NEW REACTION TO THOUGHT'S REACTION ARRAY
    addReaction: async (req, res) => {

    },
    // REMOVE REACTION BY ID
    removeReaction: async (req, res) => {

    },
}