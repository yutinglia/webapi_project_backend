'use strict';

var utils = require('../utils/writer.js');
var SignUpCode = require('../service/SignUpCodeService');

module.exports.addSignUpCodes = function addSignUpCodes (req, res, next, body) {
  SignUpCode.addSignUpCodes(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSignUpCodes = function getSignUpCodes (req, res, next) {
  SignUpCode.getSignUpCodes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
