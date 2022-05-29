'use strict';

var utils = require('../utils/writer.js');
var Messages = require('../service/MessagesService');

module.exports.deleteMessages = function deleteMessages (req, res, next, id) {
  Messages.deleteMessages(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getChats = function getChats (req, res, next) {
  Messages.getChats()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMessages = function getMessages (req, res, next, userID) {
  Messages.getMessages(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSelfMessages = function getSelfMessages (req, res, next) {
  Messages.getSelfMessages()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendMessages = function sendMessages (req, res, next, body, userID) {
  Messages.sendMessages(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendMessagesForSelf = function sendMessagesForSelf (req, res, next, body) {
  Messages.sendMessagesForSelf(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
