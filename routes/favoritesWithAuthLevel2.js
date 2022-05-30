var express = require('express');
var router = express.Router();
var favorites = require('../models/favorites');
var config = require('../config');
const asyncHandler = require('express-async-handler')
var dogs = require('../models/dogs');

// get user favorites
router.get('/', asyncHandler(async function (req, res, next) {
    const result = await favorites.getByUserID(req.user.id);
    res.json({ status: 0, favorites: result });
}));

// add favorites
router.post('/', asyncHandler(async function (req, res, next) {
    const { dogID } = req.body;
    await favorites.add({
        user: req.user.id,
        dog: dogID
    });
    res.json({ status: 0 });
}));

// delete favorites
router.delete('/:dogID', asyncHandler(async function (req, res, next) {
    const { dogID } = req.params;
    await favorites.delete(req.user.id, dogID);
    res.json({ status: 0 });
}));

module.exports = router;
