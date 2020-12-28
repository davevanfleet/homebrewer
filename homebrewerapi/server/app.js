import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import recipesRouter from './routes/recipes'
import grainsRouter from './routes/grains'
import hopsRouter from './routes/hops'
import maltsRouter from './routes/malts'
import yeastsRouter from './routes/yeasts'

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);
app.use('/grains', grainsRouter);
app.use('/hops', hopsRouter);
app.use('/malts', maltsRouter);
app.use('/yeasts', yeastsRouter);

export default app;
