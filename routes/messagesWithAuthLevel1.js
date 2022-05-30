var express = require('express');
var router = express.Router();
var messages = require('../models/messages');
var config = require('../config');
const asyncHandler = require('express-async-handler')

router.get('/', asyncHandler(async function (req, res, next) {
    const result = await messages.getAllChat();
    if (result[0]) {
        res.json({ status: 0, chats: result });
    } else {
        res.json({ status: 0, chats: [] });
    }
}));

router.get('/:userID', asyncHandler(async function (req, res, next) {
    const { userID } = req.params;
    const result = await messages.getByUserID(userID);
    if (result[0]) {
        res.json({ status: 0, messages: result });
    } else {
        res.json({ status: 0, messages: [] });
    }
}));

router.post('/:userID', asyncHandler(async function (req, res, next) {
    const { msg } = req.body;
    const { userID } = req.params;
    const { id } = req.user;
    await messages.add({ user: userID, sender: id, msg });
    res.json({ status: 0 });
}));

router.delete('/:id', asyncHandler(async function (req, res, next) {
    const { id } = req.params;
    await messages.delete(id);
    res.json({ status: 0 });
}));

module.exports = router;
