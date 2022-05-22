var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json({ status: 1 }); // for server status checking
});

module.exports = router;
