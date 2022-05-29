'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.addGoogleSignInData = function addGoogleSignInData (req, res, next, body) {
  Users.addGoogleSignInData(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSelfGoogleInfo = function getSelfGoogleInfo (req, res, next) {
  Users.getSelfGoogleInfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSelfInfo = function getSelfInfo (req, res, next) {
  Users.getSelfInfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.register = function register (req, res, next, body) {
  Users.register(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
