var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var grainsRouter = require('./routes/grains')
var hopsRouter = require('./routes/hops')
var maltsRouter = require('./routes/malts')
var recipesRouter = require('./routes/recipes')
var yeastsRouter = require('./routes/yeasts')




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
