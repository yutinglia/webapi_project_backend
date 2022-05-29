'use strict';


/**
 * Delete message by message id
 *
 * id Integer message id
 * returns inline_response_200_1
 **/
exports.deleteMessages = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all chats info
 *
 * returns inline_response_200_5
 **/
exports.getChats = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all message by chat owner user id
 *
 * userID Integer chat owner user id
 * returns inline_response_200_6
 **/
exports.getMessages = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get message by current user
 *
 * returns inline_response_200_6
 **/
exports.getSelfMessages = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send message by chat owner user id
 *
 * body Messages_userID_body  (optional)
 * userID Integer chat owner user id
 * returns inline_response_200_1
 **/
exports.sendMessages = function(body,userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send message by current user
 *
 * body Messages_self_body  (optional)
 * returns inline_response_200_1
 **/
exports.sendMessagesForSelf = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

