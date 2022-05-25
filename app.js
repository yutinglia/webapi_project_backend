var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var config = require('./config')

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');
var dogsRouter = require('./routes/dogs');
var sheltersRouter = require('./routes/shelters')

var checkAndRefreshToken = require('./middlewares/auth/checkAndRefreshToken')
var checkAuthLevel0 = require('./middlewares/auth/checkAuthLevel0')
var checkAuthLevel1 = require('./middlewares/auth/checkAuthLevel1')
var checkAuthLevel2 = require('./middlewares/auth/checkAuthLevel2')

var usersWithAuthRouter = require('./routes/usersWithAuth');
var dogsWithAuthLevel1Router = require('./routes/dogsWithAuthLevel1')
var favoritesWithAuthLevel2Router = require('./routes/favoritesWithAuthLevel2')

var app = express();

app.use(cors({
    origin: config.REACT_SERVER_URL,
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// without auth

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/dogs', dogsRouter);
app.use('/shelters', sheltersRouter);


// with auth

// ==================
// Auth Level :
// Level 2 = public
// Level 1 = worker
// Level 0 = admin
// ==================


// check have access auth and verify account data
app.use(checkAndRefreshToken);
app.use('/users', usersWithAuthRouter);


// check user auth level higher then or equal to public
app.use(checkAuthLevel2);
app.use('/favorites', favoritesWithAuthLevel2Router);


// check user auth level higher then or equal to worker
app.use(checkAuthLevel1);
app.use('/dogs', dogsWithAuthLevel1Router);


// check user auth level higher then or equal to admin
app.use(checkAuthLevel0);



// error handler
app.use(function (err, req, res, next) {
    console.error("Error Handler:");
    console.error(err.stack);
    res.status(500).send({ status: 2, err: "Server Error" });
});

module.exports = app;
