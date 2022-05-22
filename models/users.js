const db = require('../helpers/db');

exports.getByUsername = async function (username) {
    return await db.query({
        query: "SELECT * FROM USERS WHERE USERNAME=?",
        param: [username]
    })
}

exports.create = async function (user) {
    let keys = Object.keys(user)
    let values = Object.values(user)
    keys = keys.join(',')
    let pStr = ''
    for (i = 0; i < values.length; i++) { pStr += '?,' }
    pStr = pStr.slice(0, -1)
    return await db.query({
        query: `INSERT INTO USERS (${keys}) VALUES (${pStr})`,
        param: values
    })
}
