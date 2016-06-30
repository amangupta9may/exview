﻿var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var http = require('http');
var users = require('./routes/users');

var demo = require('./routes/exviewapi');

var app = express();

// view engine setup
//app.set('port', process.env.PORT || 1515);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});

//uncomment if required
app.use('/api/users', users);
app.use('/api',demo);



// app.get('/confirm', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/confirm.html'));
// });
app.get('/revenuepage',function(req,res) {
    res.sendFile(path.join(__dirname + '/public/revenue.html'));
});


// catch 404 and forward to error handler
app.use('/',function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use('/',function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


 //http.createServer(app).listen(app.get('port'), function () {
 //    console.log('Express server listening on port ' + app.get('port'));
    // console.log(__dirname);
 //});



module.exports = app;
