var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./api/index');
var grainsRouter = require('./api/grainsController')
var hopsRouter = require('./api/hopsController')
var maltsRouter = require('./api/maltsController')
var recipesRouter = require('./api/recipesController')
var yeastsRouter = require('./api/yeastsController')




var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/grains', grainsRouter);
app.use('/hops', hopsRouter);
app.use('/malts', maltsRouter);
app.use('/recipes', recipesRouter);
app.use('/yeasts', yeastsRouter);

module.exports = app;
