const db = require('../helpers/db');
const { v4: uuidv4 } = require('uuid');

exports.getAllChat = async function (id) {
    return await db.query({
        query: `
        SELECT
            m.msg_datetime AS last_msg_datetime,
            m.user,
            u1.username AS username,
            m.sender,
            u2.username AS sender_name,
            m.msg
        FROM messages m
        LEFT JOIN users u1 ON m.user=u1.id
        LEFT JOIN users u2 ON m.sender=u2.id
        RIGHT JOIN (
            SELECT MAX(msg_datetime) AS max_dt FROM messages GROUP BY user
        ) m2 ON m.msg_datetime = m2.max_dt
        ORDER BY last_msg_datetime DESC`
    })
}

exports.getByUserID = async function (id) {
    return await db.query({
        query: `
        SELECT
            m.user,
            u1.username AS username,
            m.sender,
            u2.username AS sender_name,
            m.msg,
            m.msg_datetime,
            m.id
        FROM messages m
        JOIN users u1 ON m.user=u1.id
        JOIN users u2 ON m.sender=u2.id
        WHERE m.user=?
        ORDER BY m.msg_datetime`,
        param: [id]
    })
}

exports.add = async function (shelter) {
    shelter.id = uuidv4();
    let keys = Object.keys(shelter)
    let values = Object.values(shelter)
    keys = keys.join(',')
    let pStr = ''
    for (i = 0; i < values.length; i++) { pStr += '?,' }
    pStr = pStr.slice(0, -1)
    return await db.query({
        query: `INSERT INTO messages (${keys}) VALUES (${pStr})`,
        param: values
    })
}

exports.delete = async function (id) {
    return await db.query({
        query: `DELETE FROM messages WHERE id=?`,
        param: [id]
    })
}
