var express = require('express');
var router = express.Router();
var dogs = require('../models/dogs');
var config = require('../config');

router.get('/', async function (req, res, next) {
    const result = await dogs.getAll();
    res.json({ status: 0, dogs: result });
});

module.exports = router;
