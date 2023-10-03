const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId

// /api/thoughts/:thoughtId/reactions

module.exports = router;
