var express = require('express');
var router = express.Router();
var messages = require('../models/messages');
var config = require('../config');
const asyncHandler = require('express-async-handler')

router.get('/self', asyncHandler(async function (req, res, next) {
    const { id } = req.user;
    const result = await messages.getByUserID(id);
    if (result[0]) {
        res.json({ status: 0, messages: result });
    } else {
        res.json({ status: 0, messages: [] });
    }
}));

router.post('/self', asyncHandler(async function (req, res, next) {
    const { msg } = req.body;
    const { id } = req.user;
    await messages.add({ user: id, sender: id, msg });
    res.json({ status: 0 });
}));

module.exports = router;
