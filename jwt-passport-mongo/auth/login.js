// Require .env config
const path = require('path');
const dotenv = require('dotenv')
  .config({
    path: path.resolve(process.cwd(), 'config/.env')
  });

var jwt = require('jsonwebtoken');

// require User model
const User = require('../models/user');

module.exports = function(req, res) {

  email = req.body.email;
  password = req.body.password;

  const secretOrKey = process.env.SECRET || 'Secret';

  // check in mongo if a user with provided email exists or not
  User.findOne({ 'email' : email },
    function(err, user) {
      var msg;

      // In case of any error, return using the done method
      if (err) return done(err);

      // User's email does not exist, log the error and redirect back
      if (!user){
        msg = `User Not Found with email ${email}`;
        console.log(msg);

        return res.status(401).send(msg);
      }

      // User exists but wrong password, log the error
      user.comparePassword(password, function(err, isMatch) {
        if(err) return res.status(500).send(err);

        if (isMatch) {
          var payload = {id: user.id};
          var token = jwt.sign(payload, secretOrKey);

          // User and password both match, return user from done method
          // which will be treated like success
          delete user.password;
          return res.status(200).send({user, token});
        } else {
          msg = 'Invalid Password'
          console.log(msg);

          return res.status(401).send(msg);
        }
      });
    }
  );
}
