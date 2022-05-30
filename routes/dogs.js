var express = require('express');
var router = express.Router();
var dogs = require('../models/dogs');
var config = require('../config');
const asyncHandler = require('express-async-handler')

// get all dogs
router.get('/', asyncHandler(async function (req, res, next) {
    let { page, limit, search, shelter } = req.query;
    const queryValues = {
        name: search,
        type: search,
        chip_id: search,
        shelter: shelter
    }
    const result = await dogs.query(page, limit, queryValues);
    const count = await dogs.getCount(queryValues);
    res.json({ status: 0, dogs: result, total: count[0].count.toString() });
}));

// get dog by id
router.get('/:id', asyncHandler(async function (req, res, next) {
    let { id } = req.params;
    const result = await dogs.getByID(id);
    if (result[0]) {
        res.json({ status: 0, dog: result[0] });
    } else {
        res.json({ status: 1, err: "Dog Not Found" });
    }
}));

module.exports = router;
