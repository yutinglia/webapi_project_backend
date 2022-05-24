var jwt = require('jsonwebtoken');
const config = require('../../config');
var users = require('../../models/users');

const verifyData = async (user) => {
    const result = await users.getByUsername(user.username);
    return (result.id === user.id && result.username === user.username && result.type === user.type);
}

const authentication = (req, res, next) => {
    try {
        console.log("Check access token");
        let token = req.headers.authorization
        jwt.verify(token, config.JWT_SECRET_KEY, function (err, decoded) {
            if (err) {
                console.log("Not Pass");
                return res.status(401).json({ err: 'Unauthorized!' });
            } else {
                // verify user information
                if (!decoded || !verifyData(decoded)) {
                    console.log("Verify Data Fail");
                    return res.status(401).json({ err: 'Unauthorized!' });
                }
                // refresh token
                const { id, username, type } = decoded;
                const token = jwt.sign({ id, username, type }, config.JWT_SECRET_KEY, { expiresIn: config.JWT_EXPIRES_TIME });
                // add new token to body
                let json = res.json;
                res.json = function (body) {
                    body.newToken = token;
                    json.call(this, body);
                }
                // pass token data to request
                req.user = decoded;
                console.log("Pass");
                next();
            }
        });
    } catch (err) {
        console.log("Not Pass:Server error");
        return res.status(500).json({ err: "Server error" });
    }
};

module.exports = authentication;