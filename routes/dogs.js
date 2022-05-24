var express = require('express');
var router = express.Router();
var dogs = require('../models/dogs');
var config = require('../config');
const asyncHandler = require('express-async-handler')

router.get('/', asyncHandler(async function (req, res, next) {
    let { page, limit } = req.query;
    page = page || -1;
    limit = limit || -1;
    const result = await dogs.getByPage(page, limit);
    const count = await dogs.getCount();
    res.json({ status: 0, dogs: result, total: count[0].count.toString() });
}));

module.exports = router;
