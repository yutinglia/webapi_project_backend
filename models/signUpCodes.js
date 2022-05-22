const db = require('../helpers/db');

exports.getByCode = async function (code) {
    return await db.query({
        query: "SELECT * FROM sign_up_code WHERE code=?",
        param: [code]
    })
}

exports.create = async function (code) {
    return await db.query({
        query: `INSERT INTO sign_up_code (code) VALUES (?)`,
        param: [code]
    })
}
