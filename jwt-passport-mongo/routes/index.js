const express = require('express');
const signup = require('../auth/signup');
const login = require('../auth/login');
const router = express.Router();

module.exports = function(passport){

  /* GET login page. */
  router.get('/', function(req, res) {
    // Display the Login page
    res.json({ message: 'Express is up!' });
  });

  /* Handle Registration POST */
  router.post('/signup', function(req, res) {
    signup(req, res);
  });

  /* Handle Registration POST */
  router.post('/login', function(req, res) {
    login(req, res);
  });

  /* Handle GET */
  router.get('/secret', passport.authenticate('jwt', { session : false }), function(req, res){
    res.json("Success! You can not see this without a token");
  });

  return router;
}
