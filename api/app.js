if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV == null) {
  require('dotenv').config(); // Load .env
}
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const passportJWT = require('passport-jwt');

const User = require('./models/User');

const auth = require('./routes/auth');
const index = require('./routes/index');
const posts = require('./routes/posts');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: '*'
}));

// Passport + User
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// Passport and jwt
passport.use(new passportJWT.Strategy(
  {
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeader(),
    secretOrKey: process.env.TOKEN_SECRET
  },
  (payload, done) => {
    User.findById(payload.sub, done)
  }
))
// Express + Passport
app.use(passport.initialize());

app.use('/auth', auth);
app.use('/api/', index);
app.use('/api/posts', posts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
