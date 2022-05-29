'use strict';


/**
 * Add Sign Up Codes
 *
 * body Signupcode_body  (optional)
 * returns inline_response_200_1
 **/
exports.addSignUpCodes = function(body) {
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
 * Get All sign up code
 *
 * returns inline_response_200_8
 **/
exports.getSignUpCodes = function() {
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

