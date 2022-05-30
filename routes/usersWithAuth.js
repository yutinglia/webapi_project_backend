var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler')
var config = require('../config')
const users = require('../models/users')

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(config.GOOGLE_CLIENT_ID);

// get current user data
router.get('/self', function (req, res, next) {
    const { id, username, type } = req.user;
    res.json({ status: 0, user: { id, username, type } });
});

// get current user google data
router.get('/self/google', asyncHandler(async function (req, res, next) {
    const { username } = req.user;
    const result = await users.getByUsername(username);
    const user = result[0];
    res.json({ status: 0, google: { id: user.google_oauth_id, email: user.google_oauth_email } });
}));

// add google data
router.post('/self/google', asyncHandler(async function (req, res, next) {
    const { id } = req.user;
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: config.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const result = await users.getByGoogleID(payload.sub);
    if (result[0]) return res.json({ status: 1, err: "This email is already connected" });

    await users.update({ id, google_oauth_id: payload.sub, google_oauth_email: payload.email })

    res.json({ status: 0 });
}));

module.exports = router;
