'use strict';


/**
 * Add dog to current user favorites by bearer token
 *
 * body Favorites_body  (optional)
 * returns inline_response_200_1
 **/
exports.addFavorites = function(body) {
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
 * delete dog from current user favorites by bearer token
 *
 * dogID Integer Dog id
 * returns inline_response_200_1
 **/
exports.deleteFavorites = function(dogID) {
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
 * Get current user favorites by bearer token
 *
 * returns inline_response_200_3
 **/
exports.getFavorites = function() {
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

