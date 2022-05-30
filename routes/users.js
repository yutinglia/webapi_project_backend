var express = require('express');
var router = express.Router();
var signUpCodes = require('../models/signUpCodes')
var crypto = require('crypto')
var users = require('../models/users');
const asyncHandler = require('express-async-handler')

// create new user
router.post('/', asyncHandler(async function (req, res, next) {
    const { ac, pw, code, type } = req.body;
    if (!ac || !pw || !type) { return res.status(500).send({ status: 2, err: "Please POST ac & pw & code" }); }
    if (type === "1" && !code) { return res.status(500).send({ status: 2, err: "Please POST ac & pw & code" }); }

    const account = await users.getByUsername(ac);
    if (account && account[0]) { return res.json({ status: 1, err: "Username already exists" }); }

    let signUpCode = [{ id: null }];

    if (type === "1") {
        // check sign up code
        signUpCode = await signUpCodes.getByCode(code);
        if (!signUpCode || !signUpCode[0]) { return res.json({ status: 1, err: "Sign Up Code Not Found!" }); }
        if (signUpCode[0].enable === 0) { return res.json({ status: 1, err: "Sign Up Code Is Already Disabled!" }); }
    }

    // hashing password
    const max = 64;
    const min = 32;
    const length = Math.floor(Math.random() * (max - min + 1) + min);
    const salt = crypto.randomBytes(length).toString('hex');
    const saltedPwd = ac + pw + type + salt;
    const pwd_hash = crypto.createHash('sha512').update(saltedPwd).digest('hex');

    const result = await users.create({
        username: ac,
        pwd_hash,
        salt,
        type,
        sign_up_code: signUpCode[0].id
    });

    if (result) {
        res.json({ status: 0 });
    } else {
        res.status(500).json({ status: 2, err: "Unknown Error" });
    }
}));

module.exports = router;
