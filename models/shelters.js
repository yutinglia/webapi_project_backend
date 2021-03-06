const db = require('../helpers/db');

exports.getAll = async function () {
    return await db.query({
        query: `SELECT * FROM shelters`
    })
}

exports.getByID = async function (id) {
    return await db.query({
        query: `SELECT * FROM shelters WHERE id =?`,
        param: [id]
    })
}

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
