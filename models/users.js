const db = require('../helpers/db');

/**
 * get user data by username
 * @param {string} username username
 * @returns user data
 */
exports.getByUsername = async function (username) {
    return await db.query({
        query: "SELECT * FROM USERS WHERE USERNAME=?",
        param: [username]
    })
}

/**
 * get user data by google identity
 * @param {string} id google identity id
 * @returns user data
 */
exports.getByGoogleID = async function (id) {
    return await db.query({
        query: "SELECT * FROM USERS WHERE google_oauth_id=?",
        param: [id]
    })
}

/**
 * add new user to database
 * @param {object} user user object
 * @returns database result
 */
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

/**
 * update user data from database
 * @param {object} user user object
 * @returns database result
 */
exports.update = async function (user) {
    // remove old undefined fields from object
    Object.keys(user).forEach(key => user[key] === undefined && delete user[key])
    const id = user.id;
    delete user.id;
    let keys = Object.keys(user)
    let values = Object.values(user)
    let sql = "";
    for (key of keys) {
        sql += `${key} =?,`
    }
    sql = sql.slice(0, -1);
    values.push(id);
    // console.log(id, sql, values);
    return await db.query({
        query: `UPDATE users SET ${sql} WHERE id =? `,
        param: values
    })
}
