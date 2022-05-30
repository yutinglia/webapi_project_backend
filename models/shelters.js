const db = require('../helpers/db');

/**
 * get all shelters data
 * @returns list of shelter
 */
exports.getAll = async function () {
    return await db.query({
        query: `SELECT * FROM shelters`
    })
}

/**
 * get shelter data by shelter id
 * @param {number} id shelter id
 * @returns shelter data
 */
exports.getByID = async function (id) {
    return await db.query({
        query: `SELECT * FROM shelters WHERE id =?`,
        param: [id]
    })
}

/**
 * add shelter to database
 * @param {object} shelter shelter object including name and address
 * @returns database result
 */
exports.add = async function (shelter) {
    let keys = Object.keys(shelter)
    let values = Object.values(shelter)
    keys = keys.join(',')
    let pStr = ''
    for (i = 0; i < values.length; i++) { pStr += '?,' }
    pStr = pStr.slice(0, -1)
    return await db.query({
        query: `INSERT INTO shelters (${keys}) VALUES (${pStr})`,
        param: values
    })
}
