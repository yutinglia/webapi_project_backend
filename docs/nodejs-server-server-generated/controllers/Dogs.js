'use strict';

var utils = require('../utils/writer.js');
var Dogs = require('../service/DogsService');

module.exports.addDog = function addDog (req, res, next) {
  Dogs.addDog()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDogsByID = function deleteDogsByID (req, res, next, id) {
  Dogs.deleteDogsByID(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editDogByID = function editDogByID (req, res, next, id) {
  Dogs.editDogByID(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDogs = function getDogs (req, res, next, page, limit, search, shelter) {
  Dogs.getDogs(page, limit, search, shelter)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDogsByID = function getDogsByID (req, res, next, id) {
  Dogs.getDogsByID(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
