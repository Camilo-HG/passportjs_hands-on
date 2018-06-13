// Require .env config
const path = require('path');
const dotenv = require('dotenv')
  .config({
    path: path.resolve(process.cwd(), 'config/.env')
  });

// require User model
const User = require('../models/user');

module.exports = function(req, res) {
  email = req.body.email.toLowerCase();
  password = req.body.password;

  // find a user in Mongo with provided user's email
  User.findOne({ 'email' :  email },
    function(err, user) {
      var msg;

      // In case of any error, return using the done method
      if (err){
        msg = `Error in SignUp.\n${err}`
        console.log(msg);

        return res.status(500).send(msg);
      }

      // already exists
      if (user) {
        msg = `User already exists with email: ${email}`
        console.log(msg);

        return res.status(401).send(msg);
      } else {
        // if there is no user with that email
        // create the user
        var newUser = new User();

        // Set user's info
        newUser.email = email;
        newUser.password = password;

        if (req.body.firstName) {
          newUser.firstName = req.body.firstName
        }
        if (req.body.lastName) {
          newUser.lastName = req.body.lastName
        }

        // save the user
        newUser.save(function(err) {
          var msg;

          if (err){
            msg = `Error in Saving user.\n${err}`
            console.log(msg);

            return res.status(500).send(msg);
          }
          delete newUser.password;
          msg = `User Registration succesful.\nnewUser : ${newUser}`
          console.log(msg);

          return res.status(201).json(newUser);
        });
      };
    }
  );
}
