var express = require('express');
var router = express.Router();

router.get('/self', function (req, res, next) {
    const { id, username, type } = req.user;
    res.json({ status: 0, user: { id, username, type } }); // for server status checking
});

module.exports = router;
