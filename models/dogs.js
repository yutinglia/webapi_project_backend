const db = require('../helpers/db');

exports.getAll = async function () {
    return await db.query({
        query: `SELECT
                dogs.id AS id,
                dogs.type AS type,
                dogs.name AS name,
                dogs.birthday AS birthday,
                dogs.shelter AS shelter_id,
                dogs.chip_id AS chip_id,
                dogs.img AS img,
                shelters.name AS shelter_name,
                shelters.address AS shelter_address
                FROM dogs
                LEFT JOIN shelters
                ON dogs.shelter = shelters.id`
    })
}

exports.getByID = async function (id) {
    return await db.query({
        query: `SELECT
                dogs.id AS id,
                dogs.type AS type,
                dogs.name AS name,
                dogs.birthday AS birthday,
                dogs.shelter AS shelter_id,
                dogs.chip_id AS chip_id,
                dogs.img AS img,
                shelters.name AS shelter_name,
                shelters.address AS shelter_address
                FROM dogs
                LEFT JOIN shelters
                ON dogs.shelter = shelters.id
                WHERE dogs.id = ?`,
        param: [id]
    })
}

exports.getByPage = async function (p = -1, l = -1) {
    const page = parseInt(p);
    const limit = parseInt(l);
    if (page === -1 || limit === -1) {
        return await module.exports.getAll();
    } else {
        const offset = (page - 1) * limit;
        return await db.query({
            query: `SELECT
                    dogs.id AS id,
                    dogs.type AS type,
                    dogs.name AS name,
                    dogs.birthday AS birthday,
                    dogs.shelter AS shelter_id,
                    dogs.chip_id AS chip_id,
                    dogs.img AS img,
                    shelters.name AS shelter_name,
                    shelters.address AS shelter_address
                    FROM dogs
                    LEFT JOIN shelters
                    ON dogs.shelter = shelters.id
                    LIMIT ?, ?`,
            param: [offset, limit]
        })
    }
}

exports.update = async function (dog) {
    // remove old undefined fields from object
    Object.keys(dog).forEach(key => dog[key] === undefined && delete dog[key])
    const id = dog.id;
    delete dog.id;
    let keys = Object.keys(dog)
    let values = Object.values(dog)
    let sql = "";
    for (key of keys) {
        sql += `${key}=?,`
    }
    sql = sql.slice(0, -1);
    values.push(id);
    // console.log(id, sql, values);
    return await db.query({
        query: `UPDATE dogs SET ${sql} WHERE id=?`,
        param: values
    })
}

exports.getCount = async function () {
    return await db.query({
        query: "SELECT COUNT(*) AS count FROM dogs"
    })
}

exports.add = async function (dog) {
    // remove old undefined fields from object
    Object.keys(dog).forEach(key => dog[key] === undefined && delete dog[key])
    let keys = Object.keys(dog)
    let values = Object.values(dog)
    keys = keys.join(',')
    let pStr = ''
    for (i = 0; i < values.length; i++) { pStr += '?,' }
    pStr = pStr.slice(0, -1)
    return await db.query({
        query: `INSERT INTO dogs (${keys}) VALUES (${pStr})`,
        param: values
    })
}
