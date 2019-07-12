var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dataPush = require('./routes/dataPush');

var app = express();

let server = require('http').createServer(app);

let io = require('socket.io')(server,{
  path: '/test',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
})


require('./routes/websocket')(io);
// view engine setup
app.engine('html',ejs.renderFile)
app.set('views', path.join(__dirname, '../client/build/'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/build/')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/dataPush', dataPush);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err)
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('index3');
});

module.exports = app;
