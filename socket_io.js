const io = require("socket.io")();
const config = require('./config');
var users = require('./models/users');
var jwt = require('jsonwebtoken');

const verifyData = async (user) => {
    const result = await users.getByUsername(user.username);
    return (result.id === user.id && result.username === user.username && result.type === user.type);
}

io.use((socket, next) => {
    try {
        console.log("Socket.io check access token");
        const token = socket.handshake.auth.token;
        jwt.verify(token, config.JWT_SECRET_KEY, function (err, decoded) {
            if (err) {
                console.log("Socket.io not Pass");
                next(new Error('Authentication error'));
            } else {
                // verify user information
                if (!decoded || !verifyData(decoded)) {
                    console.log("Socket.io Verify Data Fail");
                    next(new Error('Authentication error'));
                }
                // pass token data to request
                socket.user = decoded;
                console.log("Pass");
                next();
            }
        });
    } catch (err) {
        console.log("Socket.io Not Pass:Server error");
        next(new Error('Authentication error'));
    }
});

io.on("connection", function (socket) {
    console.log("A user connected");
    socket.on("c-updated-message", () => {
        socket.broadcast.emit("s-updated-message");
    })
    socket.on("disconnect", (reason) => {
        console.log("A user disconnect because: " + reason);
    });
});

module.exports = io;