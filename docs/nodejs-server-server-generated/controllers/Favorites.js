'use strict';

var utils = require('../utils/writer.js');
var Favorites = require('../service/FavoritesService');

module.exports.addFavorites = function addFavorites (req, res, next, body) {
  Favorites.addFavorites(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFavorites = function deleteFavorites (req, res, next, dogID) {
  Favorites.deleteFavorites(dogID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFavorites = function getFavorites (req, res, next) {
  Favorites.getFavorites()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
