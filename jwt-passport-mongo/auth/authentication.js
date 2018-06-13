// Require .env config
const path = require('path');
const dotenv = require('dotenv')
  .config({
    path: path.resolve(process.cwd(), 'config/.env')
  });

var jwt = require('jsonwebtoken');

// Require passport
const passport = require("passport");
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

// require User model
const User = require('../models/user');

const jwtOptions = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey : process.env.SECRET || 'Secret',
};

var strategy = new JwtStrategy(jwtOptions,
  function(jwt_payload, done) {

    console.log('payload received', jwt_payload);

    var user = User.findById(jwt_payload.id,
      function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      }
    );
  }
);

module.exports = function(passport){
  passport.use(strategy);
}
