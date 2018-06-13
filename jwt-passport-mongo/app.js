// Require .env config
const path = require('path');
const dotenv = require('dotenv')
  .config({
    path: path.resolve(process.cwd(), 'config/.env')
  });

const express = require('express');
const bodyParser = require('body-parser');

// Require db
const db = require('./db-config');


const app = express();

// Parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
  extended: true
}));

// Parse application/json
app.use(bodyParser.json())

// Configuring Passport
const passport = require('passport');
app.use(passport.initialize());

// Initialize Passport
const initPassport = require('./auth/init');
initPassport(passport);

const routes = require('./routes/index')(passport);
app.use('/', routes);

// Run app
const appPort = process.env.APP_PORT || 3000;

app.listen(appPort, function() {
  console.log(`Express server listening on port ${appPort}.\nEnvironment: ${process.env.NODE_ENV}`);
});
