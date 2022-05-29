'use strict';

var utils = require('../utils/writer.js');
var Index = require('../service/IndexService');

module.exports.index = function index (req, res, next) {
  Index.index()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
