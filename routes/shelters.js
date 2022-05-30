var express = require('express');
var router = express.Router();
var shelters = require('../models/shelters');
var config = require('../config');
const asyncHandler = require('express-async-handler')

// get all shelters
router.get('/', asyncHandler(async function (req, res, next) {
    const result = await shelters.getAll();
    res.json({ status: 0, shelters: result });
}));

module.exports = router;
