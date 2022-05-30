const db = require('../helpers/db');

exports.getAll = async function () {
    return await db.query({
        query: "SELECT * FROM sign_up_code"
    })
}

exports.getByCode = async function (code) {
    return await db.query({
        query: "SELECT * FROM sign_up_code WHERE code=?",
        param: [code]
    })
}

exports.add = async function (code) {
    return await db.query({
        query: `INSERT INTO sign_up_code (code) VALUES (?)`,
        param: [code]
    })
}

exports.delete = async function (code) {
    return await db.query({
        query: `DELETE FROM sign_up_code WHERE code=?`,
        param: [code]
    })
}
