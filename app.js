var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var config = require('./config')

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');

var checkAndRefreshToken = require('./checkAndRefreshToken')

var testAuthRouter = require('./routes/testAuth');
var usersWithAuthRouter = require('./routes/usersWithAuth');

var app = express();

app.use(cors({
    origin: config.REACT_SERVER_URL,
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);

app.use(checkAndRefreshToken);

app.use('/users', usersWithAuthRouter);
app.use('/test-auth', testAuthRouter);

module.exports = app;
