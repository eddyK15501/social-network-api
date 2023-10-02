const { User, Thought } = require("../models");

module.exports = {
  // GET USERS
  getUsers: async (req, res) => {
    try {
      const users = await User.find().select("-__v");
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // GET USER BY ID
  getSingleUser: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );
      // .populate('thoughts')
      // .populate('friends')

      // Commented out; Populates 'thoughts' & 'friends' array with associated data.

      if (!user) {
        res.status(404).json({ message: "No User found with id." });
        return;
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // POST NEW USER
  createUser: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      // Send HTTP status 201: Created
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // UPDATE USER BY ID
  updateUser: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "No user was found with this id." });
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // DELETE USER BY ID
  deleteUser: async (req, res) => {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res
          .status(404)
          .json({ message: "No user was found with this id." });
      }

      res.status(200).json({ message: "User successfully deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
