var express = require('express');
var router = express.Router();
var shelters = require('../models/shelters');
var config = require('../config');
const asyncHandler = require('express-async-handler')

// add new shelter
router.post('/', asyncHandler(async function (req, res, next) {
    const { name, address } = req.body;
    if (!name || !address) { return res.status(500).send({ status: 2, err: "Please POST all data" }); }
    await shelters.add({ name, address });
    res.json({ status: 0 });
}));

module.exports = router;
