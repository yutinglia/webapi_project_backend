var express = require('express');
var router = express.Router();
var users = require('../models/users');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var config = require('../config');
const asyncHandler = require('express-async-handler')

router.post('/', asyncHandler(async function (req, res, next) {
    const { ac, pw } = req.body;
    if (!ac || !pw) { return res.status(500).send({ status: 2, err: "Please POST ac & pw" }); }

    const account = await users.getByUsername(ac);
    if (!account || !account[0]) { return res.json({ status: 1, err: "Account no found" }); }

    // check password
    const { id, username, pwd_hash, salt, type } = account[0];
    const saltedPwd = username + pw + type + salt;
    const hash = crypto.createHash('sha512').update(saltedPwd).digest('hex');
    if (hash !== pwd_hash) { return res.json({ status: 1, err: "Wrong password" }) }

    // sign token
    const token = jwt.sign({ id, username, type }, config.JWT_SECRET_KEY, { expiresIn: config.JWT_EXPIRES_TIME });
    res.json({ status: 0, token: token, user: { id, username, type } });
}));

module.exports = router;
