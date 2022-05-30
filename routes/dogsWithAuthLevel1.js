var express = require('express');
var router = express.Router();
var dogs = require('../models/dogs');
var shelters = require('../models/shelters');
const asyncHandler = require('express-async-handler')
const multer = require('multer')
var path = require('path')
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
var favorites = require('../models/favorites');
var config = require('../config')

const { TwitterApi } = require("twitter-api-v2");

const twitterClient = new TwitterApi({
    appKey: config.TWITTER_API_KEYS.API_KEY,
    appSecret: config.TWITTER_API_KEYS.API_KEY_SECRET,
    accessToken: config.TWITTER_API_KEYS.ACCESS_TOKEN,
    accessSecret: config.TWITTER_API_KEYS.ACCESS_TOKEN_SECRET
})

const dogsImgStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        // save image to disk
        cb(null, 'public/images/dogs')
    },
    filename: function (req, file, cb) {
        // rename image file
        cb(null, 'dog-img-' + uuidv4() + path.extname(file.originalname))
    }
})

const dogImgUpload = multer({ storage: dogsImgStorage })

// add dog
router.post('/', dogImgUpload.single('image'), asyncHandler(async function (req, res, next) {
    const { name, type, chip_id, birthday, shelter } = req.body;

    if (!name || !type || !chip_id || !birthday || !shelter) { return res.status(500).send({ status: 2, err: "Please POST all data" }); }

    const shelterInfo = (await shelters.getByID(shelter))[0];

    const result = await dogs.add({
        name,
        type,
        chip_id,
        birthday,
        shelter,
        img: req.file ? req.file.filename : undefined
    });

    // post tweet to twitter
    await twitterClient.v2.tweet(`
--For School Project--
A new dog is posted to the website:
Name: ${name}
Type: ${type}
Chip ID: ${chip_id}
Birthday: ${new Date(birthday).toLocaleDateString()}
Shelter: ${shelterInfo.name}
--For School Project--`
    )

    if (result) {
        res.json({ status: 0 });
    } else {
        res.status(500).json({ status: 2, err: "Unknown Error" });
    }
}));

// update dog information
router.put('/:id', dogImgUpload.single('image'), asyncHandler(async function (req, res, next) {
    const { id } = req.params;
    const { name, type, chip_id, birthday, shelter } = req.body;
    if (!id, !name || !type || !chip_id || !birthday || !shelter) { return res.status(500).send({ status: 2, err: "Please PUT all data" }); }

    // delete old image when update image if user upload new image
    const dog = await dogs.getByID(id);
    const oldImg = dog[0].img;
    if (oldImg && req.file) {
        fs.unlink(path.join(__dirname, '..', 'public', 'images', 'dogs', oldImg), (err) => {
            if (err) throw err
        });
    }
    const result = await dogs.update({
        id,
        name,
        type,
        chip_id,
        birthday,
        shelter,
        img: req.file ? req.file.filename : undefined
    });

    if (result) {
        res.json({ status: 0 });
    } else {
        res.status(500).json({ status: 2, err: "Unknown Error" });
    }
}));

// delete dog
router.delete('/:id', asyncHandler(async function (req, res, next) {
    const { id } = req.params;
    const dog = await dogs.getByID(id);
    const img = dog[0].img;
    if (img) {
        fs.unlink(path.join(__dirname, '..', 'public', 'images', 'dogs', img), (err) => {
            if (err) throw err
        });
    }
    const result = await dogs.delete(id);
    const result2 = await favorites.deleteByDog(id);
    if (result && result2) {
        res.json({ status: 0 });
    } else {
        res.status(500).json({ status: 2, err: "Unknown Error" });
    }
}));

module.exports = router;
