const authentication = (req, res, next) => {
    // check user auth level higher then or equal to admin
    console.log("Check auth level 0 :", req.user.type);
    if (req.user.type <= 0) {
        console.log("Pass");
        next();
    } else {
        console.log("Not Pass");
        return res.status(401).json({ err: 'Unauthorized!' });
    }
};

module.exports = authentication;