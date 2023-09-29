const router = require('express').Router();

// Send 404 for wrong routes
router.use((req, res) => {
    res.status(404).send('<h1>404 Error.</h1>')
});

module.exports = router;