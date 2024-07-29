const express = require('express');
const router = express.Router();

// Example route for parks
router.get('/', (req, res) => {
    res.send('Parks route');
});

module.exports = router;
