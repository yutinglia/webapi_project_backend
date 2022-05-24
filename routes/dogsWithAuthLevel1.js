var express = require('express');
var router = express.Router();
var dogs = require('../models/dogs');
const asyncHandler = require('express-async-handler')
const multer = require('multer')
var path = require('path')
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const dogsImgStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/dogs')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, 'dog-img-' + uuidv4() + path.extname(file.originalname))
    }
})

const dogImgUpload = multer({ storage: dogsImgStorage })

router.post('/', dogImgUpload.single('image'), asyncHandler(async function (req, res, next) {
    const { name, type, chip_id, birthday, shelter } = req.body;
    // console.log(req.file);
    // console.log(req.body);
    if (!name || !type || !chip_id || !birthday || !shelter) { return res.status(500).send({ status: 2, err: "Please POST all data" }); }
    // console.log(name, type, chip_id, birthday, shelter);
    const result = await dogs.add({
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

router.put('/', dogImgUpload.single('image'), asyncHandler(async function (req, res, next) {
    const { id, name, type, chip_id, birthday, shelter, img } = req.body;
    if (!id, !name || !type || !chip_id || !birthday || !shelter) { return res.status(500).send({ status: 2, err: "Please PUT all data" }); }
    // console.log(name, type, chip, birthday, shelter);
    // console.log(req.body);
    // delete old image
    if (img && req.file) {
        fs.unlink(path.join(__dirname, '..', 'public', 'images', 'dogs', img), (err) => {
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

module.exports = router;
