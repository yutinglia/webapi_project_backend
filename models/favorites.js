const db = require('../helpers/db');

/**
 * get user dog favorites by user id
 * @param {number} id user id
 * @returns list of user favorites
 */
exports.getByUserID = async function (id) {
    return await db.query({
        query: `SELECT * FROM favorites LEFT JOIN dogs ON favorites.dog=dogs.id WHERE user=?`,
        param: [id]
    })
}

/**
 * add favorites by user id and dog id
 * @param {object} userAndDog user id and dog id
 * @returns database result
 */
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

/**
 * delete user favorites by user id and dog id
 * @param {number} user user id
 * @param {number} dog dog id
 * @returns database result
 */
exports.delete = async function (user, dog) {
    return await db.query({
        query: `DELETE FROM favorites WHERE user=? AND dog=?`,
        param: [user, dog]
    })
}

/**
 * delete all user favorites by dog id, for delete dog
 * @param {number} id dog id
 * @returns database result
 */
exports.deleteByDog = async function (id) {
    return await db.query({
        query: `DELETE FROM favorites WHERE dog=?`,
        param: [id]
    })
}
