'use strict';


/**
 * Login
 *
 * body Login_body  (optional)
 * returns inline_response_200_4
 **/
exports.login = function(body) {
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
 * Login with google
 *
 * body Login_google_body  (optional)
 * returns inline_response_200_4
 **/
exports.loginWithGoogle = function(body) {
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

