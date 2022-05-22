var jwt = require('jsonwebtoken');
const config = require('./config');

const authentication = (req, res, next) => {
    try {
        let token = req.headers.authorization
        jwt.verify(token, config.JWT_SECRET_KEY, function (err, decoded) {
            if (err) {
                return res.status(401).json({ err: 'Unauthorized!' });
            } else {
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
                next();
            }
        });
    } catch (err) {
        return res.status(500).json({ err: "Server error" });
    }
};

module.exports = authentication;