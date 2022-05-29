'use strict';


/**
 * Add dog
 *
 * returns inline_response_200_1
 **/
exports.addDog = function() {
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
 * Delete dog by id
 *
 * id Integer Dog id
 * returns inline_response_200_1
 **/
exports.deleteDogsByID = function(id) {
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
 * Edit dog by id
 *
 * id Integer Dog id
 * returns inline_response_200_1
 **/
exports.editDogByID = function(id) {
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
 * Get dogs by query
 *
 * page Integer Page number for pagination. If no, then get all. (optional)
 * limit Integer Data count of each page (optional)
 * search String Dog name or type that need to be considered for filter (optional)
 * shelter Integer Shelter id that need to be considered for filter (optional)
 * returns inline_response_200
 **/
exports.getDogs = function(page,limit,search,shelter) {
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
 * Get dog by id
 *
 * id Integer Dog id
 * returns inline_response_200_2
 **/
exports.getDogsByID = function(id) {
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

