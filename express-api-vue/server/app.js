var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var cors = require('cors');
var corsOptions = require('./utils/corsOptions.js');
const errorHandler = require('./utils/errorHandler.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var booksRouter = require('./routes/books');
var testRouter = require('./routes/test');

var dotenv = require('dotenv');
dotenv.config();

var app = express();

app.use(logger('dev'));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(process.env.BASE_URL, [indexRouter, usersRouter, authRouter, booksRouter, testRouter]);

// global error handler
app.use(errorHandler);

module.exports = app;
