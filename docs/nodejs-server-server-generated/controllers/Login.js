'use strict';

var utils = require('../utils/writer.js');
var Login = require('../service/LoginService');

module.exports.login = function login (req, res, next, body) {
  Login.login(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginWithGoogle = function loginWithGoogle (req, res, next, body) {
  Login.loginWithGoogle(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
