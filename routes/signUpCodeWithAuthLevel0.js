var express = require('express');
var router = express.Router();
var signUpCode = require('../models/signUpCodes');
var config = require('../config');
const asyncHandler = require('express-async-handler')

// get all sign up code
router.get('/', asyncHandler(async function (req, res, next) {
    const result = await signUpCode.getAll();
    if (result[0]) {
        res.json({ status: 0, codes: result });
    } else {
        res.json({ status: 0, codes: [] });
    }
}));

// add new sign up code
router.post('/', asyncHandler(async function (req, res, next) {
    const { code } = req.body;
    await signUpCode.add(code);
    res.json({ status: 0 });
}));

module.exports = router;
