var express = require('express');
var router = express.Router();

// get server status
router.get('/', function (req, res, next) {
    res.json({ status: 0 }); // for server status checking
});

module.exports = router;
