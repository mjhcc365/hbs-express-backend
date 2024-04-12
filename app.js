// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // 解析cookie
var logger = require('morgan'); //  日志中间件
var fileUpload = require('express-fileupload');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// // 监听数据库连接成功事件
db.once('open', () => {
    console.log('Connected to MongoDB');
});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const filesRouter = require('./routes/file');
const tempRouter = require('./routes/temp')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // html模板引擎

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(fileUpload());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/files', filesRouter)
app.use('/temps', tempRouter)
// 定义POST请求的路由

module.exports = app;
