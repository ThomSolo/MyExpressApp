var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

 //added
// handle the request to save an edited lead
app.post('/leads/:id', function(req, res) {
  // retrieve the lead with the given ID from the database
  Lead.findById(req.params.id, function(err, lead) {
    if (err) {
      // handle the error
      res.status(500).send('Error occurred while retrieving the lead from the database');
      return;
    }
    // update the lead with the new values
    lead.username = req.body.username;
    lead.email = req.body.email;

    // save the updated lead to the database
    lead.save(function(err) {
      if (err) {
        // handle the error
        res.status(500).send('Error occurred while updating the lead in the database');
        return;
      }
      // redirect the user to the list of leads
      res.redirect('/leads');
    });
  });
});
//added code ended

module.exports = app;

