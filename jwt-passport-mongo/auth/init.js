var authentication = require('./authentication');

module.exports = function(passport){

    // Setting up Passport Strategies for Login and SignUp/Registration
    authentication(passport);
}
