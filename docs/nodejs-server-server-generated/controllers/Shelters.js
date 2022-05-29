'use strict';

var utils = require('../utils/writer.js');
var Shelters = require('../service/SheltersService');

module.exports.addShelter = function addShelter (req, res, next, body) {
  Shelters.addShelter(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getShelters = function getShelters (req, res, next) {
  Shelters.getShelters()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
