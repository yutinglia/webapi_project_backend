const authentication = (req, res, next) => {
    // check user auth level higher then or equal to worker
    console.log("Check auth level 1 :", req.user.type);
    if (req.user.type <= 1) {
        console.log("Pass");
        next();
    } else {
        console.log("Not Pass");
        return res.status(401).json({ err: 'Unauthorized!' });
    }
};

module.exports = authentication;