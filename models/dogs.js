const db = require('../helpers/db');

const queryAdapter = (query) => {
    return (
        [
            [
                {
                    key: "dogs.name",
                    like: true,
                    value: query.name
                },
                {
                    key: "dogs.type",
                    like: true,
                    value: query.type
                },
                {
                    key: "dogs.chip_id",
                    like: true,
                    value: query.chip_id
                }
            ],
            [
                {
                    key: "dogs.shelter",
                    like: false,
                    value: query.shelter
                }
            ]
        ]
    )
}

exports.query = async function (page = -1, limit = -1, query = {}) {
    // page
    const pageInt = parseInt(page);
    const limitInt = parseInt(limit);
    let pageSql = "";
    let pageParam = [];
    if (pageInt > 0 && limitInt > 0) {
        const offset = (pageInt - 1) * limitInt;
        pageSql += "LIMIT ?,?"
        pageParam = [offset, limitInt];
    }
    // search and filter
    const queryObj = db.makeQuery(query, queryAdapter);
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
                    ${queryObj.sql}
                    ${pageSql}`,
        param: [...queryObj.param, ...pageParam]
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
                    WHERE dogs.id=?`,
        param: [id]
    })
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
        sql += `${key} =?,`
    }
    sql = sql.slice(0, -1);
    values.push(id);
    // console.log(id, sql, values);
    return await db.query({
        query: `UPDATE dogs SET ${sql} WHERE id =? `,
        param: values
    })
}

exports.getCount = async function (query) {
    queryObj = db.makeQuery(query, queryAdapter);
    return await db.query({
        query: `SELECT COUNT(*) AS count FROM dogs ${queryObj.sql}`,
        param: [...queryObj.param]
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
        query: `INSERT INTO dogs(${keys}) VALUES(${pStr})`,
        param: values
    })
}

exports.delete = async function (id) {
    return await db.query({
        query: `DELETE FROM dogs WHERE id=?`,
        param: [id]
    })
}
