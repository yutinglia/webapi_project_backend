const db = require('../helpers/db');

/**
 * get all sign_up_code in the database
 * @returns list of sign_up_code
 */
exports.getAll = async function () {
    return await db.query({
        query: "SELECT * FROM sign_up_code"
    })
}

/**
 * get sign_up_code by code for verify code
 * @param {string} code sign up code
 * @returns sign up code data
 */
exports.getByCode = async function (code) {
    return await db.query({
        query: "SELECT * FROM sign_up_code WHERE code=?",
        param: [code]
    })
}

/**
 * add new sign_up_code to the database
 * @param {string} code sign up code
 * @returns database result
 */
exports.add = async function (code) {
    return await db.query({
        query: `INSERT INTO sign_up_code (code) VALUES (?)`,
        param: [code]
    })
}

/**
 * delete sign_up_code from database
 * @param {string} code sign up code
 * @returns database result
 */
exports.delete = async function (code) {
    return await db.query({
        query: `DELETE FROM sign_up_code WHERE code=?`,
        param: [code]
    })
}
