const router = require('express').Router();
const { getUsers, getSingleUser } = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers);

module.exports = router;