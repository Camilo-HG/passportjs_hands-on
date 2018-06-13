// Require .env config
const path = require('path');
const dotenv = require("dotenv")
  .config({
    path: path.resolve(process.cwd(), 'config/.env')
  });

const mongoose = require('mongoose');

// DB Config
let dbName;

switch (process.env.NODE_ENV) {
    case "test":
        dbName = "project-test";
        break;
    case "production":
        dbName = "project";
        break;
    default:
        dbName = "project-dev";
}

const dbAddress = process.env.DB_HOST || "127.0.0.1";
const dbPort = process.env.DB_PORT || 27017;

let options;

if (process.env.DB_AUTH === "true") {
    options["user"] = process.env.DB_USER;
    options["pass"] = process.env.DB_PASS;
}

var connStr = `mongodb://${dbAddress}:${dbPort}/${dbName}`;

mongoose.connect(connStr, options)
  .then(() =>  console.log('Successfully connected to MongoDB'))
  .catch((err) => console.error(err));
