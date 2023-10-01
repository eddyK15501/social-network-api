const { User, Thought } = require('../models')

module.exports = {
    // GET USERS
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // GET USER BY ID
    getSingleUser: async (req, res) => {
        try {
            const user = await User.findOne({ id: req.params.userId });

            if (!user) {
                res.status(404).json({ message: "No User found with id." });
                return;
            }
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // POST NEW USER
    createUser: async (req, res) => {

    },
    // UPDATE USER BY ID
    updateUser: async (req, res) => {

    },
    // DELETE USER BY ID
    deleteUser: async (req, res) => {

    },
}