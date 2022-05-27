const db = require('../helpers/db');

exports.getByUserID = async function (id) {
    return await db.query({
        query: `SELECT * FROM favorites LEFT JOIN dogs ON favorites.dog=dogs.id WHERE user=?`,
        param: [id]
    })
}

exports.add = async function (userAndDog) {
    let keys = Object.keys(userAndDog)
    let values = Object.values(userAndDog)
    keys = keys.join(',')
    let pStr = ''
    for (i = 0; i < values.length; i++) { pStr += '?,' }
    pStr = pStr.slice(0, -1)
    return await db.query({
        query: `INSERT INTO favorites (${keys}) VALUES (${pStr})`,
        param: values
    })
}

exports.delete = async function (user, dog) {
    return await db.query({
        query: `DELETE FROM favorites WHERE user=? AND dog=?`,
        param: [user, dog]
    })
}

exports.deleteByDog = async function (id) {
    return await db.query({
        query: `DELETE FROM favorites WHERE dog=?`,
        param: [id]
    })
}
