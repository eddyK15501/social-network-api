const router = require('express').Router();

router.route('/').get(() => console.log('USER ROUTES'));

module.exports = router;