const router = require('express').Router();

router.route('/').get(() => console.log('THOUGHT ROUTES'));

module.exports = router;