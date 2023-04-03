var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

//we made this one
//var userRouter = require('./routes/usersRouter');

var users = require('./models/users');
var assignments = require('./models/assignments');
var courses = require('./models/courses');
var submissions = require('./models/submissions');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

var mongoose = require('mongoose');
var uri = "mongodb+srv://eebalboni:j3Am4vgTXuRUufCf@cluster0.shlik9e.mongodb.net/autoGrader?retryWrites=true&w=majority";
console.log(uri);

//connecting using mongoose
mongoose
  .connect(uri, {useNewUrlParse:true})
  .then(() => {
    console.log(
      "succesfully connected to db"
    );
  })
  .catch((err) => {
    console.error('error connecting to db');
  });


app.use('/', indexRouter);


app.use('/users', users);
app.use('/courses', courses);
app.use('/submissions',submissions);
app.use('/assignments', assignments);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
